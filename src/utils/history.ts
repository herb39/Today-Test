const STORAGE_KEY = 'today-test:history'
const MAX_ITEMS = 10

export interface HistoryEntry {
  slug: string
  resultId: string
  viewedAt: number
}

function hasLocalStorage(): boolean {
  try {
    return typeof window !== 'undefined' && !!window.localStorage
  } catch {
    return false
  }
}

export function loadHistory(): HistoryEntry[] {
  if (!hasLocalStorage()) return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

/** 같은 테스트를 다시 하면 최신 결과로 갱신하고 맨 앞으로 올린다. */
export function recordHistory(slug: string, resultId: string): void {
  if (!hasLocalStorage()) return
  try {
    const entries = loadHistory().filter((e) => e.slug !== slug)
    entries.unshift({ slug, resultId, viewedAt: Date.now() })
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(entries.slice(0, MAX_ITEMS)))
  } catch {
    // localStorage 사용 불가 환경(시크릿 모드 등)에서는 조용히 무시한다.
  }
}
