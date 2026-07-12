import { useState, type RefObject } from 'react'
import { isKakaoShareEnabled } from '../config/site'
import { copyLink, shareOrCopyLink } from '../utils/share'
import { shareToKakao } from '../utils/kakaoShare'
import { captureElementAsImage, downloadRemoteImageAsFile } from '../utils/saveImage'
import { trackEvent } from '../utils/analytics'
import { useToast } from '../hooks/useToast'
import { Toast } from './Toast'
import type { TestResult } from '../types/test'

interface ShareButtonsProps {
  testTitle: string
  slug: string
  result: TestResult
  url: string
  imageUrl: string
  cardRef: RefObject<HTMLDivElement | null>
}

const BUTTON_CLASS =
  'flex min-h-[48px] items-center justify-center gap-1.5 rounded-xl bg-stone-100 px-3 py-3.5 text-sm font-semibold text-stone-700 transition hover:bg-stone-200 active:bg-stone-300 disabled:opacity-50'

export function ShareButtons({ testTitle, slug, result, url, imageUrl, cardRef }: ShareButtonsProps) {
  const [saving, setSaving] = useState(false)
  const [savingStory, setSavingStory] = useState(false)
  const { message: toastMessage, showToast } = useToast()
  const shareText = `${testTitle} - ${result.shareText}`

  // 버튼은 하나지만 실제 동작(네이티브 시트 vs 링크 복사)은 환경에 따라 자동으로 갈린다.
  async function handleShare() {
    const outcome = await shareOrCopyLink({ title: testTitle, text: shareText, url })
    if (outcome === 'shared') {
      trackEvent('share_native', { resultId: result.id })
    } else if (outcome === 'copied') {
      trackEvent('share_link', { resultId: result.id })
      showToast('링크가 복사되었습니다.')
    } else if (outcome === 'failed') {
      showToast('링크 복사에 실패했습니다.')
    }
    // 'cancelled'는 사용자가 공유 시트를 직접 닫은 것이라 별도 안내가 필요 없다.
  }

  async function handleKakaoShare() {
    const ok = await shareToKakao({
      title: `${testTitle} - ${result.title}`,
      description: result.summary,
      imageUrl,
      url,
    })
    if (ok) {
      trackEvent('share_kakao', { resultId: result.id })
    } else {
      showToast('카카오톡 공유에 실패했습니다.')
    }
  }

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
    if (outcome !== 'failed') trackEvent('save_result_image', { resultId: result.id })
    setSaving(false)
  }

  async function handleSaveStory() {
    if (savingStory) return
    setSavingStory(true)
    const storyUrl = `${new URL(url).origin}/story/${slug}/${result.id}.png`
    const outcome = await downloadRemoteImageAsFile(storyUrl, `${result.shortTitle}-스토리.png`)
    if (outcome === 'downloaded') showToast('스토리 이미지가 저장되었습니다.')
    else if (outcome === 'failed') showToast('스토리 이미지 저장에 실패했습니다.')
    if (outcome !== 'failed') trackEvent('story_save', { resultId: result.id })
    setSavingStory(false)
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-3">
        <button type="button" onClick={handleShare} className={BUTTON_CLASS} aria-label="친구에게 결과 보내기">
          <span aria-hidden="true">📤</span>
          <span>친구에게 보내기</span>
        </button>

        {isKakaoShareEnabled() && (
          // VITE_KAKAO_JAVASCRIPT_KEY가 설정되지 않으면 카카오 SDK를 초기화할 수 없으므로
          // 버튼 자체를 숨긴다 (환경변수 미설정 = 카카오 공유 기능 비활성화).
          <button
            type="button"
            onClick={handleKakaoShare}
            className={BUTTON_CLASS}
            aria-label="카카오톡으로 공유하기"
          >
            <span aria-hidden="true">💬</span>
            <span>카카오톡 공유</span>
          </button>
        )}

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

        <button
          type="button"
          onClick={handleSaveStory}
          disabled={savingStory}
          className={`${BUTTON_CLASS} col-span-2`}
          aria-label="인스타그램 스토리용 이미지 저장하기"
        >
          <span aria-hidden="true">📱</span>
          <span>{savingStory ? '저장 중...' : '인스타 스토리 저장'}</span>
        </button>
      </div>

      <Toast message={toastMessage} />
    </>
  )
}
