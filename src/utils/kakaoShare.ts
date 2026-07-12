import { siteConfig } from '../config/site'
import { loadExternalScript } from './loadExternalScript'

const KAKAO_SDK_URL = 'https://t1.kakaocdn.net/kakao_js_sdk/2.8.1/kakao.min.js'

interface KakaoShareParams {
  text: string
  url: string
}

declare global {
  interface Window {
    Kakao?: {
      init: (key: string) => void
      isInitialized: () => boolean
      Share: {
        sendDefault: (options: Record<string, unknown>) => void
      }
    }
  }
}

async function ensureKakaoReady(): Promise<boolean> {
  if (!siteConfig.kakaoJavascriptKey) return false

  try {
    await loadExternalScript(KAKAO_SDK_URL)
  } catch {
    return false
  }

  if (!window.Kakao) return false
  if (!window.Kakao.isInitialized()) {
    window.Kakao.init(siteConfig.kakaoJavascriptKey)
  }
  return true
}

/**
 * 'feed' 템플릿(이미지+버튼 카드)은 카카오톡에서 제대로 뜨지 않는 경우가 있었다.
 * 링크 복사로 붙여넣는 것과 동일하게, 텍스트와 링크만 보내는 가장 단순한
 * 'text' 템플릿을 쓴다 — 카카오톡이 링크의 OG 태그로 미리보기를 자체적으로
 * 만들어주므로 이미지를 따로 넘길 필요도 없다.
 */
export async function shareToKakao({ text, url }: KakaoShareParams) {
  const ready = await ensureKakaoReady()
  if (!ready || !window.Kakao) return false

  try {
    window.Kakao.Share.sendDefault({
      objectType: 'text',
      text,
      link: {
        mobileWebUrl: url,
        webUrl: url,
      },
    })
    return true
  } catch {
    return false
  }
}
