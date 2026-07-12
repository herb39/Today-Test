import { copyLink } from '../utils/share'
import { trackEvent } from '../utils/analytics'
import { useToast } from '../hooks/useToast'
import { Toast } from './Toast'
import type { TestResult } from '../types/test'

interface ShareButtonsProps {
  result: TestResult
  url: string
}

export function ShareButtons({ result, url }: ShareButtonsProps) {
  const { message: toastMessage, showToast } = useToast()

  async function handleCopy() {
    const ok = await copyLink(url)
    if (ok) {
      trackEvent('share_link', { resultId: result.id })
      showToast('링크가 복사되었습니다.')
    } else {
      showToast('링크 복사에 실패했습니다.')
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={handleCopy}
        className="flex min-h-[48px] w-full items-center justify-center gap-1.5 rounded-xl bg-stone-100 py-3.5 text-sm font-semibold text-stone-700 transition hover:bg-stone-200 active:bg-stone-300"
        aria-label="결과 링크 복사하기"
      >
        <span aria-hidden="true">🔗</span>
        <span>링크 복사</span>
      </button>

      <Toast message={toastMessage} />
    </>
  )
}
