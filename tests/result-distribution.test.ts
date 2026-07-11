import { describe, expect, it } from 'vitest'
import { allTests } from '../src/data/tests'
import { resolveResult } from '../src/utils/scoring'
import type { TestAnswer } from '../src/types/test'

const TRIALS = 3000

function randomAnswers(questions: { id: string; choices: { id: string }[] }[]): TestAnswer[] {
  return questions.map((q) => {
    const choice = q.choices[Math.floor(Math.random() * q.choices.length)]
    return { questionId: q.id, choiceId: choice.id }
  })
}

describe('결과 분포 시뮬레이션 (무작위 답변)', () => {
  for (const test of allTests) {
    it(`${test.slug}: 모든 결과가 실제로 나올 수 있고, 한 결과로 지나치게 쏠리지 않는다`, () => {
      const wins = new Map<string, number>()
      for (const result of test.results) wins.set(result.id, 0)

      for (let i = 0; i < TRIALS; i++) {
        const answers = randomAnswers(test.questions)
        const winner = resolveResult(test, answers)
        wins.set(winner.id, (wins.get(winner.id) ?? 0) + 1)
      }

      const resultCount = test.results.length
      const maxAllowedShare = resultCount <= 4 ? 0.55 : 0.5

      for (const result of test.results) {
        const count = wins.get(result.id) ?? 0
        const share = count / TRIALS
        // 모든 결과는 무작위 답변으로도 최소한 몇 번은 1등이 될 수 있어야 한다.
        expect(count).toBeGreaterThan(0)
        // 하나의 결과로 지나치게 쏠리지 않아야 한다.
        expect(share).toBeLessThan(maxAllowedShare)
      }
    })
  }
})
