import { describe, expect, it } from 'vitest'
import { computeCompatibility } from '../src/utils/compatibility'
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
      choices: [
        { id: 'q2a', label: 'a', effects: { a: 2 } },
        { id: 'q2b', label: 'b', effects: { b: 2 } },
      ],
    },
    {
      id: 'q3',
      question: 'q3',
      choices: [
        { id: 'q3a', label: 'a', effects: { a: 2 } },
        { id: 'q3b', label: 'b', effects: { b: 2 } },
      ],
    },
    {
      id: 'q4',
      question: 'q4',
      choices: [
        { id: 'q4a', label: 'a', effects: { a: 2 } },
        { id: 'q4b', label: 'b', effects: { b: 2 } },
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
      strengths: ['꾸준함', '배려심'],
      cautions: ['무리하기 쉬움'],
      recommendations: ['휴식 챙기기'],
      shareText: 's',
      color: '#000',
      compatibilityTags: ['안정형'],
    },
    {
      id: 'b',
      title: 'B',
      shortTitle: 'B',
      emoji: '🅱️',
      summary: 's',
      description: 'd',
      strengths: ['추진력', '배려심'],
      cautions: ['성급함'],
      recommendations: ['속도 조절'],
      shareText: 's',
      color: '#000',
      compatibilityTags: ['안정형'],
    },
  ],
}

describe('computeCompatibility', () => {
  it('모든 문항에서 같은 선택을 하면 matchPercent가 100이다', () => {
    const answers: TestAnswer[] = fixture.questions.map((q) => ({ questionId: q.id, choiceId: q.choices[0].id }))
    const insight = computeCompatibility(fixture, answers, answers)
    expect(insight.matchPercent).toBe(100)
  })

  it('절반의 문항에서 다른 선택을 하면 matchPercent가 50이다', () => {
    const answersA: TestAnswer[] = fixture.questions.map((q) => ({ questionId: q.id, choiceId: q.choices[0].id }))
    const answersB: TestAnswer[] = fixture.questions.map((q, i) => ({
      questionId: q.id,
      choiceId: q.choices[i < 2 ? 0 : 1].id,
    }))
    const insight = computeCompatibility(fixture, answersA, answersB)
    expect(insight.matchPercent).toBe(50)
  })

  it('겹치는 강점이 있으면 sharedStrengths에 포함된다', () => {
    const answersA: TestAnswer[] = fixture.questions.map((q) => ({ questionId: q.id, choiceId: q.choices[0].id }))
    const answersB: TestAnswer[] = fixture.questions.map((q) => ({ questionId: q.id, choiceId: q.choices[1].id }))
    const insight = computeCompatibility(fixture, answersA, answersB)
    expect(insight.sharedStrengths).toContain('배려심')
  })

  it('두 결과가 같은 compatibilityTags를 가지면 oneLiner에 태그가 언급된다', () => {
    const answersA: TestAnswer[] = fixture.questions.map((q) => ({ questionId: q.id, choiceId: q.choices[0].id }))
    const answersB: TestAnswer[] = fixture.questions.map((q) => ({ questionId: q.id, choiceId: q.choices[1].id }))
    const insight = computeCompatibility(fixture, answersA, answersB)
    expect(insight.oneLiner).toContain('안정형')
  })
})
