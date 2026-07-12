/** 그날의 날짜만으로 결정되는 "오늘의 테스트"를 고른다 — 서버 없이도 모두에게 같은 날엔 같은 테스트가 보인다. */
export function getTodayTest<T>(tests: readonly T[], date: Date = new Date()): T | null {
  if (tests.length === 0) return null
  const startOfYear = new Date(date.getFullYear(), 0, 0)
  const dayOfYear = Math.floor((date.getTime() - startOfYear.getTime()) / 86_400_000)
  return tests[dayOfYear % tests.length]
}
