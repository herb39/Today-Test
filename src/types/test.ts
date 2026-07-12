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
  /** 결과 카드 상단에 크게 표시할 바이럴 문구. 없으면 title로 대체된다. */
  viralTitle?: string
  /** "당신도 그런가요?" 류의 공유 유도 질문. 없으면 자동 생성된다. */
  shareQuestion?: string
  /** 친구가 이 결과를 보면 보일 법한 반응 한 줄. 없으면 표시하지 않는다. */
  friendReaction?: string
  /** 비교 결과의 궁합 한줄평에 가미할 짧은 태그. 없어도 궁합 계산 자체는 동작한다. */
  compatibilityTags?: string[]
  /** OG/스토리 이미지용 짧은 설명. 없으면 summary로 대체된다. */
  shareDescription?: string
  /** 공유 카드에 쓸 이모지. 없으면 emoji로 대체된다. */
  shareEmoji?: string
}

export interface TestTheme {
  color: string
  gradientFrom: string
  gradientTo: string
}

export interface TestFaqItem {
  question: string
  answer: string
}

export interface TestSeo {
  title: string
  description: string
  /** 있으면 소개 페이지에 FAQ 섹션과 FAQPage JSON-LD를 함께 생성한다. */
  faq?: TestFaqItem[]
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
