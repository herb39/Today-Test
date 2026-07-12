import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { Resvg } from '@resvg/resvg-js'
import QRCode from 'qrcode'
import { allTests } from '../src/data/tests'
import { getShareDescription, getShareEmoji, getViralTitle } from '../src/utils/resultDisplay'
import { mixWithBlack } from '../src/utils/color'
import type { TestDefinition, TestResult } from '../src/types/test'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = join(__dirname, '..', 'dist')
const templatePath = join(distDir, 'index.html')
const ogDir = join(distDir, 'og')
const storyDir = join(distDir, 'story')

// 이 스크립트는 Vite가 아닌 순수 Node(tsx)로 실행되므로 import.meta.env를 쓸 수 없다.
// process.env에서 직접 읽는다 (package.json의 generate:static이 --env-file-if-exists=.env로 로드).
const siteConfig = {
  name: process.env.VITE_SITE_NAME || '오늘의 테스트',
  url: (process.env.VITE_SITE_URL || 'https://test.lib.lc').replace(/\/+$/, ''),
}

interface PageMeta {
  path: string
  title: string
  description: string
  image?: string
  jsonLd?: Record<string, unknown> | Record<string, unknown>[]
}

function buildPageList(): PageMeta[] {
  const pages: PageMeta[] = [
    {
      path: '/',
      title: `${siteConfig.name} | 심리·성향 테스트 모음`,
      description: '번아웃 유형, 집중 스타일, 연애 유형, AI 생존 유형까지. 3분 만에 즐기는 심리·성향 테스트.',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: siteConfig.name,
        url: siteConfig.url,
      },
    },
    { path: '/about', title: `소개 | ${siteConfig.name}`, description: `${siteConfig.name} 서비스 소개입니다.` },
    {
      path: '/privacy',
      title: `개인정보처리방침 | ${siteConfig.name}`,
      description: `${siteConfig.name}의 개인정보처리방침입니다.`,
    },
    {
      path: '/terms',
      title: `이용약관 | ${siteConfig.name}`,
      description: `${siteConfig.name}의 이용약관입니다.`,
    },
    {
      path: '/contact',
      title: `문의 | ${siteConfig.name}`,
      description: `${siteConfig.name}에 문의하는 방법을 안내합니다.`,
    },
  ]

  for (const test of allTests) {
    if (!test.isPublished) continue
    const quizJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Quiz',
      name: test.title,
      description: test.description,
      about: test.category,
    }
    const faqJsonLd = test.seo.faq?.length
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: test.seo.faq.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answer },
          })),
        }
      : null
    pages.push({
      path: `/tests/${test.slug}`,
      title: test.seo.title,
      description: test.seo.description,
      image: `/og/${test.slug}.png`,
      jsonLd: faqJsonLd ? [quizJsonLd, faqJsonLd] : quizJsonLd,
    })
    for (const result of test.results) {
      pages.push({
        path: `/tests/${test.slug}/result/${result.id}`,
        title: `${result.title} - ${test.title} | ${siteConfig.name}`,
        description: result.summary,
        // 결과마다 고유한 OG 이미지를 쓴다 — 카카오톡 등에서 링크 미리보기를 열었을 때
        // 실제로 어떤 결과가 나왔는지 한눈에 보이게 해 클릭/재공유율을 높이기 위함.
        image: `/og/${test.slug}/${result.id}.png`,
        jsonLd: {
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: `${result.title} - ${test.title}`,
          description: result.summary,
          isPartOf: {
            '@type': 'Quiz',
            name: test.title,
          },
        },
      })
    }
  }

  return pages
}

function setTag(html: string, regex: RegExp, replacement: string): string {
  return html.match(regex) ? html.replace(regex, replacement) : html
}

const gaMeasurementId = process.env.VITE_GA_MEASUREMENT_ID || ''

// GA4 공식 설치 가이드대로 모든 페이지의 <head>에 정적으로 심는다.
// (React가 마운트된 뒤 JS로 뒤늦게 주입하면 최신 브라우저의 추적 방지 휴리스틱에
// 의심스러운 스크립트로 분류되어 수집 자체가 조용히 무시될 수 있다.)
const gaTag = gaMeasurementId
  ? `
    <script async src="https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('consent', 'default', {
        ad_storage: 'granted',
        analytics_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted',
      });
      gtag('js', new Date());
      gtag('config', '${gaMeasurementId}');
    </script>`
  : ''

function renderPage(template: string, page: PageMeta): string {
  const url = `${siteConfig.url}${page.path}`
  const imageUrl = `${siteConfig.url}${page.image ?? '/og/default.png'}`
  const fullTitle = page.title

  let html = template
  html = setTag(html, /<title>.*?<\/title>/s, `<title>${fullTitle}</title>`)
  html = setTag(
    html,
    /<meta name="description" content=".*?"\s*\/?>/s,
    `<meta name="description" content="${page.description}" />`,
  )

  const extraTags = `${gaTag}
    <link rel="canonical" href="${url}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="${siteConfig.name}" />
    <meta property="og:title" content="${fullTitle}" />
    <meta property="og:description" content="${page.description}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${imageUrl}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${fullTitle}" />
    <meta name="twitter:description" content="${page.description}" />
    <meta name="twitter:image" content="${imageUrl}" />${
      page.jsonLd
        ? (Array.isArray(page.jsonLd) ? page.jsonLd : [page.jsonLd])
            .map((entry) => `\n    <script type="application/ld+json">${JSON.stringify(entry)}</script>`)
            .join('')
        : ''
    }
  </head>`

  html = html.replace('</head>', extraTags)
  return html
}

function writePage(page: PageMeta, html: string): void {
  const outDir = page.path === '/' ? distDir : join(distDir, page.path.slice(1))
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true })
  writeFileSync(join(outDir, 'index.html'), html, 'utf-8')
}

function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function truncate(text: string, max: number): string {
  return text.length > max ? `${text.slice(0, max - 1)}…` : text
}

const FONT_FAMILY = "system-ui, 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif"

/** SVG는 카카오톡 등 다수의 링크 미리보기 크롤러가 렌더링하지 못하므로, 반드시 PNG로 래스터라이즈해서 내보낸다. */
function rasterizeToPng(svg: string): Buffer {
  return new Resvg(svg).render().asPng()
}

function buildOgSvg(options: { emoji: string; title: string; subtitle: string; color: string }): string {
  const { emoji, title, subtitle, color } = options
  const titleFontSize = title.length > 14 ? 56 : 68
  return `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${color}" stop-opacity="0.16" />
      <stop offset="100%" stop-color="${color}" stop-opacity="0.04" />
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="#fafaf9" />
  <rect width="1200" height="630" fill="url(#bg)" />
  <text x="600" y="230" font-size="140" text-anchor="middle" dominant-baseline="middle">${escapeXml(emoji)}</text>
  <text x="600" y="360" font-size="${titleFontSize}" font-weight="700" fill="#1c1917" text-anchor="middle" dominant-baseline="middle" font-family="${FONT_FAMILY}">${escapeXml(title)}</text>
  <text x="600" y="430" font-size="30" fill="#57534e" text-anchor="middle" dominant-baseline="middle" font-family="${FONT_FAMILY}">${escapeXml(subtitle)}</text>
  <text x="600" y="560" font-size="26" font-weight="600" fill="${color}" text-anchor="middle" dominant-baseline="middle" font-family="${FONT_FAMILY}">${escapeXml(siteConfig.name)}</text>
</svg>
`
}

/** 결과별 OG 카드 — 어떤 결과가 나왔는지 링크 미리보기만 보고도 알 수 있게 한다. */
function buildResultOgSvg(test: TestDefinition, result: TestResult): string {
  const title = getViralTitle(result)
  const titleFontSize = title.length > 14 ? 52 : 64
  const subtitle = truncate(getShareDescription(result), 42)
  const emoji = getShareEmoji(result)
  const color = result.color

  return `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${color}" stop-opacity="0.2" />
      <stop offset="100%" stop-color="${color}" stop-opacity="0.05" />
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="#fafaf9" />
  <rect width="1200" height="630" fill="url(#bg)" />
  <text x="600" y="110" font-size="26" font-weight="600" fill="${color}" text-anchor="middle" dominant-baseline="middle" font-family="${FONT_FAMILY}">${escapeXml(test.title)}</text>
  <text x="600" y="240" font-size="130" text-anchor="middle" dominant-baseline="middle">${escapeXml(emoji)}</text>
  <text x="600" y="380" font-size="${titleFontSize}" font-weight="700" fill="#1c1917" text-anchor="middle" dominant-baseline="middle" font-family="${FONT_FAMILY}">${escapeXml(title)}</text>
  <text x="600" y="450" font-size="28" fill="#57534e" text-anchor="middle" dominant-baseline="middle" font-family="${FONT_FAMILY}">${escapeXml(subtitle)}</text>
  <text x="600" y="560" font-size="26" font-weight="600" fill="${color}" text-anchor="middle" dominant-baseline="middle" font-family="${FONT_FAMILY}">${escapeXml(siteConfig.name)}</text>
</svg>
`
}

/** 인스타그램 스토리(9:16)용 세로형 이미지. QR로 결과 링크를 바로 스캔할 수 있게 한다. */
async function buildStorySvg(test: TestDefinition, result: TestResult, resultUrl: string): Promise<string> {
  const qrDataUrl = await QRCode.toDataURL(resultUrl, { margin: 1, width: 260 })
  const title = getViralTitle(result)
  const titleFontSize = title.length > 12 ? 60 : 72
  const emoji = getShareEmoji(result)
  const bgFrom = mixWithBlack(result.color, 0.2)
  const bgTo = mixWithBlack(result.color, 0.6)

  return `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${bgFrom}" />
      <stop offset="100%" stop-color="${bgTo}" />
    </linearGradient>
  </defs>
  <rect width="1080" height="1920" fill="url(#bg)" />
  <text x="540" y="200" font-size="40" font-weight="600" fill="#ffffffcc" text-anchor="middle" dominant-baseline="middle" font-family="${FONT_FAMILY}">${escapeXml(test.title)}</text>
  <text x="540" y="800" font-size="280" text-anchor="middle" dominant-baseline="middle">${escapeXml(emoji)}</text>
  <text x="540" y="990" font-size="${titleFontSize}" font-weight="800" fill="#ffffff" text-anchor="middle" dominant-baseline="middle" font-family="${FONT_FAMILY}">${escapeXml(title)}</text>
  <image x="420" y="1520" width="240" height="240" href="${qrDataUrl}" />
  <text x="540" y="1800" font-size="30" fill="#ffffffb3" text-anchor="middle" dominant-baseline="middle" font-family="${FONT_FAMILY}">${escapeXml(siteConfig.url.replace(/^https?:\/\//, ''))}</text>
</svg>
`
}

async function generateOgImages(): Promise<void> {
  if (!existsSync(ogDir)) mkdirSync(ogDir, { recursive: true })

  for (const test of allTests) {
    if (!test.isPublished) continue

    const svg = buildOgSvg({
      emoji: test.emoji,
      title: test.title,
      subtitle: `질문 ${test.questions.length}개 · 약 ${test.estimatedMinutes}분`,
      color: test.theme.color,
    })
    writeFileSync(join(ogDir, `${test.slug}.png`), rasterizeToPng(svg))

    const resultOgDir = join(ogDir, test.slug)
    const resultStoryDir = join(storyDir, test.slug)
    if (!existsSync(resultOgDir)) mkdirSync(resultOgDir, { recursive: true })
    if (!existsSync(resultStoryDir)) mkdirSync(resultStoryDir, { recursive: true })

    for (const result of test.results) {
      const resultSvg = buildResultOgSvg(test, result)
      writeFileSync(join(resultOgDir, `${result.id}.png`), rasterizeToPng(resultSvg))

      const resultUrl = `${siteConfig.url}/tests/${test.slug}/result/${result.id}`
      const storySvg = await buildStorySvg(test, result, resultUrl)
      writeFileSync(join(resultStoryDir, `${result.id}.png`), rasterizeToPng(storySvg))
    }
  }

  const defaultSvg = buildOgSvg({
    emoji: '🔮',
    title: siteConfig.name,
    subtitle: '심리·성향 테스트 모음',
    color: '#7c3aed',
  })
  writeFileSync(join(ogDir, 'default.png'), rasterizeToPng(defaultSvg))
}

function generateSitemap(pages: PageMeta[]): void {
  const urls = pages
    .map((page) => `  <url><loc>${siteConfig.url}${page.path}</loc></url>`)
    .join('\n')
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
  writeFileSync(join(distDir, 'sitemap.xml'), xml, 'utf-8')
}

async function main() {
  if (!existsSync(templatePath)) {
    console.error('dist/index.html이 없습니다. 먼저 vite build를 실행하세요.')
    process.exit(1)
  }

  const template = readFileSync(templatePath, 'utf-8')
  const pages = buildPageList()

  await generateOgImages()

  for (const page of pages) {
    const html = renderPage(template, page)
    writePage(page, html)
  }

  generateSitemap(pages)

  console.log(`정적 메타데이터 생성 완료: ${pages.length}개 경로, sitemap.xml 포함`)
}

main()
