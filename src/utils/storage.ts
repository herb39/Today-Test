import type { TestAnswer, TestProgress } from '../types/test'

const STORAGE_PREFIX = 'today-test:progress:'

function key(slug: string): string {
  return `${STORAGE_PREFIX}${slug}`
}

function hasLocalStorage(): boolean {
  try {
    return typeof window !== 'undefined' && !!window.localStorage
  } catch {
    return false
  }
}

export function loadProgress(slug: string): TestProgress | null {
  if (!hasLocalStorage()) return null
  try {
    const raw = window.localStorage.getItem(key(slug))
    if (!raw) return null
    const parsed = JSON.parse(raw) as TestProgress
    if (parsed.slug !== slug || !Array.isArray(parsed.answers)) return null
    return parsed
  } catch {
    return null
  }
}

export function saveProgress(
  slug: string,
  answers: TestAnswer[],
  currentQuestionIndex: number,
): void {
  if (!hasLocalStorage()) return
  const progress: TestProgress = {
    slug,
    answers,
    currentQuestionIndex,
    updatedAt: Date.now(),
  }
  try {
    window.localStorage.setItem(key(slug), JSON.stringify(progress))
  } catch {
    // localStorage 사용 불가 환경(시크릿 모드 등)에서는 조용히 무시한다.
  }
}

export function clearProgress(slug: string): void {
  if (!hasLocalStorage()) return
  try {
    window.localStorage.removeItem(key(slug))
  } catch {
    // ignore
  }
}
