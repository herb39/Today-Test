import type { TestAnswer, TestDefinition, TestResult } from '../types/test'
import { resolveResult } from './scoring'

export interface CompatibilityInsight {
  resultA: TestResult
  resultB: TestResult
  /** 문항별로 같은 선택을 한 비율 (0~100) */
  matchPercent: number
  sharedStrengths: string[]
  potentialConflicts: string[]
  neededActions: string[]
  oneLiner: string
}

function uniqueTake(items: string[], count: number): string[] {
  return [...new Set(items)].slice(0, count)
}

function pickOneLiner(matchPercent: number, resultA: TestResult, resultB: TestResult): string {
  const base =
    matchPercent >= 80
      ? '천생연분이에요! 다음에도 또 같이 해봐요 💞'
      : matchPercent >= 60
        ? '찰떡궁합! 서로를 잘 이해하는 사이예요 🤝'
        : matchPercent >= 40
          ? '다르지만 그래서 더 끌리는 조합이에요 🌗'
          : '정반대라 서로에게 자극이 되는 사이예요 ⚡'

  const sharedTag = resultA.compatibilityTags?.find((tag) => resultB.compatibilityTags?.includes(tag))
  return sharedTag ? `${base} 게다가 둘 다 "${sharedTag}" 성향까지 닮았어요!` : base
}

/** 두 사람의 답변으로부터 궁합 정보를 계산한다. 테스트별 추가 콘텐츠 없이도 동작한다. */
export function computeCompatibility(
  test: TestDefinition,
  answersA: TestAnswer[],
  answersB: TestAnswer[],
): CompatibilityInsight {
  const matchCount = test.questions.filter((question) => {
    const a = answersA.find((ans) => ans.questionId === question.id)
    const b = answersB.find((ans) => ans.questionId === question.id)
    return !!a && !!b && a.choiceId === b.choiceId
  }).length
  const matchPercent = Math.round((matchCount / test.questions.length) * 100)

  const resultA = resolveResult(test, answersA)
  const resultB = resolveResult(test, answersB)

  const intersectingStrengths = resultA.strengths.filter((s) => resultB.strengths.includes(s))
  const sharedStrengths =
    intersectingStrengths.length > 0
      ? uniqueTake(intersectingStrengths, 2)
      : uniqueTake([resultA.strengths[0], resultB.strengths[0]].filter(Boolean), 2)

  const potentialConflicts = uniqueTake([resultA.cautions[0], resultB.cautions[0]].filter(Boolean), 2)
  const neededActions = uniqueTake([resultA.recommendations[0], resultB.recommendations[0]].filter(Boolean), 2)

  return {
    resultA,
    resultB,
    matchPercent,
    sharedStrengths,
    potentialConflicts,
    neededActions,
    oneLiner: pickOneLiner(matchPercent, resultA, resultB),
  }
}
