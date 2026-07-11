const env = import.meta.env

function normalizeUrl(url: string): string {
  return url.replace(/\/+$/, '')
}

export const siteConfig = {
  name: env.VITE_SITE_NAME || '오늘의 테스트',
  nameEn: 'Today Test',
  url: normalizeUrl(env.VITE_SITE_URL || 'https://test.lib.lc'),
  contactEmail: env.VITE_CONTACT_EMAIL || '',
  kakaoJavascriptKey: env.VITE_KAKAO_JAVASCRIPT_KEY || '',
  gaMeasurementId: env.VITE_GA_MEASUREMENT_ID || '',
  adsenseEnabled: env.VITE_ADSENSE_ENABLED === 'true' && !!env.VITE_ADSENSE_CLIENT,
  adsenseClient: env.VITE_ADSENSE_CLIENT || '',
  isDev: import.meta.env.DEV,
} as const

export const isKakaoShareEnabled = () => siteConfig.kakaoJavascriptKey.length > 0
export const isAnalyticsEnabled = () => siteConfig.gaMeasurementId.length > 0 && !siteConfig.isDev
