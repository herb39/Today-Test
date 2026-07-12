import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { TestCard } from '../components/TestCard'
import { AdSlot } from '../components/AdSlot'
import { categories, getTestBySlug, publishedTests } from '../data/tests'
import { getResultById } from '../utils/scoring'
import { trackEvent } from '../utils/analytics'
import { getTodayTest } from '../utils/todayTest'
import { loadHistory } from '../utils/history'
import { getStatsService, type PopularEntry, type PopularWindow } from '../services/statsService'
import { useEffect } from 'react'
import type { TestDefinition, TestResult } from '../types/test'

const ALL_LABEL = '전체' as const
type CategoryFilter = typeof ALL_LABEL | TestDefinition['category']
const NEW_TESTS_PREVIEW_COUNT = 4
const POPULAR_WINDOWS: { key: PopularWindow; label: string }[] = [
  { key: 'today', label: '오늘' },
  { key: 'week', label: '주간' },
  { key: 'trending', label: '급상승' },
]

interface HistoryItem {
  test: TestDefinition
  result: TestResult
}

const EMPTY_POPULAR: Record<PopularWindow, PopularEntry[]> = { today: [], week: [], trending: [] }

export function HomePage() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>(ALL_LABEL)
  const [showAllNew, setShowAllNew] = useState(false)
  const [popularWindow, setPopularWindow] = useState<PopularWindow>('today')
  const [popularData, setPopularData] = useState(EMPTY_POPULAR)

  useEffect(() => {
    trackEvent('view_home')
  }, [])

  useEffect(() => {
    const slugs = publishedTests.map((t) => t.slug)
    const stats = getStatsService()
    for (const { key } of POPULAR_WINDOWS) {
      stats.getPopular(key, slugs).then((entries) => {
        setPopularData((prev) => ({ ...prev, [key]: entries }))
      })
    }
  }, [])

  const todayTest = useMemo(() => getTodayTest(publishedTests), [])
  const newTests = useMemo(() => publishedTests.filter((t) => t.isNew), [])
  const recentHistory = useMemo<HistoryItem[]>(() => {
    return loadHistory()
      .map((entry): HistoryItem | null => {
        const test = getTestBySlug(entry.slug)
        const result = test ? getResultById(test, entry.resultId) : undefined
        return test && test.isPublished && result ? { test, result } : null
      })
      .filter((item): item is HistoryItem => item !== null)
  }, [])
  const popularTests = useMemo(
    () =>
      popularData[popularWindow]
        .map((entry) => getTestBySlug(entry.slug))
        .filter((t): t is TestDefinition => !!t && t.isPublished)
        .slice(0, 5),
    [popularData, popularWindow],
  )
  const hasAnyPopularData = Object.values(popularData).some((list) => list.length > 0)

  const visibleNewTests = showAllNew ? newTests : newTests.slice(0, NEW_TESTS_PREVIEW_COUNT)
  const hiddenNewTestsCount = newTests.length - visibleNewTests.length

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

      {todayTest && (
        <section>
          <TestCard test={todayTest} featured />
        </section>
      )}

      {hasAnyPopularData && (
        <section>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-lg font-bold text-stone-900">🔥 인기 테스트</h2>
            <div className="flex gap-1 rounded-full bg-stone-100 p-1">
              {POPULAR_WINDOWS.map(({ key, label }) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setPopularWindow(key)}
                  className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                    popularWindow === key ? 'bg-stone-900 text-white' : 'text-stone-500'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          {popularTests.length > 0 ? (
            <div className="flex flex-col gap-3">
              {popularTests.map((test, index) => (
                <div key={test.slug} className="flex items-center gap-2">
                  <span className="w-5 shrink-0 text-center text-sm font-bold text-stone-400">{index + 1}</span>
                  <div className="min-w-0 flex-1">
                    <TestCard test={test} />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="rounded-xl bg-stone-50 px-4 py-6 text-center text-sm text-stone-400">
              아직 데이터가 충분하지 않아요. 조금만 기다려주세요!
            </p>
          )}
        </section>
      )}

      {recentHistory.length > 0 && (
        <section>
          <h2 className="mb-3 text-lg font-bold text-stone-900">🕘 최근 본 테스트</h2>
          <div className="flex flex-col gap-3">
            {recentHistory.map(({ test, result }) => (
              <Link
                key={test.slug}
                to={`/tests/${test.slug}/result/${result.id}`}
                className="flex items-center gap-3 rounded-2xl border border-stone-200 bg-white p-3.5 transition hover:border-stone-300"
              >
                <span className="text-2xl" aria-hidden="true">
                  {result.emoji}
                </span>
                <div className="min-w-0">
                  <p className="truncate font-semibold text-stone-900">{result.title}</p>
                  <p className="truncate text-xs text-stone-400">{test.title} · 다시 보기</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {newTests.length > 0 && (
        <section>
          <h2 className="mb-3 text-lg font-bold text-stone-900">🆕 새로 나온 테스트</h2>
          <div className="flex flex-col gap-3">
            {visibleNewTests.map((test) => (
              <TestCard key={test.slug} test={test} />
            ))}
          </div>
          {hiddenNewTestsCount > 0 && (
            <button
              type="button"
              onClick={() => setShowAllNew(true)}
              className="mt-3 w-full rounded-xl bg-stone-100 py-2.5 text-sm font-semibold text-stone-600 transition hover:bg-stone-200"
            >
              더보기 (+{hiddenNewTestsCount})
            </button>
          )}
          {showAllNew && newTests.length > NEW_TESTS_PREVIEW_COUNT && (
            <button
              type="button"
              onClick={() => setShowAllNew(false)}
              className="mt-3 w-full rounded-xl bg-stone-100 py-2.5 text-sm font-semibold text-stone-600 transition hover:bg-stone-200"
            >
              접기
            </button>
          )}
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
