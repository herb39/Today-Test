import { canShareFile, shareFile } from './share'

export type SaveImageOutcome = 'shared' | 'downloaded' | 'cancelled' | 'failed'

/**
 * iOS Safari는 <a download>로 받은 파일을 '파일' 앱에 저장한다. 공유
 * 시트(navigator.share)를 거치면 '이미지 저장'으로 사진 앱에 바로 저장할 수
 * 있어, 지원하는 환경에서는 공유 시트를 우선 시도하고 아니면 다운로드한다.
 * 사용자가 공유 시트를 직접 취소한 경우는 의도적인 행동이라 다운로드로
 * 대체하지 않는다 — 취소했는데 파일이 갑자기 다운로드되면 오히려 당황스럽다.
 */
export async function saveBlobAsImage(blob: Blob, filename: string): Promise<SaveImageOutcome> {
  const file = new File([blob], filename, { type: blob.type || 'image/png' })
  if (canShareFile(file)) {
    const outcome = await shareFile(file, filename)
    if (outcome === 'shared') return 'shared'
    if (outcome === 'cancelled') return 'cancelled'
    // 'failed'는 공유 자체가 깨진 것이니 다운로드로 폴백을 시도해본다.
  }

  try {
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.download = filename
    link.href = url
    link.click()
    URL.revokeObjectURL(url)
    return 'downloaded'
  } catch {
    return 'failed'
  }
}

const CAPTURE_TIMEOUT_MS = 8000

/**
 * DOM 요소를 캡처해 저장한다 (결과 카드, 비교 카드 등). html-to-image는 캡처
 * 대상에 oklch()/color-mix() 같은 최신 CSS 색상 함수(Tailwind v4가 opacity
 * 변형에 기본으로 씀)가 섞여 있으면 에러 없이 그대로 멈춰버리는 경우가 있어
 * (카드 자체는 그런 색상 함수를 안 쓰도록 고쳤지만) 타임아웃으로 한 번 더
 * 방어해, 무한 스피너 대신 실패로 확실히 끝나게 한다.
 */
export async function captureElementAsImage(element: HTMLElement, filename: string): Promise<SaveImageOutcome> {
  try {
    const { toBlob } = await import('html-to-image')
    const blob = await Promise.race([
      toBlob(element, { pixelRatio: 2 }),
      new Promise<null>((resolve) => window.setTimeout(() => resolve(null), CAPTURE_TIMEOUT_MS)),
    ])
    if (!blob) return 'failed'
    return saveBlobAsImage(blob, filename)
  } catch {
    return 'failed'
  }
}
