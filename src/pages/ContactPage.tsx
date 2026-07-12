import { useSeo } from '../utils/useSeo'
import { siteConfig } from '../config/site'

export function ContactPage() {
  useSeo({
    title: '문의',
    description: `${siteConfig.name}에 문의하는 방법을 안내합니다.`,
    path: '/contact',
  })

  return (
    <article className="space-y-5 text-sm leading-relaxed text-stone-700">
      <h1 className="text-xl font-bold text-stone-900">문의</h1>
      <p>
        서비스 이용 중 궁금한 점, 제안하고 싶은 테스트 주제, 오류 제보 등 어떤 의견이든 편하게
        보내주세요.
      </p>

      {siteConfig.contactEmail ? (
        <p className="rounded-xl bg-stone-50 px-4 py-3 font-medium text-stone-800">
          이메일:{' '}
          <a href={`mailto:${siteConfig.contactEmail}`} className="underline">
            {siteConfig.contactEmail}
          </a>
        </p>
      ) : (
        <p className="rounded-xl bg-stone-50 px-4 py-3 text-stone-500">
          문의 채널이 아직 준비 중입니다. 조금만 기다려주세요.
        </p>
      )}

      <p className="text-xs text-stone-500">
        문의 내용에 개인정보(연락처, 답변 내용 등)를 포함하실 필요는 없습니다.
      </p>
    </article>
  )
}
