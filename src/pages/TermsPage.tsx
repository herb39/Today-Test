import { useSeo } from '../utils/useSeo'
import { siteConfig } from '../config/site'

export function TermsPage() {
  useSeo({
    title: '이용약관',
    description: `${siteConfig.name}의 이용약관입니다.`,
    path: '/terms',
  })

  return (
    <article className="space-y-5 text-sm leading-relaxed text-stone-700">
      <h1 className="text-xl font-bold text-stone-900">이용약관</h1>
      <p className="text-xs text-stone-400">시행일: 2026년 7월 11일</p>

      <section>
        <h2 className="mb-1.5 font-bold text-stone-900">1. 서비스의 성격</h2>
        <p>
          {siteConfig.name}({siteConfig.nameEn})가 제공하는 모든 테스트 콘텐츠는 재미와
          자기이해를 위한 목적으로 제작된 것이며, 의학적·심리학적 진단이나 전문적인 상담을
          대신하지 않습니다. 결과는 통계적·과학적 검증을 거친 심리 검사가 아니라 참고용 콘텐츠임을
          안내드립니다.
        </p>
      </section>

      <section>
        <h2 className="mb-1.5 font-bold text-stone-900">2. 이용 방법</h2>
        <p>
          서비스는 별도의 회원가입 없이 누구나 무료로 이용할 수 있습니다. 이용자는 서비스가
          제공하는 질문에 답변하여 결과를 확인하고, 이를 개인적인 용도로 자유롭게 공유할 수
          있습니다.
        </p>
      </section>

      <section>
        <h2 className="mb-1.5 font-bold text-stone-900">3. 콘텐츠의 저작권</h2>
        <p>
          서비스에 게재된 테스트 문항, 결과 설명, 디자인 등 모든 콘텐츠의 저작권은{' '}
          {siteConfig.name}에 있습니다. 사전 동의 없이 콘텐츠 전체 또는 일부를 무단으로 복제,
          배포, 상업적으로 이용할 수 없습니다. 다만 결과 화면을 개인 SNS 등에 공유하는 것은
          자유롭게 허용됩니다.
        </p>
      </section>

      <section>
        <h2 className="mb-1.5 font-bold text-stone-900">4. 이용자의 의무</h2>
        <p>
          이용자는 서비스를 이용하면서 관계 법령 및 본 약관을 준수해야 하며, 서비스의 정상적인
          운영을 방해하는 행위(비정상적인 접근, 자동화된 요청 등)를 해서는 안 됩니다.
        </p>
      </section>

      <section>
        <h2 className="mb-1.5 font-bold text-stone-900">5. 면책 조항</h2>
        <p>
          서비스는 테스트 결과의 정확성, 완전성을 보증하지 않으며, 이용자가 결과를 신뢰하여 내린
          판단이나 행동으로 발생한 손해에 대해 책임지지 않습니다. 또한 무료로 제공되는 서비스의
          특성상, 운영자의 사정에 따라 서비스 내용이 변경되거나 중단될 수 있습니다.
        </p>
      </section>

      <section>
        <h2 className="mb-1.5 font-bold text-stone-900">6. 약관의 변경</h2>
        <p>
          본 약관은 서비스 개선이나 관련 법령 변경에 따라 수정될 수 있으며, 변경 시 이 페이지를
          통해 안내합니다.
        </p>
      </section>

      <section>
        <h2 className="mb-1.5 font-bold text-stone-900">7. 문의</h2>
        <p>
          이용약관 관련 문의사항은{' '}
          {siteConfig.contactEmail ? (
            <a href={`mailto:${siteConfig.contactEmail}`} className="underline">
              {siteConfig.contactEmail}
            </a>
          ) : (
            '문의 페이지'
          )}
          로 연락해주세요.
        </p>
      </section>
    </article>
  )
}
