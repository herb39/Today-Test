import { useState, type RefObject } from 'react'
import { isKakaoShareEnabled } from '../config/site'
import { copyLink, canUseNativeShare, nativeShare, canShareFile, shareFile } from '../utils/share'
import { shareToKakao } from '../utils/kakaoShare'
import { trackEvent } from '../utils/analytics'
import type { TestResult } from '../types/test'

interface ShareButtonsProps {
  testTitle: string
  result: TestResult
  url: string
  imageUrl: string
  cardRef: RefObject<HTMLDivElement | null>
}

export function ShareButtons({ testTitle, result, url, imageUrl, cardRef }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)
  const [saving, setSaving] = useState(false)
  const shareText = `${testTitle} - ${result.shareText}`

  async function handleCopy() {
    const ok = await copyLink(url)
    if (ok) {
      setCopied(true)
      trackEvent('share_link', { resultId: result.id })
      window.setTimeout(() => setCopied(false), 2000)
    }
  }

  async function handleNativeShare() {
    const ok = await nativeShare({ title: testTitle, text: shareText, url })
    if (ok) trackEvent('share_native', { resultId: result.id })
  }

  async function handleKakaoShare() {
    const ok = await shareToKakao({
      title: `${testTitle} - ${result.title}`,
      description: result.summary,
      imageUrl,
      url,
    })
    if (ok) trackEvent('share_kakao', { resultId: result.id })
  }

  async function handleSaveImage() {
    if (!cardRef.current || saving) return
    setSaving(true)
    try {
      const { toBlob } = await import('html-to-image')
      const blob = await toBlob(cardRef.current, { pixelRatio: 2 })
      if (!blob) return
      const file = new File([blob], `${result.shortTitle}.png`, { type: 'image/png' })

      // iOS Safari는 <a download>로 받은 파일을 '파일' 앱에 저장한다.
      // 공유 시트(navigator.share)를 거치면 '이미지 저장'으로 사진 앱에 바로 저장할 수 있다.
      const ok = canShareFile(file) ? await shareFile(file, result.shortTitle) : false
      if (!ok) {
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.download = `${result.shortTitle}.png`
        link.href = url
        link.click()
        URL.revokeObjectURL(url)
      }
      trackEvent('save_result_image', { resultId: result.id })
    } catch {
      // 캡처 실패 시 조용히 무시한다 (브라우저 호환성 이슈 등)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="grid grid-cols-2 gap-3">
      <button
        type="button"
        onClick={handleCopy}
        className="rounded-xl bg-stone-100 py-3 text-sm font-semibold text-stone-700 transition hover:bg-stone-200"
      >
        {copied ? '복사됨!' : '🔗 링크 복사'}
      </button>

      {canUseNativeShare() && (
        <button
          type="button"
          onClick={handleNativeShare}
          className="rounded-xl bg-stone-100 py-3 text-sm font-semibold text-stone-700 transition hover:bg-stone-200"
        >
          📤 공유하기
        </button>
      )}

      {isKakaoShareEnabled() && (
        <button
          type="button"
          onClick={handleKakaoShare}
          className="rounded-xl bg-stone-100 py-3 text-sm font-semibold text-stone-700 transition hover:bg-stone-200"
        >
          💬 카카오톡 공유
        </button>
      )}

      <button
        type="button"
        onClick={handleSaveImage}
        disabled={saving}
        className="rounded-xl bg-stone-100 py-3 text-sm font-semibold text-stone-700 transition hover:bg-stone-200 disabled:opacity-50"
      >
        {saving ? '저장 중...' : '🖼️ 이미지 저장'}
      </button>
    </div>
  )
}
