export type ResultScoreMap = Record<string, number>

export interface QuestionChoice {
  id: string
  label: string
  /** 이 선택지가 결과 유형별 점수에 미치는 영향 (resultId -> 가감 점수) */
  effects: ResultScoreMap
}

export interface Question {
  id: string
  question: string
  choices: QuestionChoice[]
}

export interface TestResult {
  id: string
  title: string
  shortTitle: string
  emoji: string
  /** 한 줄 요약 */
  summary: string
  /** 상세 설명 */
  description: string
  strengths: string[]
  cautions: string[]
  recommendations: string[]
  /** 공유용 짧은 문구 */
  shareText: string
  /** 결과 테마 색상 (Tailwind 클래스 조합에 사용할 hex) */
  color: string
  relatedResultIds?: string[]
}

export interface TestTheme {
  color: string
  gradientFrom: string
  gradientTo: string
}

export interface TestSeo {
  title: string
  description: string
}

export interface TestDefinition {
  slug: string
  title: string
  shortTitle: string
  /** 카드 목록에 쓰이는 한 줄 설명 */
  description: string
  /** 테스트 시작 페이지에 노출되는 2~4문장의 소개 콘텐츠 */
  intro: string
  category: TestCategory
  emoji: string
  estimatedMinutes: number
  thumbnail?: string
  theme: TestTheme
  questions: Question[]
  results: TestResult[]
  relatedTestSlugs: string[]
  seo: TestSeo
  isPublished: boolean
  isNew: boolean
}

export type TestCategory =
  | '직장생활'
  | '집중력'
  | '연애'
  | 'AI/미래'
  | '성격'
  | '관계'
  | '라이프스타일'

export interface TestAnswer {
  questionId: string
  choiceId: string
}

export interface TestProgress {
  slug: string
  answers: TestAnswer[]
  currentQuestionIndex: number
  updatedAt: number
}
