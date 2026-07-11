import type { Question, TestAnswer, TestDefinition, TestResult } from '../types/test'

function findChoice(question: Question, choiceId: string) {
  return question.choices.find((choice) => choice.id === choiceId)
}

/** 답변 목록으로부터 결과 유형별 누적 점수를 계산한다. */
export function calculateScores(
  test: TestDefinition,
  answers: TestAnswer[],
): ResultScoreMap {
  const scores: ResultScoreMap = {}
  for (const result of test.results) {
    scores[result.id] = 0
  }

  for (const answer of answers) {
    const question = test.questions.find((q) => q.id === answer.questionId)
    if (!question) continue
    const choice = findChoice(question, answer.choiceId)
    if (!choice) continue
    for (const [resultId, delta] of Object.entries(choice.effects)) {
      scores[resultId] = (scores[resultId] ?? 0) + delta
    }
  }

  return scores
}

/** 점수가 가장 높은 결과를 반환한다. 동점일 경우 results 배열에서 먼저 정의된 결과를 우선한다. */
export function resolveResult(test: TestDefinition, answers: TestAnswer[]): TestResult {
  const scores = calculateScores(test, answers)

  let winner = test.results[0]
  let winnerScore = scores[winner.id] ?? 0

  for (const result of test.results.slice(1)) {
    const score = scores[result.id] ?? 0
    if (score > winnerScore) {
      winner = result
      winnerScore = score
    }
  }

  return winner
}

export function getResultById(test: TestDefinition, resultId: string): TestResult | undefined {
  return test.results.find((result) => result.id === resultId)
}

type ResultScoreMap = Record<string, number>
