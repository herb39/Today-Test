import { isAnalyticsEnabled } from '../config/site'

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

// GA4 태그 자체는 scripts/generate-static-pages.ts가 빌드 시점에 모든 페이지의
// <head>에 정적으로 심는다 (구글 공식 설치 가이드 방식). 여기서는 이미 전역에
// 존재하는 gtag()를 호출하기만 한다 — 로컬 dev 빌드에는 그 태그가 없지만,
// isAnalyticsEnabled()가 dev에서는 항상 false라 문제되지 않는다.
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
  | 'story_save'
  | 'click_related_test'
  | 'compare_click'
  | 'compare_invite_view'
  | 'compare_complete'
  | 'retry_test'
  | 'home_click'
  | 'today_test_click'

/** 테스트 slug, 결과 ID, 문항 번호 등 최소 식별 정보만 전달한다. 사용자의 답변 원문은 절대 포함하지 않는다. */
export function trackEvent(
  event: AnalyticsEvent,
  params?: Record<string, string | number | boolean>,
): void {
  if (!isAnalyticsEnabled()) return
  window.gtag?.('event', event, params)
}
