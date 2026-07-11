import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { allTests } from '../src/data/tests'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = join(__dirname, '..', 'dist')
const templatePath = join(distDir, 'index.html')
const ogDir = join(distDir, 'og')

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
  jsonLd?: Record<string, unknown>
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
    const image = `/og/${test.slug}.svg`
    pages.push({
      path: `/tests/${test.slug}`,
      title: test.seo.title,
      description: test.seo.description,
      image,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Quiz',
        name: test.title,
        description: test.description,
        about: test.category,
      },
    })
    for (const result of test.results) {
      pages.push({
        path: `/tests/${test.slug}/result/${result.id}`,
        title: `${result.title} - ${test.title} | ${siteConfig.name}`,
        description: result.summary,
        image,
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

function renderPage(template: string, page: PageMeta): string {
  const url = `${siteConfig.url}${page.path}`
  const imageUrl = `${siteConfig.url}${page.image ?? '/og/default.svg'}`
  const fullTitle = page.title

  let html = template
  html = setTag(html, /<title>.*?<\/title>/s, `<title>${fullTitle}</title>`)
  html = setTag(
    html,
    /<meta name="description" content=".*?"\s*\/?>/s,
    `<meta name="description" content="${page.description}" />`,
  )

  const extraTags = `
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
        ? `\n    <script type="application/ld+json">${JSON.stringify(page.jsonLd)}</script>`
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
  <text x="600" y="360" font-size="${titleFontSize}" font-weight="700" fill="#1c1917" text-anchor="middle" dominant-baseline="middle" font-family="system-ui, 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif">${escapeXml(title)}</text>
  <text x="600" y="430" font-size="30" fill="#57534e" text-anchor="middle" dominant-baseline="middle" font-family="system-ui, 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif">${escapeXml(subtitle)}</text>
  <text x="600" y="560" font-size="26" font-weight="600" fill="${color}" text-anchor="middle" dominant-baseline="middle" font-family="system-ui, 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif">${escapeXml(siteConfig.name)}</text>
</svg>
`
}

function generateOgImages(): void {
  if (!existsSync(ogDir)) mkdirSync(ogDir, { recursive: true })

  for (const test of allTests) {
    if (!test.isPublished) continue
    const svg = buildOgSvg({
      emoji: test.emoji,
      title: test.title,
      subtitle: `질문 ${test.questions.length}개 · 약 ${test.estimatedMinutes}분`,
      color: test.theme.color,
    })
    writeFileSync(join(ogDir, `${test.slug}.svg`), svg, 'utf-8')
  }

  const defaultSvg = buildOgSvg({
    emoji: '🔮',
    title: siteConfig.name,
    subtitle: '심리·성향 테스트 모음',
    color: '#7c3aed',
  })
  writeFileSync(join(ogDir, 'default.svg'), defaultSvg, 'utf-8')
}

function generateSitemap(pages: PageMeta[]): void {
  const urls = pages
    .map((page) => `  <url><loc>${siteConfig.url}${page.path}</loc></url>`)
    .join('\n')
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
  writeFileSync(join(distDir, 'sitemap.xml'), xml, 'utf-8')
}

function main() {
  if (!existsSync(templatePath)) {
    console.error('dist/index.html이 없습니다. 먼저 vite build를 실행하세요.')
    process.exit(1)
  }

  const template = readFileSync(templatePath, 'utf-8')
  const pages = buildPageList()

  generateOgImages()

  for (const page of pages) {
    const html = renderPage(template, page)
    writePage(page, html)
  }

  generateSitemap(pages)

  console.log(`정적 메타데이터 생성 완료: ${pages.length}개 경로, sitemap.xml 포함`)
}

main()
