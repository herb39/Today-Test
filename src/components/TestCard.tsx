import { Link } from 'react-router-dom'
import type { TestDefinition } from '../types/test'
import { trackEvent } from '../utils/analytics'

interface TestCardProps {
  test: TestDefinition
  /** 홈 상단 "오늘의 테스트"처럼 더 크고 눈에 띄게 강조할 때 사용한다. */
  featured?: boolean
}

export function TestCard({ test, featured = false }: TestCardProps) {
  if (featured) {
    return (
      <Link
        to={`/tests/${test.slug}`}
        onClick={() => trackEvent('today_test_click', { slug: test.slug })}
        className="flex flex-col items-center gap-3 rounded-3xl border border-stone-200 p-6 text-center transition hover:shadow-md active:scale-[0.99]"
        style={{ background: `linear-gradient(160deg, ${test.theme.color}1f, #ffffff)` }}
      >
        <span className="rounded-full bg-stone-900 px-3 py-1 text-xs font-bold text-white">✨ 오늘의 테스트</span>
        <div
          className="flex h-20 w-20 items-center justify-center rounded-2xl text-5xl"
          style={{ backgroundColor: `${test.theme.color}1a` }}
          aria-hidden="true"
        >
          {test.emoji}
        </div>
        <h3 className="text-lg font-bold text-stone-900">{test.title}</h3>
        <p className="text-sm text-stone-500">{test.description}</p>
        <p className="text-xs text-stone-400">
          질문 {test.questions.length}개 · 약 {test.estimatedMinutes}분
        </p>
      </Link>
    )
  }

  return (
    <Link
      to={`/tests/${test.slug}`}
      className="flex items-center gap-3 rounded-2xl border border-stone-200 bg-white p-4 transition hover:border-stone-300 hover:shadow-sm active:scale-[0.99]"
    >
      <div
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-3xl"
        style={{ backgroundColor: `${test.theme.color}1a` }}
        aria-hidden="true"
      >
        {test.emoji}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <h3 className="truncate font-semibold text-stone-900">{test.title}</h3>
          {test.isNew && (
            <span className="shrink-0 rounded-full bg-rose-100 px-1.5 py-0.5 text-[10px] font-bold text-rose-600">
              NEW
            </span>
          )}
        </div>
        <p className="mt-0.5 line-clamp-1 text-sm text-stone-500">{test.description}</p>
        <p className="mt-1 text-xs text-stone-400">
          질문 {test.questions.length}개 · 약 {test.estimatedMinutes}분
        </p>
      </div>
    </Link>
  )
}
