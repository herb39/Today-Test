import { describe, expect, it } from 'vitest'
import { decodeAnswers, encodeAnswers } from '../src/utils/compareToken'
import type { TestAnswer, TestDefinition } from '../src/types/test'

const fixture: TestDefinition = {
  slug: 'fixture',
  title: '픽스처 테스트',
  shortTitle: '픽스처',
  description: 'd',
  intro: 'i',
  category: '직장생활',
  emoji: '🧪',
  estimatedMinutes: 1,
  theme: { color: '#000000', gradientFrom: '#000000', gradientTo: '#000000' },
  isPublished: true,
  isNew: false,
  relatedTestSlugs: [],
  seo: { title: 't', description: 'd' },
  questions: [
    {
      id: 'q1',
      question: 'q1',
      choices: [
        { id: 'q1a', label: 'a', effects: { a: 2 } },
        { id: 'q1b', label: 'b', effects: { b: 2 } },
      ],
    },
    {
      id: 'q2',
      question: 'q2',
      // 선택지가 5개인 문항 - 인덱스 기반 인코딩이 4개 초과에도 안전한지 검증
      choices: [
        { id: 'q2a', label: 'a', effects: { a: 2 } },
        { id: 'q2b', label: 'b', effects: { b: 1 } },
        { id: 'q2c', label: 'c', effects: { a: 1 } },
        { id: 'q2d', label: 'd', effects: { b: 1 } },
        { id: 'q2e', label: 'e', effects: { a: 1, b: 1 } },
      ],
    },
  ],
  results: [
    {
      id: 'a',
      title: 'A',
      shortTitle: 'A',
      emoji: '🅰️',
      summary: 's',
      description: 'd',
      strengths: [],
      cautions: [],
      recommendations: [],
      shareText: 's',
      color: '#000',
    },
    {
      id: 'b',
      title: 'B',
      shortTitle: 'B',
      emoji: '🅱️',
      summary: 's',
      description: 'd',
      strengths: [],
      cautions: [],
      recommendations: [],
      shareText: 's',
      color: '#000',
    },
  ],
}

describe('compareToken', () => {
  it('답변을 인코딩하고 다시 디코딩하면 원래 answers와 동일하다', () => {
    const answers: TestAnswer[] = [
      { questionId: 'q1', choiceId: 'q1b' },
      { questionId: 'q2', choiceId: 'q2e' },
    ]
    const token = encodeAnswers(fixture, answers)
    expect(token).toHaveLength(2)
    expect(decodeAnswers(fixture, token)).toEqual(answers)
  })

  it('선택지가 2개인 문항과 5개인 문항이 섞여 있어도 정확히 왕복한다', () => {
    const answers: TestAnswer[] = [
      { questionId: 'q1', choiceId: 'q1a' },
      { questionId: 'q2', choiceId: 'q2c' },
    ]
    const token = encodeAnswers(fixture, answers)
    expect(decodeAnswers(fixture, token)).toEqual(answers)
  })

  it('길이가 다른 토큰은 null을 반환한다', () => {
    expect(decodeAnswers(fixture, 'x')).toBeNull()
    expect(decodeAnswers(fixture, 'xxx')).toBeNull()
  })

  it('범위를 벗어난 인덱스를 담은 토큰은 null을 반환한다', () => {
    expect(decodeAnswers(fixture, 'z9')).toBeNull()
  })
})
