/**
 * 이 사이트의 첫 서버 사이드 로직. 인기/통계 기능을 위한 가벼운 조회수 카운터만
 * 다루고, 그 외 모든 요청은 정적 자산(dist)으로 그대로 넘긴다. KV는 원자적 증가를
 * 보장하지 않아 동시 요청이 몰리면 카운트가 아주 약간 어긋날 수 있지만, "인기
 * 순위" 같은 참고용 지표에는 그 정도 오차가 문제되지 않는다 — 정확한 집계가
 * 필요해지면 Durable Objects로 옮기면 된다.
 */

interface Env {
  ASSETS: Fetcher
  STATS_KV: KVNamespace
}

const MAX_ID_LENGTH = 64
const COUNTER_TTL_SECONDS = 60 * 60 * 24 * 60 // 60일 뒤 자동 만료 — 오래된 일별 버킷이 무한히 쌓이지 않게 한다.
const MIN_SAMPLE_FOR_SHARE = 20 // 표본이 너무 적으면 "42%가 나와 같은 유형" 같은 통계가 오해를 부를 수 있어 숨긴다.

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  })
}

function isValidId(value: unknown): value is string {
  return typeof value === 'string' && value.length > 0 && value.length <= MAX_ID_LENGTH && /^[a-z0-9-]+$/.test(value)
}

function dateKey(daysAgo: number): string {
  return new Date(Date.now() - daysAgo * 86_400_000).toISOString().slice(0, 10)
}

async function incr(kv: KVNamespace, key: string): Promise<void> {
  const current = Number((await kv.get(key)) ?? '0')
  await kv.put(key, String(current + 1), { expirationTtl: COUNTER_TTL_SECONDS })
}

async function handleComplete(request: Request, env: Env): Promise<Response> {
  let body: { slug?: unknown; resultId?: unknown }
  try {
    body = await request.json()
  } catch {
    return json({ error: 'invalid body' }, 400)
  }

  if (!isValidId(body.slug)) return json({ error: 'invalid slug' }, 400)
  const slug = body.slug

  const tasks = [incr(env.STATS_KV, `daily:${slug}:${dateKey(0)}`), incr(env.STATS_KV, `total:${slug}`)]
  if (isValidId(body.resultId)) {
    tasks.push(incr(env.STATS_KV, `result:${slug}:${body.resultId}`))
  }
  await Promise.all(tasks)
  return json({ ok: true })
}

async function sumDailyRange(kv: KVNamespace, slug: string, days: number, offset: number): Promise<number> {
  const values = await Promise.all(
    Array.from({ length: days }, (_, i) => kv.get(`daily:${slug}:${dateKey(offset + i)}`)),
  )
  return values.reduce((sum, v) => sum + Number(v ?? '0'), 0)
}

function parseSlugs(request: Request): string[] {
  const raw = new URL(request.url).searchParams.get('slugs') ?? ''
  return raw
    .split(',')
    .map((s) => s.trim())
    .filter(isValidId)
    .slice(0, 200)
}

async function handlePopular(request: Request, env: Env): Promise<Response> {
  const url = new URL(request.url)
  const mode = url.searchParams.get('window')
  const slugs = parseSlugs(request)
  if (slugs.length === 0) return json({ tests: [] })

  if (mode === 'trending') {
    // 최근 1일 완료 수가 그 이전 6일 평균보다 뚜렷이 높은 테스트를 "급상승"으로 본다.
    const ranked = await Promise.all(
      slugs.map(async (slug) => {
        const recent = await sumDailyRange(env.STATS_KV, slug, 1, 0)
        const baselineTotal = await sumDailyRange(env.STATS_KV, slug, 6, 1)
        const baselineAvg = baselineTotal / 6
        return { slug, count: recent, score: recent - baselineAvg }
      }),
    )
    const trending = ranked
      .filter((t) => t.count > 0 && t.score > 0)
      .sort((a, b) => b.score - a.score)
      .map(({ slug, count }) => ({ slug, count }))
    return json({ window: 'trending', tests: trending })
  }

  const days = mode === 'week' ? 7 : 1
  const ranked = await Promise.all(
    slugs.map(async (slug) => ({ slug, count: await sumDailyRange(env.STATS_KV, slug, days, 0) })),
  )
  const tests = ranked
    .filter((t) => t.count > 0)
    .sort((a, b) => b.count - a.count)
  return json({ window: days === 7 ? 'week' : 'today', tests })
}

async function handleResultShare(request: Request, env: Env): Promise<Response> {
  const url = new URL(request.url)
  const slug = url.searchParams.get('slug')
  const resultId = url.searchParams.get('resultId')
  if (!isValidId(slug) || !isValidId(resultId)) return json({ error: 'invalid query' }, 400)

  const [totalRaw, resultRaw] = await Promise.all([
    env.STATS_KV.get(`total:${slug}`),
    env.STATS_KV.get(`result:${slug}:${resultId}`),
  ])
  const total = Number(totalRaw ?? '0')
  const resultCount = Number(resultRaw ?? '0')

  if (total < MIN_SAMPLE_FOR_SHARE) return json({ available: false })
  return json({ available: true, percent: Math.round((resultCount / total) * 100) })
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url)

    if (url.pathname === '/api/stats/complete' && request.method === 'POST') {
      return handleComplete(request, env)
    }
    if (url.pathname === '/api/stats/popular' && request.method === 'GET') {
      return handlePopular(request, env)
    }
    if (url.pathname === '/api/stats/result-share' && request.method === 'GET') {
      return handleResultShare(request, env)
    }
    if (url.pathname.startsWith('/api/')) {
      return json({ error: 'not found' }, 404)
    }

    return env.ASSETS.fetch(request)
  },
}
