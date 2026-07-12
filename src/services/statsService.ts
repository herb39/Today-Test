export type PopularWindow = 'today' | 'week' | 'trending'

export interface PopularEntry {
  slug: string
  count: number
}

/**
 * 인기/통계 조회 인터페이스. 지금은 이 프로젝트의 자체 Worker(worker/index.ts)가
 * Cloudflare KV로 답하지만, 트래픽이 늘어 별도 통계 서버로 옮기게 되면 이 인터페이스를
 * 구현하는 새 클래스로 교체하고 getStatsService()의 반환값만 바꾸면 된다.
 */
export interface StatsService {
  /** 완료 기록은 응답을 기다릴 필요가 없어 실패해도 사용자 경험에 영향을 주지 않는다. */
  recordCompletion(slug: string, resultId: string): void
  getPopular(window: PopularWindow, slugs: string[]): Promise<PopularEntry[]>
  /** 표본이 너무 적으면 null을 반환한다 — 그 경우 통계를 아예 보여주지 않는다. */
  getResultShare(slug: string, resultId: string): Promise<number | null>
}

class ApiStatsService implements StatsService {
  recordCompletion(slug: string, resultId: string): void {
    fetch('/api/stats/complete', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ slug, resultId }),
      keepalive: true,
    }).catch(() => {
      // 통계 API가 없는 로컬 개발 환경(vite dev)이나 일시적 실패는 조용히 무시한다.
    })
  }

  async getPopular(window: PopularWindow, slugs: string[]): Promise<PopularEntry[]> {
    if (slugs.length === 0) return []
    try {
      const res = await fetch(`/api/stats/popular?window=${window}&slugs=${encodeURIComponent(slugs.join(','))}`)
      if (!res.ok) return []
      const data = (await res.json()) as { tests?: PopularEntry[] }
      return data.tests ?? []
    } catch {
      return []
    }
  }

  async getResultShare(slug: string, resultId: string): Promise<number | null> {
    try {
      const res = await fetch(
        `/api/stats/result-share?slug=${encodeURIComponent(slug)}&resultId=${encodeURIComponent(resultId)}`,
      )
      if (!res.ok) return null
      const data = (await res.json()) as { available: boolean; percent?: number }
      return data.available && typeof data.percent === 'number' ? data.percent : null
    } catch {
      return null
    }
  }
}

let instance: StatsService | null = null

export function getStatsService(): StatsService {
  if (!instance) instance = new ApiStatsService()
  return instance
}
