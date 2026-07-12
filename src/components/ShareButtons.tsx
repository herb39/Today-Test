import { useState, type RefObject } from 'react'
import { isKakaoShareEnabled } from '../config/site'
import { copyLink } from '../utils/share'
import { shareToKakao } from '../utils/kakaoShare'
import { captureElementAsImage } from '../utils/saveImage'
import { trackEvent } from '../utils/analytics'
import { useToast } from '../hooks/useToast'
import { Toast } from './Toast'
import type { TestResult } from '../types/test'

interface ShareButtonsProps {
  testTitle: string
  result: TestResult
  url: string
  cardRef: RefObject<HTMLDivElement | null>
}

const BUTTON_CLASS =
  'flex min-h-[48px] items-center justify-center gap-1.5 rounded-xl bg-stone-100 px-3 py-3.5 text-sm font-semibold text-stone-700 transition hover:bg-stone-200 active:bg-stone-300 disabled:opacity-50'

export function ShareButtons({ testTitle, result, url, cardRef }: ShareButtonsProps) {
  const [saving, setSaving] = useState(false)
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

  async function handleSaveImage() {
    if (!cardRef.current || saving) return
    setSaving(true)
    const outcome = await captureElementAsImage(cardRef.current, `${result.shortTitle}.png`)
    if (outcome === 'downloaded') showToast('이미지가 저장되었습니다.')
    else if (outcome === 'failed') showToast('이미지 저장에 실패했습니다.')
    if (outcome === 'downloaded' || outcome === 'shared') trackEvent('save_result_image', { resultId: result.id })
    setSaving(false)
  }

  async function handleKakaoShare() {
    const ok = await shareToKakao({ text: `${testTitle} - ${result.shareText}`, url })
    if (ok) {
      trackEvent('share_kakao', { resultId: result.id })
    } else {
      showToast('카카오톡 공유에 실패했습니다.')
    }
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-3">
        <button type="button" onClick={handleCopy} className={BUTTON_CLASS} aria-label="결과 링크 복사하기">
          <span aria-hidden="true">🔗</span>
          <span>링크 복사</span>
        </button>

        <button
          type="button"
          onClick={handleSaveImage}
          disabled={saving}
          className={BUTTON_CLASS}
          aria-label="결과 이미지 저장하기"
        >
          <span aria-hidden="true">🖼️</span>
          <span>{saving ? '저장 중...' : '이미지 저장'}</span>
        </button>

        {isKakaoShareEnabled() && (
          // VITE_KAKAO_JAVASCRIPT_KEY가 설정되지 않으면 카카오 SDK를 초기화할 수 없으므로
          // 버튼 자체를 숨긴다 (환경변수 미설정 = 카카오 공유 기능 비활성화).
          <button
            type="button"
            onClick={handleKakaoShare}
            className={`${BUTTON_CLASS} col-span-2`}
            aria-label="카카오톡으로 공유하기"
          >
            <span aria-hidden="true">💬</span>
            <span>카카오톡 공유</span>
          </button>
        )}
      </div>

      <Toast message={toastMessage} />
    </>
  )
}
