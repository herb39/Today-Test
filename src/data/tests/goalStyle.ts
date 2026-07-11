import type { TestDefinition } from '../../types/test'

export const goalStyleTest: TestDefinition = {
  slug: 'goal-style',
  title: '나의 목표 달성 스타일 테스트',
  shortTitle: '목표 달성 스타일',
  description: '불도저처럼 밀어붙이는 사람, 계획표부터 짜는 사람, 몇 번이고 다시 불붙는 사람, 유연하게 완급을 조절하는 사람. 11가지 질문으로 나만의 목표 달성 스타일을 찾아보자.',
  intro: '새해 목표, 다이어트, 자격증, 운동 루틴... 목표는 다 다르지만 그걸 이뤄가는 방식은 사람마다 다르다. 11가지 질문에 답하고 나만의 목표 달성 스타일을 확인해보자.',
  category: '성격',
  emoji: '🏆',
  estimatedMinutes: 3,
  theme: { color: '#b45309', gradientFrom: '#fbbf24', gradientTo: '#92400e' },
  isPublished: true,
  isNew: true,
  relatedTestSlugs: ['burnout', 'focus'],
  seo: {
    title: '나의 목표 달성 스타일 테스트 | 오늘의 테스트',
    description: '불도저 실행형, 꼼꼼 계획형, 작심삼일 반복형, 완급조절 밸런스형. 11가지 질문으로 나의 목표 달성 스타일을 재미있게 알아보세요.',
  },
  questions: [
    {
      id: 'q1',
      question: '새해 목표를 세울 때 나는?',
      choices: [
        { id: 'q1a', label: '고민은 5분, 오늘부터 바로 실행한다', effects: { bulldozer: 2 } },
        { id: 'q1b', label: '언제, 무엇을, 어떻게 할지 표부터 만든다', effects: { planner: 2 } },
        { id: 'q1c', label: '일단 의욕이 활활 타오르는 지금이 골든타임이다', effects: { 'three-day': 2 } },
        { id: 'q1d', label: '이번 달 일정 보고 시작 시점을 정한다', effects: { flexible: 2 } },
      ],
    },
    {
      id: 'q2',
      question: '목표를 향해 가다가 슬럼프가 오면?',
      choices: [
        { id: 'q2a', label: '슬럼프 원인을 분석하고 계획을 수정한다', effects: { planner: 2 } },
        { id: 'q2b', label: '며칠 완전히 손 놓고 쉬다가 어느 순간 다시 불붙는다', effects: { 'three-day': 2 } },
        { id: 'q2c', label: '강도를 확 낮춰서 최소한만 유지하며 버틴다', effects: { flexible: 2 } },
        { id: 'q2d', label: '슬럼프고 뭐고 일단 몸부터 움직이고 본다', effects: { bulldozer: 2 } },
      ],
    },
    {
      id: 'q3',
      question: '목표 달성을 위한 계획표, 나에게는?',
      choices: [
        { id: 'q3a', label: '계획은 세워두지만 실제론 그때그때 감으로 움직인다', effects: { 'three-day': 2 } },
        { id: 'q3b', label: '큰 방향만 있고 세부는 유동적으로 채운다', effects: { flexible: 2 } },
        { id: 'q3c', label: '계획표보다 오늘 할 일 하나가 더 중요하다', effects: { bulldozer: 2 } },
        { id: 'q3d', label: '엑셀이나 앱으로 촘촘하게 짜야 마음이 놓인다', effects: { planner: 2 } },
      ],
    },
    {
      id: 'q4',
      question: '헬스장 3개월을 끊었다. 한 달 뒤 내 모습은?',
      choices: [
        { id: 'q4a', label: '주 3~4회 페이스를 꾸준히 유지하고 있다', effects: { flexible: 2 } },
        { id: 'q4b', label: '초반에 너무 무리해서 며칠은 근육통으로 못 갔다', effects: { bulldozer: 2 } },
        { id: 'q4c', label: '루틴표대로 정확히 지키고 있다', effects: { planner: 2 } },
        { id: 'q4d', label: '2주 다니고 3주 쉬고, 다시 2주 다니는 중이다', effects: { 'three-day': 2 } },
      ],
    },
    {
      id: 'q5',
      question: '목표가 생기면 가장 먼저 하는 행동은?',
      choices: [
        { id: 'q5a', label: '바로 첫 번째 행동을 실행에 옮긴다', effects: { bulldozer: 2 } },
        { id: 'q5b', label: '일단 신나서 주변에 선언부터 한다', effects: { 'three-day': 2 } },
        { id: 'q5c', label: '필요한 정보와 자료부터 수집한다', effects: { planner: 2 } },
        { id: 'q5d', label: '지금 이 목표가 내 삶에서 얼마나 우선순위인지부터 생각한다', effects: { flexible: 2 } },
      ],
    },
    {
      id: 'q6',
      question: '팀 프로젝트 마감이 다가올 때 나는?',
      choices: [
        { id: 'q6a', label: '이미 진작에 일정표대로 끝내놓은 상태다', effects: { planner: 2 } },
        { id: 'q6b', label: '중요도를 따져서 급한 것부터 처리한다', effects: { flexible: 2 } },
        { id: 'q6c', label: '밤을 새워서라도 일단 끝내고 본다', effects: { bulldozer: 2 } },
        { id: 'q6d', label: '마감 압박이 와야 진짜 실력이 나온다', effects: { 'three-day': 2 } },
      ],
    },
    {
      id: 'q7',
      question: '다이어리나 목표관리 앱, 나의 활용법은?',
      choices: [
        { id: 'q7a', label: '다운받아놓고 며칠 쓰다가 잊어버리길 반복한다', effects: { 'three-day': 2 } },
        { id: 'q7b', label: '기록보다 실행이 먼저라 앱은 잘 안 켠다', effects: { bulldozer: 2 } },
        { id: 'q7c', label: '필요할 때만 열어보는, 편하게 쓰는 도구다', effects: { flexible: 2 } },
        { id: 'q7d', label: '매일 빠짐없이 체크하고 기록하는 습관이 있다', effects: { planner: 2 } },
      ],
    },
    {
      id: 'q8',
      question: '큰 목표를 주변에 처음 얘기했을 때 나의 모습은?',
      choices: [
        { id: 'q8a', label: '"할 수 있을 때 하는 거지"라며 담담하게 넘어간다', effects: { flexible: 2 } },
        { id: 'q8b', label: '이미 세워둔 계획을 보여주며 조목조목 설명한다', effects: { planner: 2 } },
        { id: 'q8c', label: '텐션 넘치게 포부를 밝히지만 며칠 뒤엔 까먹을 수도 있다', effects: { 'three-day': 2 } },
        { id: 'q8d', label: '말보다 행동으로 보여주겠다며 바로 움직인다', effects: { bulldozer: 2 } },
      ],
    },
    {
      id: 'q9',
      question: '갑자기 야근이나 급한 일정이 생겨서 계획이 틀어지면?',
      choices: [
        { id: 'q9a', label: '변수 따위 무시하고 원래 하려던 대로 밀어붙인다', effects: { bulldozer: 2 } },
        { id: 'q9b', label: '오늘은 못했지만 내일 두 배로 하면 된다고 생각한다', effects: { 'three-day': 2 } },
        { id: 'q9c', label: '오늘 상황에 맞게 계획을 살짝 조정한다', effects: { flexible: 2 } },
        { id: 'q9d', label: '미리 짜둔 예비 계획(플랜 B)을 꺼낸다', effects: { planner: 2 } },
      ],
    },
    {
      id: 'q10',
      question: '드디어 목표를 이뤘다! 나의 반응은?',
      choices: [
        { id: 'q10a', label: '계획대로 됐다는 사실에 뿌듯함을 느낀다', effects: { planner: 2 } },
        { id: 'q10b', label: '바로 다음 목표를 찾아 나선다', effects: { bulldozer: 2 } },
        { id: 'q10c', label: '"역시 무리 안 해도 되는구나" 하며 여유롭게 웃는다', effects: { flexible: 2 } },
        { id: 'q10d', label: '몇 번이나 포기할 뻔했던 걸 떠올리며 눈물이 찔끔 난다', effects: { 'three-day': 2 } },
      ],
    },
    {
      id: 'q11',
      question: '친구가 "너는 대체 어떻게 목표를 이뤄?"라고 물으면 나의 대답은?',
      choices: [
        { id: 'q11a', label: '"몇 번이고 다시 시작하면 언젠간 돼" 라고 웃으며 답한다', effects: { 'three-day': 2 } },
        { id: 'q11b', label: '"무리 안 하고 꾸준히 하는 거지" 라고 답한다', effects: { flexible: 2 } },
        { id: 'q11c', label: '"계획을 세우면 반은 끝난 거야" 라고 답한다', effects: { planner: 2 } },
        { id: 'q11d', label: '"일단 시작하면 답 나와" 라고 답한다', effects: { bulldozer: 2 } },
      ],
    },
  ],
  results: [
    {
      id: 'bulldozer',
      title: '불도저 실행형',
      shortTitle: '불도저 실행형',
      emoji: '🚜',
      summary: '고민은 짧게, 행동은 즉시. 일단 몸부터 움직이고 본다.',
      description:
        '너는 계획서를 붙잡고 있는 시간에 이미 한 발짝 나가 있는 사람이다. 완벽한 타이밍 같은 건 안 믿는다. 오늘 시작하는 게 제일 빠른 길이라고 믿고, 실제로 그렇게 밀어붙여서 결과를 만들어낸다. 중간에 방향이 좀 틀어져도 괜찮다. 멈추는 것보다 방향을 트는 게 훨씬 쉬우니까.',
      strengths: [
        '생각을 행동으로 옮기는 속도가 남다르다',
        '망설임 때문에 기회를 놓치는 일이 거의 없다',
        '주변 사람들에게 추진력 있는 에너지를 전염시킨다',
      ],
      cautions: [
        '속도만큼 디테일을 놓칠 때가 있다',
        '중간 점검 없이 너무 멀리 가버릴 수 있다',
      ],
      recommendations: [
        '일주일에 한 번쯤은 잠깐 멈춰서 방향을 확인해보자',
        '속도를 늦추지 않아도 되니, 체크리스트 한 줄만 추가해보자',
      ],
      shareText: '나는 불도저 실행형 - 일단 저지르고 본다 🚜',
      color: '#c2410c',
    },
    {
      id: 'planner',
      title: '꼼꼼 계획형',
      shortTitle: '꼼꼼 계획형',
      emoji: '📋',
      summary: '실행보다 설계가 먼저. 완벽한 지도를 그려야 발이 떨어진다.',
      description:
        '너에게 계획은 선택이 아니라 필수다. 목표를 정하면 그걸 잘게 쪼개고, 순서를 매기고, 예상 변수까지 미리 적어둔다. 남들이 보기엔 유난스러워 보일 수 있지만, 그 촘촘한 설계 덕분에 막상 실행 단계에서는 헤매는 시간이 거의 없다. 지도 없이 뛰어드는 사람들 옆에서 여유롭게 완주하는 쪽이다.',
      strengths: [
        '시행착오를 미리 줄이는 능력이 탁월하다',
        '남들이 놓치는 디테일을 촘촘히 챙긴다',
        '한번 세운 계획은 끝까지 밀고 나가는 뚝심이 있다',
      ],
      cautions: [
        '계획을 짜는 데 시간을 너무 많이 쓸 수 있다',
        '계획에 없던 변수 앞에서 잠깐 당황할 수 있다',
      ],
      recommendations: [
        '계획은 80%만 세우고 20%는 여백으로 남겨두자',
        '완벽한 계획보다 완성된 실행이 더 중요할 때도 있다',
      ],
      shareText: '나는 꼼꼼 계획형 - 지도부터 그리고 출발한다 📋',
      color: '#0f766e',
    },
    {
      id: 'three-day',
      title: '작심삼일 반복형',
      shortTitle: '작심삼일 반복형',
      emoji: '🔥',
      summary: '불타올랐다 꺼졌다를 반복하지만, 그 불씨는 절대 완전히 꺼지지 않는다.',
      description:
        '남들은 "또 작심삼일이야?"라고 놀리지만, 사실 너의 진짜 무기는 재점화 능력이다. 며칠 반짝했다가 며칠 쉬고, 다시 불붙이고. 이 사이클을 수십 번 반복하다 보면 어느새 목표 근처에 도착해 있다. 꾸준함의 정의가 꼭 "매일 똑같이"일 필요는 없다. 너에게 꾸준함은 "결국 다시 돌아온다"는 뜻이다.',
      strengths: [
        '실패해도 죄책감 없이 금방 다시 시작한다',
        '짧고 굵은 몰입 구간에서 폭발적인 에너지를 낸다',
        '완벽하지 않아도 계속 시도하는 회복탄력성이 있다',
      ],
      cautions: [
        '불이 꺼진 기간이 길어지면 리듬을 잃기 쉽다',
        '중간 기록이 없으면 그동안의 성장을 스스로 못 알아챌 수 있다',
      ],
      recommendations: [
        '쉬는 기간에도 아주 작은 불씨 하나는 남겨두자 (하루 3분이라도)',
        '다시 시작할 때 죄책감 대신 "컴백"이라는 이름을 붙여주자',
      ],
      shareText: '나는 작심삼일 반복형 - 꺼져도 결국 다시 붙는다 🔥',
      color: '#db2777',
    },
    {
      id: 'flexible',
      title: '완급조절 밸런스형',
      shortTitle: '완급조절 밸런스형',
      emoji: '⚖️',
      summary: '몰아칠 때와 쉴 때를 기가 막히게 구분한다. 목표도 삶의 일부일 뿐이다.',
      description:
        '너는 목표에 인생을 통째로 갈아 넣지 않는다. 대신 목표를 삶의 리듬 안에 자연스럽게 배치한다. 바쁠 땐 속도를 늦추고, 여유가 생기면 다시 속도를 높인다. 이런 유연함 덕분에 번아웃 없이 오래 가는 편이다. 화려하게 불타오르진 않지만, 꺼지지도 않는다.',
      strengths: [
        '상황에 맞춰 속도를 조절하는 감각이 뛰어나다',
        '목표 때문에 일상이 무너지는 일이 거의 없다',
        '장기적으로 지치지 않고 꾸준히 갈 수 있다',
      ],
      cautions: [
        '여유를 부리다 초반 추진력이 약하게 느껴질 수 있다',
        '너무 유연하다 보면 마감 임박까지 느슨해질 수 있다',
      ],
      recommendations: [
        '가끔은 의도적으로 마감을 앞당겨서 긴장감을 만들어보자',
        '유연함은 무기지만, 최소한의 기준선은 정해두자',
      ],
      shareText: '나는 완급조절 밸런스형 - 무너지지 않고 오래 간다 ⚖️',
      color: '#7c3aed',
    },
  ],
}
