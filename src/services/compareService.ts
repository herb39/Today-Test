import type { TestAnswer, TestDefinition } from '../types/test'
import { decodeAnswers, encodeAnswers } from '../utils/compareToken'

/**
 * 친구 비교 초대 토큰을 만들고 푸는 인터페이스. 지금은 URL에 답변을 그대로
 * 인코딩하는 UrlCompareService만 있지만, 나중에 Cloudflare KV/D1으로 옮길 때는
 * 이 인터페이스를 구현하는 새 서비스를 추가하고 getCompareService()의 반환값만
 * 바꾸면 된다 (호출부는 전혀 변경할 필요가 없다).
 */
export interface CompareService {
  createInviteToken(test: TestDefinition, answers: TestAnswer[]): Promise<string>
  resolveInviteToken(test: TestDefinition, token: string): Promise<TestAnswer[] | null>
}

class UrlCompareService implements CompareService {
  async createInviteToken(test: TestDefinition, answers: TestAnswer[]): Promise<string> {
    return encodeAnswers(test, answers)
  }

  async resolveInviteToken(test: TestDefinition, token: string): Promise<TestAnswer[] | null> {
    return decodeAnswers(test, token)
  }
}

let instance: CompareService | null = null

export function getCompareService(): CompareService {
  if (!instance) instance = new UrlCompareService()
  return instance
}
