import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getTestBySlug } from '../data/tests'
import { RelatedTests } from '../components/RelatedTests'
import { useSeo } from '../utils/useSeo'
import { trackEvent } from '../utils/analytics'
import { getRecommendedFor } from '../utils/testDisplay'

export function TestIntroPage() {
  const { slug = '' } = useParams()
  const test = getTestBySlug(slug)

  useSeo({
    title: test?.title ?? '테스트를 찾을 수 없어요',
    description: test?.seo.description ?? '',
    path: `/tests/${slug}`,
    image: test ? `/og/${test.slug}.png` : undefined,
  })

  useEffect(() => {
    if (test) trackEvent('view_test', { slug: test.slug })
  }, [test])

  if (!test || !test.isPublished) {
    return <Navigate to="/404" replace />
  }

  return (
    <div className="space-y-6">
      <div
        className="flex flex-col items-center rounded-3xl px-6 py-10 text-center"
        style={{ backgroundColor: `${test.theme.color}14` }}
      >
        <span className="text-6xl" aria-hidden="true">
          {test.emoji}
        </span>
        <h1 className="mt-4 text-xl font-bold text-stone-900">{test.title}</h1>
        <p className="mt-3 text-sm leading-relaxed text-stone-600">{test.intro}</p>
        <p className="mt-4 text-xs text-stone-500">
          질문 {test.questions.length}개 · 약 {test.estimatedMinutes}분 소요
        </p>
      </div>

      <p className="rounded-xl bg-stone-50 px-4 py-3 text-xs leading-relaxed text-stone-500">
        이 테스트는 재미와 자기이해를 위한 콘텐츠이며, 의학적·심리학적 진단을 대신하지 않아요.
        결과는 참고용으로 가볍게 즐겨주세요.
      </p>

      <Link
        to={`/tests/${test.slug}/play`}
        onClick={() => trackEvent('start_test', { slug: test.slug })}
        className="block w-full rounded-2xl bg-stone-900 py-4 text-center text-base font-bold text-white transition active:scale-[0.99]"
      >
        테스트 시작하기
      </Link>

      <section>
        <h2 className="mb-3 text-lg font-bold text-stone-900">이런 분께 추천해요</h2>
        <ul className="space-y-1.5 text-sm text-stone-600">
          {getRecommendedFor(test).map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span aria-hidden="true">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-bold text-stone-900">결과 미리보기</h2>
        <div className="grid grid-cols-2 gap-2.5">
          {test.results.map((result) => (
            <div
              key={result.id}
              className="flex items-center gap-2 rounded-xl border border-stone-200 px-3 py-2.5"
            >
              <span className="text-xl" aria-hidden="true">
                {result.emoji}
              </span>
              <span className="truncate text-sm font-medium text-stone-700">{result.shortTitle}</span>
            </div>
          ))}
        </div>
      </section>

      {test.seo.faq && test.seo.faq.length > 0 && (
        <section>
          <h2 className="mb-3 text-lg font-bold text-stone-900">자주 묻는 질문</h2>
          <div className="space-y-3">
            {test.seo.faq.map((item) => (
              <div key={item.question} className="rounded-xl border border-stone-200 p-4">
                <p className="text-sm font-semibold text-stone-900">Q. {item.question}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-stone-600">A. {item.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <RelatedTests slugs={test.relatedTestSlugs} currentCategory={test.category} />
    </div>
  )
}
