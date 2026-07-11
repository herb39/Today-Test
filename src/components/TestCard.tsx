import { Link } from 'react-router-dom'
import type { TestDefinition } from '../types/test'

interface TestCardProps {
  test: TestDefinition
}

export function TestCard({ test }: TestCardProps) {
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
