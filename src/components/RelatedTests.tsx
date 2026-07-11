import { Link } from 'react-router-dom'
import { getTestBySlug } from '../data/tests'
import { trackEvent } from '../utils/analytics'

interface RelatedTestsProps {
  slugs: string[]
  title?: string
}

export function RelatedTests({ slugs, title = '이런 테스트는 어때요?' }: RelatedTestsProps) {
  const tests = slugs.map((slug) => getTestBySlug(slug)).filter((t) => t && t.isPublished)

  if (tests.length === 0) return null

  return (
    <section>
      <h2 className="mb-3 text-lg font-bold text-stone-900">{title}</h2>
      <div className="flex flex-col gap-3">
        {tests.map((test) => (
          <Link
            key={test!.slug}
            to={`/tests/${test!.slug}`}
            onClick={() => trackEvent('click_related_test', { slug: test!.slug })}
            className="flex items-center gap-3 rounded-2xl border border-stone-200 bg-white p-3.5 transition hover:border-stone-300"
          >
            <span className="text-2xl" aria-hidden="true">
              {test!.emoji}
            </span>
            <div className="min-w-0">
              <p className="truncate font-semibold text-stone-900">{test!.title}</p>
              <p className="truncate text-xs text-stone-400">
                질문 {test!.questions.length}개 · 약 {test!.estimatedMinutes}분
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
