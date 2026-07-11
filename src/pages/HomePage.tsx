import { useMemo, useState } from 'react'
import { TestCard } from '../components/TestCard'
import { AdSlot } from '../components/AdSlot'
import { categories, publishedTests } from '../data/tests'
import { trackEvent } from '../utils/analytics'
import { useEffect } from 'react'
import type { TestDefinition } from '../types/test'

const ALL_LABEL = '전체' as const
type CategoryFilter = typeof ALL_LABEL | TestDefinition['category']

export function HomePage() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>(ALL_LABEL)

  useEffect(() => {
    trackEvent('view_home')
  }, [])

  const newTests = useMemo(() => publishedTests.filter((t) => t.isNew), [])

  const filteredTests = useMemo(
    () =>
      activeCategory === ALL_LABEL
        ? publishedTests
        : publishedTests.filter((t) => t.category === activeCategory),
    [activeCategory],
  )

  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-2xl font-bold text-stone-900">오늘의 나를 알아보는 시간</h1>
        <p className="mt-2 text-sm leading-relaxed text-stone-500">
          몇 가지 질문에 답하고 나의 성향을 재미있게 발견해보세요.
          <br />
          가볍게 즐기는 콘텐츠로, 의학적·심리학적 진단이 아니에요.
        </p>
      </section>

      {newTests.length > 0 && (
        <section>
          <h2 className="mb-3 text-lg font-bold text-stone-900">🆕 새로 나온 테스트</h2>
          <div className="flex flex-col gap-3">
            {newTests.map((test) => (
              <TestCard key={test.slug} test={test} />
            ))}
          </div>
        </section>
      )}

      <AdSlot slotId={import.meta.env.VITE_ADSENSE_SLOT_HOME} />

      <section>
        <h2 className="mb-3 text-lg font-bold text-stone-900">모든 테스트</h2>
        <div
          role="tablist"
          aria-label="카테고리 필터"
          className="mb-4 flex gap-2 overflow-x-auto pb-1"
        >
          {[ALL_LABEL, ...categories].map((category) => (
            <button
              key={category}
              role="tab"
              aria-selected={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              className={`shrink-0 rounded-full px-3.5 py-1.5 text-sm font-medium transition ${
                activeCategory === category
                  ? 'bg-stone-900 text-white'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          {filteredTests.map((test) => (
            <TestCard key={test.slug} test={test} />
          ))}
        </div>
      </section>
    </div>
  )
}
