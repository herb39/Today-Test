import { useSeo } from '../utils/useSeo'
import { siteConfig } from '../config/site'

export function AboutPage() {
  useSeo({
    title: '소개',
    description: `${siteConfig.name} 서비스 소개입니다.`,
    path: '/about',
  })

  return (
    <article className="space-y-5 text-sm leading-relaxed text-stone-700">
      <h1 className="text-xl font-bold text-stone-900">소개</h1>
      <p>
        {siteConfig.name}({siteConfig.nameEn})는 짧은 질문에 답하며 나의 성향과 오늘의 상태를
        가볍게 발견해보는 심리·성향 테스트 서비스입니다.
      </p>
      <p>
        저희가 제공하는 모든 테스트는 재미와 자기이해를 위한 콘텐츠이며, 전문적인 심리 상담이나
        의학적 진단을 대신하지 않습니다. 결과는 하나의 참고 자료로 가볍게 즐겨주시고, 실제 고민이
        있다면 전문가와 상담하시길 권해드립니다.
      </p>
      <p>
        {siteConfig.name}는 회원가입이나 로그인 없이 누구나 바로 이용할 수 있으며, 답변 내용은
        서버에 저장되지 않습니다. 테스트 진행 상황은 새로고침 후에도 이어갈 수 있도록 사용하시는
        기기의 브라우저(localStorage)에만 임시로 저장됩니다.
      </p>
      <p>
        완료한 테스트 결과는 카카오톡이나 링크로 손쉽게 친구에게 공유할 수 있고, 다른 테스트도
        이어서 즐길 수 있도록 만들었습니다. 앞으로도 다양한 주제의 테스트를 꾸준히 추가할
        예정입니다.
      </p>
    </article>
  )
}
