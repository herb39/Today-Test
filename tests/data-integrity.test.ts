import { describe, expect, it } from 'vitest'
import { allTests } from '../src/data/tests'

describe('테스트 데이터 무결성', () => {
  it('테스트 slug가 서로 중복되지 않는다', () => {
    const slugs = allTests.map((t) => t.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  for (const test of allTests) {
    describe(`${test.slug} 테스트`, () => {
      it('질문이 10~12개다', () => {
        expect(test.questions.length).toBeGreaterThanOrEqual(10)
        expect(test.questions.length).toBeLessThanOrEqual(12)
      })

      it('결과가 4~6개다', () => {
        expect(test.results.length).toBeGreaterThanOrEqual(4)
        expect(test.results.length).toBeLessThanOrEqual(6)
      })

      it('질문 id가 서로 중복되지 않는다', () => {
        const ids = test.questions.map((q) => q.id)
        expect(new Set(ids).size).toBe(ids.length)
      })

      it('결과 id가 서로 중복되지 않는다', () => {
        const ids = test.results.map((r) => r.id)
        expect(new Set(ids).size).toBe(ids.length)
      })

      it('모든 질문에 선택지가 2개 이상 있다', () => {
        for (const question of test.questions) {
          expect(question.choices.length).toBeGreaterThanOrEqual(2)
        }
      })

      it('모든 선택지의 effects는 실제 존재하는 결과 id만 참조한다', () => {
        const resultIds = new Set(test.results.map((r) => r.id))
        for (const question of test.questions) {
          for (const choice of question.choices) {
            for (const resultId of Object.keys(choice.effects)) {
              expect(resultIds.has(resultId)).toBe(true)
            }
          }
        }
      })

      it('결과 콘텐츠 필드가 비어있지 않다', () => {
        for (const result of test.results) {
          expect(result.title.length).toBeGreaterThan(0)
          expect(result.summary.length).toBeGreaterThan(0)
          expect(result.description.length).toBeGreaterThan(0)
          expect(result.strengths.length).toBeGreaterThan(0)
          expect(result.cautions.length).toBeGreaterThan(0)
          expect(result.recommendations.length).toBeGreaterThan(0)
        }
      })

      it('relatedTestSlugs는 존재하는 다른 테스트를 가리킨다', () => {
        const allSlugs = new Set(allTests.map((t) => t.slug))
        for (const slug of test.relatedTestSlugs) {
          expect(allSlugs.has(slug)).toBe(true)
          expect(slug).not.toBe(test.slug)
        }
      })
    })
  }
})
