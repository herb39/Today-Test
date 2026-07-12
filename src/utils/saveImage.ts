import { canShareFile, shareFile } from './share'

export type SaveImageOutcome = 'shared' | 'downloaded' | 'failed'

/**
 * iOS Safari는 <a download>로 받은 파일을 '파일' 앱에 저장한다. 공유
 * 시트(navigator.share)를 거치면 '이미지 저장'으로 사진 앱에 바로 저장할 수
 * 있어, 지원하는 환경에서는 공유 시트를 우선 시도하고 아니면 다운로드한다.
 */
export async function saveBlobAsImage(blob: Blob, filename: string): Promise<SaveImageOutcome> {
  const file = new File([blob], filename, { type: blob.type || 'image/png' })
  if (canShareFile(file)) {
    const shared = await shareFile(file, filename)
    if (shared) return 'shared'
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

/** DOM 요소를 캡처해 저장한다 (결과 카드, 비교 카드 등). */
export async function captureElementAsImage(element: HTMLElement, filename: string): Promise<SaveImageOutcome> {
  try {
    const { toBlob } = await import('html-to-image')
    const blob = await toBlob(element, { pixelRatio: 2 })
    if (!blob) return 'failed'
    return saveBlobAsImage(blob, filename)
  } catch {
    return 'failed'
  }
}

/** 빌드 시점에 미리 생성된 정적 이미지(인스타 스토리 등)를 저장한다. */
export async function downloadRemoteImageAsFile(url: string, filename: string): Promise<SaveImageOutcome> {
  try {
    const res = await fetch(url)
    if (!res.ok) return 'failed'
    const blob = await res.blob()
    return saveBlobAsImage(blob, filename)
  } catch {
    return 'failed'
  }
}
