import type { TestDefinition } from '../types/test'

/** 소개 페이지의 "이런 분께 추천해요" 섹션. 테스트별 추가 콘텐츠 없이 기존 필드로만 만든다. */
export function getRecommendedFor(test: TestDefinition): string[] {
  return [
    `"${test.description}"에 공감한다면`,
    `${test.category} 관련 나의 성향이 궁금한 분`,
    `${test.estimatedMinutes}분 안에 가볍게 즐기고 싶은 분`,
  ]
}
