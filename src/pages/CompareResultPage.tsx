import { useEffect, useRef, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getTestBySlug } from '../data/tests'
import { getCompareService } from '../services/compareService'
import { computeCompatibility, type CompatibilityInsight } from '../utils/compatibility'
import { CompareResultCard } from '../components/CompareResultCard'
import { RelatedTests } from '../components/RelatedTests'
import { useToast } from '../hooks/useToast'
import { Toast } from '../components/Toast'
import { captureElementAsImage } from '../utils/saveImage'
import { useSeo } from '../utils/useSeo'
import { trackEvent } from '../utils/analytics'

export function CompareResultPage() {
  const { slug = '', tokenA = '', tokenB = '' } = useParams()
  const test = getTestBySlug(slug)
  const cardRef = useRef<HTMLDivElement>(null)
  const [saving, setSaving] = useState(false)
  const { message: toastMessage, showToast } = useToast()
  // undefined: 확인 전, null: 잘못된 토큰, CompatibilityInsight: 계산 완료
  const [insight, setInsight] = useState<CompatibilityInsight | null | undefined>(undefined)

  useEffect(() => {
    if (!test) return
    let cancelled = false
    const service = getCompareService()
    Promise.all([service.resolveInviteToken(test, tokenA), service.resolveInviteToken(test, tokenB)]).then(
      ([answersA, answersB]) => {
        if (cancelled) return
        setInsight(answersA && answersB ? computeCompatibility(test, answersA, answersB) : null)
      },
    )
    return () => {
      cancelled = true
    }
  }, [test, tokenA, tokenB])

  useSeo({
    title: test ? `${test.title} 궁합 비교 결과` : '결과를 찾을 수 없어요',
    description: test ? `${test.title} 궁합 비교 결과를 확인해보세요.` : '',
    path: `/tests/${slug}/compare/${tokenA}/${tokenB}`,
    image: test ? `/og/${test.slug}.png` : undefined,
  })

  useEffect(() => {
    if (test && insight) trackEvent('compare_complete', { slug: test.slug, matchPercent: insight.matchPercent })
  }, [test, insight])

  if (!test || !test.isPublished) return <Navigate to="/404" replace />
  if (insight === undefined) return null
  if (insight === null) return <Navigate to={`/tests/${slug}`} replace />

  async function handleSave() {
    if (!cardRef.current || saving) return
    setSaving(true)
    const outcome = await captureElementAsImage(cardRef.current, `${test!.shortTitle}-궁합.png`)
    if (outcome === 'downloaded') {
      showToast('이미지가 저장되었습니다.')
      trackEvent('save_result_image', { slug: test!.slug })
    } else if (outcome === 'failed') {
      showToast('이미지 저장에 실패했습니다.')
    }
    setSaving(false)
  }

  return (
    <div className="space-y-6">
      <CompareResultCard ref={cardRef} testTitle={test.title} insight={insight} />

      <button
        type="button"
        onClick={handleSave}
        disabled={saving}
        aria-label="비교 카드 이미지로 저장하기"
        className="w-full rounded-xl bg-stone-100 py-3.5 text-sm font-semibold text-stone-700 transition hover:bg-stone-200 disabled:opacity-50"
      >
        {saving ? '저장 중...' : '🖼️ 비교 카드 저장'}
      </button>

      <section className="space-y-4 rounded-2xl border border-stone-200 p-5">
        <div>
          <h3 className="mb-1.5 text-sm font-bold text-stone-900">✨ 잘 맞는 부분</h3>
          <ul className="list-inside list-disc space-y-0.5 text-sm text-stone-600">
            {insight.sharedStrengths.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-1.5 text-sm font-bold text-stone-900">⚠️ 갈등이 생기기 쉬운 부분</h3>
          <ul className="list-inside list-disc space-y-0.5 text-sm text-stone-600">
            {insight.potentialConflicts.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-1.5 text-sm font-bold text-stone-900">💡 서로에게 필요한 행동</h3>
          <ul className="list-inside list-disc space-y-0.5 text-sm text-stone-600">
            {insight.neededActions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <div className="grid grid-cols-2 gap-3">
        <Link
          to={`/tests/${test.slug}`}
          onClick={() => trackEvent('retry_test', { slug: test.slug })}
          className="rounded-xl border border-stone-300 py-3 text-center text-sm font-semibold text-stone-700"
        >
          🔄 다시 하기
        </Link>
        <Link
          to="/"
          onClick={() => trackEvent('home_click', { slug: test.slug })}
          className="rounded-xl border border-stone-300 py-3 text-center text-sm font-semibold text-stone-700"
        >
          🏠 메인으로
        </Link>
      </div>

      <RelatedTests slugs={test.relatedTestSlugs} currentCategory={test.category} />

      <Toast message={toastMessage} />
    </div>
  )
}
