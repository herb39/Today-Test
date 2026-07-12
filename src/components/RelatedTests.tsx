import { Link } from 'react-router-dom'
import { getTestBySlug } from '../data/tests'
import { trackEvent } from '../utils/analytics'
import type { TestCategory, TestDefinition } from '../types/test'

interface RelatedTestsProps {
  slugs: string[]
  /** 있으면 같은 카테고리(비슷한 성향)와 다른 카테고리(다른 매력)로 나눠 보여준다. */
  currentCategory?: TestCategory
}

function TestRow({ test }: { test: TestDefinition }) {
  return (
    <Link
      to={`/tests/${test.slug}`}
      onClick={() => trackEvent('click_related_test', { slug: test.slug })}
      className="flex items-center gap-3 rounded-2xl border border-stone-200 bg-white p-3.5 transition hover:border-stone-300"
    >
      <span className="text-2xl" aria-hidden="true">
        {test.emoji}
      </span>
      <div className="min-w-0">
        <p className="truncate font-semibold text-stone-900">{test.title}</p>
        <p className="truncate text-xs text-stone-400">
          질문 {test.questions.length}개 · 약 {test.estimatedMinutes}분
        </p>
      </div>
    </Link>
  )
}

export function RelatedTests({ slugs, currentCategory }: RelatedTestsProps) {
  const tests = slugs.map((slug) => getTestBySlug(slug)).filter((t): t is TestDefinition => !!t && t.isPublished)

  if (tests.length === 0) return null

  if (!currentCategory) {
    return (
      <section>
        <h2 className="mb-3 text-lg font-bold text-stone-900">이런 테스트는 어때요?</h2>
        <div className="flex flex-col gap-3">
          {tests.map((test) => (
            <TestRow key={test.slug} test={test} />
          ))}
        </div>
      </section>
    )
  }

  const similar = tests.filter((t) => t.category === currentCategory)
  const different = tests.filter((t) => t.category !== currentCategory)

  return (
    <div className="space-y-6">
      {similar.length > 0 && (
        <section>
          <h2 className="mb-3 text-lg font-bold text-stone-900">🎯 비슷한 성향의 테스트</h2>
          <div className="flex flex-col gap-3">
            {similar.map((test) => (
              <TestRow key={test.slug} test={test} />
            ))}
          </div>
        </section>
      )}

      {different.length > 0 && (
        <section>
          <h2 className="mb-3 text-lg font-bold text-stone-900">🌈 다른 매력의 테스트</h2>
          <div className="flex flex-col gap-3">
            {different.map((test) => (
              <TestRow key={test.slug} test={test} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
