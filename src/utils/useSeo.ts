import { useEffect } from 'react'
import { siteConfig } from '../config/site'

interface SeoOptions {
  title: string
  description: string
  path: string
  image?: string
}

function setMetaTag(attr: 'name' | 'property', key: string, content: string): void {
  let tag = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, key)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function setCanonical(url: string): void {
  let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', url)
}

/** 클라이언트 라우팅 시 페이지별 title/description/OG 태그를 갱신한다. (크롤러용 정적 메타데이터는 빌드 스크립트가 별도로 생성한다.) */
export function useSeo({ title, description, path, image }: SeoOptions) {
  useEffect(() => {
    const fullTitle = `${title} | ${siteConfig.name}`
    const url = `${siteConfig.url}${path}`
    const imageUrl = image ? `${siteConfig.url}${image}` : `${siteConfig.url}/og/default.png`

    document.title = fullTitle
    setMetaTag('name', 'description', description)
    setCanonical(url)
    setMetaTag('property', 'og:title', fullTitle)
    setMetaTag('property', 'og:description', description)
    setMetaTag('property', 'og:url', url)
    setMetaTag('property', 'og:image', imageUrl)
    setMetaTag('property', 'og:type', 'website')
    setMetaTag('name', 'twitter:card', 'summary_large_image')
    setMetaTag('name', 'twitter:title', fullTitle)
    setMetaTag('name', 'twitter:description', description)
    setMetaTag('name', 'twitter:image', imageUrl)
  }, [title, description, path, image])
}
