import { useState } from 'react'
import type { TestAnswer, TestDefinition, TestResult } from '../types/test'
import { encodeAnswers } from '../utils/compareToken'
import { shareOrCopyLink } from '../utils/share'
import { getShareQuestion, getViralTitle } from '../utils/resultDisplay'
import { trackEvent } from '../utils/analytics'
import { siteConfig } from '../config/site'
import { useToast } from '../hooks/useToast'
import { Toast } from './Toast'

interface CompareCtaProps {
  test: TestDefinition
  result: TestResult
  answers: TestAnswer[]
}

/** 결과 페이지의 최상위 CTA. 방금 완료한 세션의 answers가 있을 때만 렌더링된다. */
export function CompareCta({ test, result, answers }: CompareCtaProps) {
  const [loading, setLoading] = useState(false)
  const { message, showToast } = useToast()

  // iOS Safari는 navigator.share()가 클릭 이벤트와 "동기적으로" 이어져 있어야
  // 동작한다 — 그 사이에 await가 하나라도 끼면 사용자 제스처가 만료돼 조용히
  // 실패하고, shareOrCopyLink는 이를 링크 복사로 대체해버린다. 그래서 토큰
  // 인코딩(원래 비동기 CompareService를 통해 하던 것)을 여기서는 동기 함수로
  // 직접 호출해, handleClick 전체가 첫 await 없이 곧장 navigator.share를 부르게 한다.
  function handleClick() {
    if (loading) return
    const token = encodeAnswers(test, answers)
    const url = `${siteConfig.url}/tests/${test.slug}/compare/${token}`
    trackEvent('compare_click', { slug: test.slug, resultId: result.id })

    setLoading(true)
    shareOrCopyLink({
      title: test.title,
      text: `${getShareQuestion(result)} 나랑 궁합 비교해볼래?`,
      url,
    })
      .then((outcome) => {
        if (outcome === 'copied') showToast('비교 링크가 복사되었습니다!')
        else if (outcome === 'failed') showToast('링크 생성에 실패했습니다.')
      })
      .finally(() => setLoading(false))
  }

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        disabled={loading}
        aria-label="친구와 결과 비교하기"
        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 py-4 text-base font-bold text-white shadow-sm transition active:scale-[0.99] disabled:opacity-60"
      >
        <span aria-hidden="true">💞</span>
        <span>{loading ? '링크 만드는 중...' : `친구와 "${getViralTitle(result)}" 비교하기`}</span>
      </button>
      <Toast message={message} />
    </>
  )
}
