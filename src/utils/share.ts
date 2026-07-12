/** navigator.clipboard가 없거나 거부하는 환경(카카오톡 인앱 브라우저 등)을 위한 폴백. */
function legacyCopy(text: string): boolean {
  try {
    const textarea = document.createElement('textarea')
    textarea.value = text
    textarea.style.position = 'fixed'
    textarea.style.opacity = '0'
    document.body.appendChild(textarea)
    textarea.focus()
    textarea.select()
    const ok = document.execCommand('copy')
    document.body.removeChild(textarea)
    return ok
  } catch {
    return false
  }
}

export async function copyLink(url: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(url)
    return true
  } catch {
    // 카카오톡 인앱 브라우저 등 WebView는 navigator.clipboard 접근을 조용히
    // 거부하는 경우가 있어, 구식이지만 더 널리 통하는 execCommand로 한 번 더 시도한다.
    return legacyCopy(url)
  }
}

function canUseNativeShare(): boolean {
  return typeof navigator !== 'undefined' && typeof navigator.share === 'function'
}

export type ShareOutcome = 'shared' | 'copied' | 'cancelled' | 'failed'

/**
 * 공유하기 버튼 하나의 동작을 환경에 맞게 자동으로 고른다: Web Share API를
 * 지원하면 네이티브 공유 시트를, 아니면(또는 취소 외의 사유로 실패하면) 링크
 * 복사를 대신 수행한다. 버튼 UI는 항상 동일하게 두고 내부 동작만 바뀌게 하기
 * 위한 것으로, 호출하는 쪽에서 canUseNativeShare 여부로 분기할 필요가 없다.
 */
export async function shareOrCopyLink(data: { title: string; text: string; url: string }): Promise<ShareOutcome> {
  if (canUseNativeShare()) {
    try {
      await navigator.share(data)
      return 'shared'
    } catch (err) {
      if ((err as Error)?.name === 'AbortError') return 'cancelled'
    }
  }
  const ok = await copyLink(data.url)
  return ok ? 'copied' : 'failed'
}

export function canShareFile(file: File): boolean {
  return (
    typeof navigator !== 'undefined' &&
    typeof navigator.canShare === 'function' &&
    navigator.canShare({ files: [file] })
  )
}

export type ShareFileOutcome = 'shared' | 'cancelled' | 'failed'

export async function shareFile(file: File, title: string): Promise<ShareFileOutcome> {
  try {
    await navigator.share({ files: [file], title })
    return 'shared'
  } catch (err) {
    // 사용자가 공유 시트를 직접 닫은 경우는 실패가 아니라 취소다 — 구분해야
    // 호출하는 쪽에서 "성공"으로 잘못 판단해 아무 안내 없이 넘어가지 않는다.
    return (err as Error)?.name === 'AbortError' ? 'cancelled' : 'failed'
  }
}
