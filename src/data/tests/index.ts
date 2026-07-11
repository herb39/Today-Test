import type { TestDefinition } from '../../types/test'
import { burnoutTest } from './burnout'
import { focusTest } from './focus'
import { loveStyleTest } from './loveStyle'
import { aiSurvivalTest } from './aiSurvival'
import { animalTypeTest } from './animalType'
import { kakaoHabitTest } from './kakaoHabit'
import { workDinnerTest } from './workDinner'
import { spendingStyleTest } from './spendingStyle'
import { travelStyleTest } from './travelStyle'
import { snsCharacterTest } from './snsCharacter'
import { insaTypeTest } from './insaType'
import { relationshipDistanceTest } from './relationshipDistance'
import { decisionStyleTest } from './decisionStyle'
import { conflictStyleTest } from './conflictStyle'

/** 새 테스트를 추가하려면 이 배열에 항목을 추가하기만 하면 된다. */
export const allTests: TestDefinition[] = [
  burnoutTest,
  focusTest,
  aiSurvivalTest,
  loveStyleTest,
  animalTypeTest,
  kakaoHabitTest,
  workDinnerTest,
  spendingStyleTest,
  travelStyleTest,
  snsCharacterTest,
  insaTypeTest,
  relationshipDistanceTest,
  decisionStyleTest,
  conflictStyleTest,
]

export const publishedTests: TestDefinition[] = allTests.filter((test) => test.isPublished)

export function getTestBySlug(slug: string): TestDefinition | undefined {
  return allTests.find((test) => test.slug === slug)
}

export const categories: readonly TestDefinition['category'][] = [
  '직장생활',
  '집중력',
  '연애',
  'AI/미래',
  '성격',
  '관계',
  '라이프스타일',
]
