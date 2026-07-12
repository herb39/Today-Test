import { useSeo } from '../utils/useSeo'
import { siteConfig } from '../config/site'

export function PrivacyPage() {
  useSeo({
    title: '개인정보처리방침',
    description: `${siteConfig.name}의 개인정보처리방침입니다.`,
    path: '/privacy',
  })

  return (
    <article className="space-y-5 text-sm leading-relaxed text-stone-700">
      <h1 className="text-xl font-bold text-stone-900">개인정보처리방침</h1>
      <p className="text-xs text-stone-500">시행일: 2026년 7월 11일</p>

      <p>
        {siteConfig.name}({siteConfig.nameEn}, 이하 &ldquo;서비스&rdquo;)는 이용자의 개인정보를
        소중히 여기며, 아래와 같은 원칙으로 서비스를 운영합니다. 본 방침은 일반적인 소규모 콘텐츠
        서비스에 맞춰 작성된 안내이며 법률 자문을 대신하지 않습니다.
      </p>

      <section>
        <h2 className="mb-1.5 font-bold text-stone-900">1. 회원가입 및 개인정보 수집</h2>
        <p>
          서비스는 회원가입, 로그인 기능을 제공하지 않으며, 이름·이메일 등 개인을 식별할 수 있는
          정보를 별도로 수집하지 않습니다. 테스트 답변 내용 역시 서버에 전송되거나 저장되지
          않습니다.
        </p>
      </section>

      <section>
        <h2 className="mb-1.5 font-bold text-stone-900">2. 브라우저 저장소(localStorage) 이용</h2>
        <p>
          테스트를 진행하는 도중 새로고침하더라도 이어서 진행할 수 있도록, 답변 진행 상황을
          이용자의 브라우저 localStorage에 일시적으로 저장합니다. 이 정보는 이용자의 기기에만
          남아 있으며 서비스 운영자나 제3자에게 전송되지 않고, 테스트를 완료하면 자동으로
          삭제됩니다.
        </p>
      </section>

      <section>
        <h2 className="mb-1.5 font-bold text-stone-900">3. 분석 도구 (Google Analytics)</h2>
        <p>
          서비스는 방문 통계 분석을 위해 Google Analytics(GA4)를 선택적으로 사용할 수 있습니다.
          GA4가 활성화된 경우 페이지 조회, 테스트 시작·완료, 공유 클릭 등 서비스 이용 통계를
          수집하며, 이때 어떤 선택지를 골랐는지와 같은 답변 원문은 전송하지 않습니다. GA4가
          설정되지 않은 경우 관련 스크립트는 전혀 로드되지 않습니다.
        </p>
      </section>

      <section>
        <h2 className="mb-1.5 font-bold text-stone-900">4. 광고 (Google AdSense)</h2>
        <p>
          서비스는 운영 비용 충당을 위해 Google AdSense 광고를 게재할 수 있습니다. AdSense와 같은
          제3자 광고 서비스는 이용자에게 맞춤형 광고를 제공하기 위해 쿠키를 사용할 수 있으며, 이는
          Google의 개인정보처리방침에 따라 운영됩니다. 광고가 비활성화된 상태에서는 관련 스크립트가
          로드되지 않습니다.
        </p>
      </section>

      <section>
        <h2 className="mb-1.5 font-bold text-stone-900">5. 카카오톡 공유</h2>
        <p>
          결과 공유 시 카카오 JavaScript SDK를 통해 카카오톡 공유 기능을 제공할 수 있습니다. 이
          기능은 이용자가 직접 공유 버튼을 눌렀을 때만 동작하며, 관련 설정이 없는 경우 공유 버튼
          자체가 표시되지 않습니다.
        </p>
      </section>

      <section>
        <h2 className="mb-1.5 font-bold text-stone-900">6. 문의</h2>
        <p>
          개인정보 관련 문의사항은{' '}
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

      <section>
        <h2 className="mb-1.5 font-bold text-stone-900">7. 방침 변경</h2>
        <p>
          본 방침은 서비스 개선 또는 관련 법령 변경에 따라 수정될 수 있으며, 변경 시 이 페이지를
          통해 안내합니다.
        </p>
      </section>
    </article>
  )
}
