import { describe, expect, it } from 'vitest'
import { getTodayTest } from '../src/utils/todayTest'

describe('getTodayTest', () => {
  it('테스트가 없으면 null을 반환한다', () => {
    expect(getTodayTest([], new Date(2026, 0, 1))).toBeNull()
  })

  it('같은 날짜에는 항상 같은 테스트를 반환한다', () => {
    const items = ['a', 'b', 'c', 'd']
    const date = new Date(2026, 6, 12)
    expect(getTodayTest(items, date)).toBe(getTodayTest(items, date))
  })

  it('하루가 지나면 다음 항목으로(목록 범위 내에서) 넘어간다', () => {
    const items = ['a', 'b', 'c']
    const today = getTodayTest(items, new Date(2026, 0, 5))
    const tomorrow = getTodayTest(items, new Date(2026, 0, 6))
    expect(items.indexOf(tomorrow!)).toBe((items.indexOf(today!) + 1) % items.length)
  })

  it('365일 뒤(윤년이 아니라면)에는 같은 요일 오프셋으로 돌아온다', () => {
    const items = ['a', 'b', 'c', 'd']
    const day1 = getTodayTest(items, new Date(2026, 0, 1))
    const day2 = getTodayTest(items, new Date(2027, 0, 1))
    expect(day1).toBe(day2)
  })
})
