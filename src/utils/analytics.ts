import { isAnalyticsEnabled, siteConfig } from '../config/site'
import { loadExternalScript } from './loadExternalScript'

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

let initialized = false

function ensureInitialized(): void {
  if (initialized || !isAnalyticsEnabled()) return
  initialized = true

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(args)
  }
  // 명시적 동의 신호가 없으면 최신 gtag.js가 수집 자체를 보류할 수 있어
  // 기본값을 직접 허용으로 지정한다 (로그인/쿠키 배너가 없는 서비스 특성상).
  window.gtag('consent', 'default', {
    ad_storage: 'granted',
    analytics_storage: 'granted',
    ad_user_data: 'granted',
    ad_personalization: 'granted',
  })
  window.gtag('js', new Date())
  window.gtag('config', siteConfig.gaMeasurementId)

  loadExternalScript(
    `https://www.googletagmanager.com/gtag/js?id=${siteConfig.gaMeasurementId}`,
  ).catch(() => {
    // 분석 스크립트 로딩 실패는 앱 동작에 영향을 주지 않는다.
  })
}

export type AnalyticsEvent =
  | 'view_home'
  | 'view_test'
  | 'start_test'
  | 'answer_question'
  | 'complete_test'
  | 'view_result'
  | 'share_link'
  | 'share_native'
  | 'share_kakao'
  | 'save_result_image'
  | 'click_related_test'

/** 테스트 slug, 결과 ID, 문항 번호 등 최소 식별 정보만 전달한다. 사용자의 답변 원문은 절대 포함하지 않는다. */
export function trackEvent(
  event: AnalyticsEvent,
  params?: Record<string, string | number | boolean>,
): void {
  if (!isAnalyticsEnabled()) return
  ensureInitialized()
  window.gtag?.('event', event, params)
}
