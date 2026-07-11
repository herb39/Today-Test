import { describe, expect, it } from 'vitest'
import { calculateScores, resolveResult, getResultById } from '../src/utils/scoring'
import type { TestDefinition } from '../src/types/test'

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
        { id: 'q2a', label: 'a', effects: { a: 2, b: 1 } },
        { id: 'q2b', label: 'b', effects: { b: 2 } },
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

describe('calculateScores', () => {
  it('선택하지 않은 질문은 점수에 반영되지 않는다', () => {
    const scores = calculateScores(fixture, [])
    expect(scores).toEqual({ a: 0, b: 0 })
  })

  it('선택지의 효과를 누적한다', () => {
    const scores = calculateScores(fixture, [
      { questionId: 'q1', choiceId: 'q1a' },
      { questionId: 'q2', choiceId: 'q2a' },
    ])
    expect(scores.a).toBe(4)
    expect(scores.b).toBe(1)
  })

  it('존재하지 않는 질문/선택지 id는 무시한다', () => {
    const scores = calculateScores(fixture, [
      { questionId: 'unknown', choiceId: 'unknown' },
      { questionId: 'q1', choiceId: 'unknown' },
    ])
    expect(scores).toEqual({ a: 0, b: 0 })
  })
})

describe('resolveResult', () => {
  it('가장 점수가 높은 결과를 반환한다', () => {
    const result = resolveResult(fixture, [
      { questionId: 'q1', choiceId: 'q1b' },
      { questionId: 'q2', choiceId: 'q2b' },
    ])
    expect(result.id).toBe('b')
  })

  it('동점일 경우 results 배열의 앞선 결과를 우선한다', () => {
    const result = resolveResult(fixture, [])
    expect(result.id).toBe('a')
  })
})

describe('getResultById', () => {
  it('존재하는 결과를 찾는다', () => {
    expect(getResultById(fixture, 'b')?.title).toBe('B')
  })

  it('존재하지 않으면 undefined를 반환한다', () => {
    expect(getResultById(fixture, 'nope')).toBeUndefined()
  })
})
