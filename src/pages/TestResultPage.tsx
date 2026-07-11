import { useEffect, useRef } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getTestBySlug } from '../data/tests'
import { getResultById } from '../utils/scoring'
import { ResultCard } from '../components/ResultCard'
import { ShareButtons } from '../components/ShareButtons'
import { RelatedTests } from '../components/RelatedTests'
import { AdSlot } from '../components/AdSlot'
import { useSeo } from '../utils/useSeo'
import { trackEvent } from '../utils/analytics'
import { siteConfig } from '../config/site'

export function TestResultPage() {
  const { slug = '', resultId = '' } = useParams()
  const test = getTestBySlug(slug)
  const result = test ? getResultById(test, resultId) : undefined
  const cardRef = useRef<HTMLDivElement>(null)

  useSeo({
    title: result ? `${result.title} - ${test!.title}` : '결과를 찾을 수 없어요',
    description: result?.summary ?? '',
    path: `/tests/${slug}/result/${resultId}`,
    image: test ? `/og/${test.slug}.svg` : undefined,
  })

  useEffect(() => {
    if (test && result) trackEvent('view_result', { slug: test.slug, resultId: result.id })
  }, [test, result])

  if (!test || !test.isPublished || !result) {
    return <Navigate to="/404" replace />
  }

  const resultUrl = `${siteConfig.url}/tests/${test.slug}/result/${result.id}`

  return (
    <div className="space-y-6">
      <ResultCard ref={cardRef} testTitle={test.title} result={result} />

      <ShareButtons
        testTitle={test.title}
        result={result}
        url={resultUrl}
        cardRef={cardRef}
        imageUrl={`${siteConfig.url}/og/${test.slug}.svg`}
      />

      <section className="space-y-4 rounded-2xl border border-stone-200 p-5">
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
          className="rounded-xl border border-stone-300 py-3 text-center text-sm font-semibold text-stone-700"
        >
          🔄 다시 하기
        </Link>
        <Link
          to="/"
          className="rounded-xl border border-stone-300 py-3 text-center text-sm font-semibold text-stone-700"
        >
          🏠 메인으로
        </Link>
      </div>

      <AdSlot slotId={import.meta.env.VITE_ADSENSE_SLOT_RELATED} />

      <RelatedTests slugs={test.relatedTestSlugs} />
    </div>
  )
}
