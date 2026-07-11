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
