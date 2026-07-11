export async function copyLink(url: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(url)
    return true
  } catch {
    return false
  }
}

export function canUseNativeShare(): boolean {
  return typeof navigator !== 'undefined' && typeof navigator.share === 'function'
}

export async function nativeShare(data: { title: string; text: string; url: string }): Promise<boolean> {
  if (!canUseNativeShare()) return false
  try {
    await navigator.share(data)
    return true
  } catch {
    return false
  }
}

export function canShareFile(file: File): boolean {
  return (
    typeof navigator !== 'undefined' &&
    typeof navigator.canShare === 'function' &&
    navigator.canShare({ files: [file] })
  )
}

export async function shareFile(file: File, title: string): Promise<boolean> {
  try {
    await navigator.share({ files: [file], title })
    return true
  } catch (err) {
    // 사용자가 공유 시트를 취소한 경우는 실패로 취급하지 않는다
    return (err as Error)?.name === 'AbortError'
  }
}
