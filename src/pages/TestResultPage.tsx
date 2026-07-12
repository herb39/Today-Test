import { useEffect, useRef, useState } from 'react'
import { Link, Navigate, useLocation, useParams } from 'react-router-dom'
import { getTestBySlug } from '../data/tests'
import { getResultById } from '../utils/scoring'
import { getShareQuestion } from '../utils/resultDisplay'
import { recordHistory } from '../utils/history'
import { getStatsService } from '../services/statsService'
import { ResultCard } from '../components/ResultCard'
import { CompareCta } from '../components/CompareCta'
import { ShareButtons } from '../components/ShareButtons'
import { RelatedTests } from '../components/RelatedTests'
import { AdSlot } from '../components/AdSlot'
import { useSeo } from '../utils/useSeo'
import { trackEvent } from '../utils/analytics'
import { siteConfig } from '../config/site'
import type { TestAnswer } from '../types/test'

export function TestResultPage() {
  const { slug = '', resultId = '' } = useParams()
  const location = useLocation()
  const test = getTestBySlug(slug)
  const result = test ? getResultById(test, resultId) : undefined
  const cardRef = useRef<HTMLDivElement>(null)
  // 방금 완료한 세션에서만 넘어오는 원본 답변. 직접 URL로 들어오면 없다 —
  // 그 경우엔 어떤 답변으로 이 결과에 도달했는지 알 수 없어 비교 링크를 만들 수 없다.
  const sessionAnswers = (location.state as { answers?: TestAnswer[] } | null)?.answers
  const [resultSharePercent, setResultSharePercent] = useState<number | null>(null)

  useSeo({
    title: result ? `${result.title} - ${test!.title}` : '결과를 찾을 수 없어요',
    description: result?.summary ?? '',
    path: `/tests/${slug}/result/${resultId}`,
    image: test && result ? `/og/${test.slug}/${result.id}.png` : undefined,
  })

  useEffect(() => {
    if (test && result) {
      trackEvent('view_result', { slug: test.slug, resultId: result.id })
      recordHistory(test.slug, result.id)
      // 표본이 충분히 쌓이기 전까지는 서비스가 available:false를 반환해 통계를 숨긴다.
      getStatsService()
        .getResultShare(test.slug, result.id)
        .then(setResultSharePercent)
    }
  }, [test, result])

  if (!test || !test.isPublished || !result) {
    return <Navigate to="/404" replace />
  }

  const resultUrl = `${siteConfig.url}/tests/${test.slug}/result/${result.id}`

  return (
    <div className="space-y-6">
      <ResultCard ref={cardRef} testTitle={test.title} result={result} />

      {sessionAnswers && <CompareCta test={test} result={result} answers={sessionAnswers} />}

      <ShareButtons
        testTitle={test.title}
        slug={test.slug}
        result={result}
        url={resultUrl}
        cardRef={cardRef}
        imageUrl={`${siteConfig.url}/og/${test.slug}/${result.id}.png`}
      />

      <section className="space-y-4 rounded-2xl border border-stone-200 p-5">
        <p className="rounded-xl bg-violet-50 px-4 py-3 text-sm font-semibold text-violet-700">
          {getShareQuestion(result)}
        </p>

        {resultSharePercent !== null && (
          <p className="text-xs font-medium text-stone-500">
            🔥 <strong className="text-stone-700">{resultSharePercent}%</strong>의 사용자가 당신과 같은 유형이에요
          </p>
        )}

        {result.friendReaction && (
          <p className="text-xs text-stone-500">👀 친구 반응 예상: {result.friendReaction}</p>
        )}

        <p className="leading-relaxed text-stone-700">{result.description}</p>

        <div>
          <h3 className="mb-1.5 text-sm font-bold text-stone-900">✨ 강점</h3>
          <ul className="list-inside list-disc space-y-0.5 text-sm text-stone-600">
            {result.strengths.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-1.5 text-sm font-bold text-stone-900">⚠️ 주의할 점</h3>
          <ul className="list-inside list-disc space-y-0.5 text-sm text-stone-600">
            {result.cautions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-1.5 text-sm font-bold text-stone-900">💡 추천 행동</h3>
          <ul className="list-inside list-disc space-y-0.5 text-sm text-stone-600">
            {result.recommendations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <AdSlot slotId={import.meta.env.VITE_ADSENSE_SLOT_RESULT} />

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

      <AdSlot slotId={import.meta.env.VITE_ADSENSE_SLOT_RELATED} />

      <RelatedTests slugs={test.relatedTestSlugs} currentCategory={test.category} />
    </div>
  )
}
