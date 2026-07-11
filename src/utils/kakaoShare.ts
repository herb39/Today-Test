import { siteConfig } from '../config/site'
import { loadExternalScript } from './loadExternalScript'

const KAKAO_SDK_URL = 'https://t1.kakaocdn.net/kakao_js_sdk/2.8.1/kakao.min.js'

interface KakaoShareParams {
  title: string
  description: string
  imageUrl: string
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

export async function shareToKakao({ title, description, imageUrl, url }: KakaoShareParams) {
  const ready = await ensureKakaoReady()
  if (!ready || !window.Kakao) return false

  try {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title,
        description,
        imageUrl,
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      },
      buttons: [
        {
          title: '나도 테스트하기',
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    })
    return true
  } catch {
    return false
  }
}
