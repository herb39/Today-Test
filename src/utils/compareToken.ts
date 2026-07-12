import type { TestAnswer, TestDefinition } from '../types/test'

/**
 * 질문 순서대로, 선택한 choice의 "그 질문 내" 인덱스(0-based)를 base36 한 글자로
 * 이어붙인다. choice-id 네이밍 규칙에 의존하지 않아 질문당 선택지 개수가 달라도
 * 안전하고, 서버 없이 URL만으로 답변 시퀀스를 왕복시킬 수 있다.
 */
export function encodeAnswers(test: TestDefinition, answers: TestAnswer[]): string {
  return test.questions
    .map((question) => {
      const answer = answers.find((a) => a.questionId === question.id)
      const index = answer ? question.choices.findIndex((c) => c.id === answer.choiceId) : -1
      return (index < 0 ? 0 : index).toString(36)
    })
    .join('')
}

/** 깨졌거나 다른 테스트용 토큰이면 null을 반환한다. */
export function decodeAnswers(test: TestDefinition, token: string): TestAnswer[] | null {
  if (token.length !== test.questions.length) return null

  const answers: TestAnswer[] = []
  for (let i = 0; i < test.questions.length; i++) {
    const index = parseInt(token[i], 36)
    const choice = test.questions[i].choices[index]
    if (Number.isNaN(index) || !choice) return null
    answers.push({ questionId: test.questions[i].id, choiceId: choice.id })
  }
  return answers
}
