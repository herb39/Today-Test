import type { TestResult } from '../types/test'

/** 결과 카드/공유 콘텐츠에 쓸 바이럴 문구. 콘텐츠에 없으면 title로 대체한다. */
export function getViralTitle(result: TestResult): string {
  return result.viralTitle ?? result.title
}

/** 친구에게 보낼 때 붙일 공유 유도 질문. 없으면 shortTitle로 자동 생성한다. */
export function getShareQuestion(result: TestResult): string {
  return result.shareQuestion ?? `당신도 ${result.shortTitle}일까?`
}

/** OG/스토리 이미지 등에 쓸 짧은 설명. 없으면 summary로 대체한다. */
export function getShareDescription(result: TestResult): string {
  return result.shareDescription ?? result.summary
}

/** 공유 카드용 이모지. 없으면 emoji로 대체한다. */
export function getShareEmoji(result: TestResult): string {
  return result.shareEmoji ?? result.emoji
}
