import type { TestDefinition } from '../../types/test'

export const insaTypeTest: TestDefinition = {
  slug: 'insa-type',
  title: '나의 인싸력 테스트',
  shortTitle: '인싸력',
  description: '나는 분위기를 이끄는 편일까, 조용히 즐기는 편일까?',
  intro:
    '모임에서 마이크를 잡는 사람도 있고, 구석 자리에서 다 지켜보는 사람도 있다. 어느 쪽이 더 낫고 덜하고의 문제가 아니라 그냥 스타일 차이다. 11개 질문으로 내가 사람들 사이에서 어떻게 에너지를 쓰고, 어떻게 관계를 맺는지 가볍게 확인해보자. 인싸든 아싸든 각자의 매력이 있는 법이다.',
  category: '관계',
  emoji: '🎉',
  estimatedMinutes: 3,
  theme: { color: '#eab308', gradientFrom: '#fde047', gradientTo: '#ca8a04' },
  isPublished: true,
  isNew: true,
  relatedTestSlugs: ['relationship-distance', 'decision-style'],
  seo: {
    title: '나의 인싸력 테스트 | 오늘의 테스트',
    description:
      '분위기 메이커 인싸형, 선택적 인싸형, 편안한 아싸형, 관찰형 아싸형. 11가지 질문으로 나의 인싸력과 관계 스타일을 유쾌하게 확인해보세요.',
    faq: [
      {
        question: '인싸력이 낮으면 안 좋은 건가요?',
        answer:
          '전혀 아니에요. 이 테스트는 우열을 가리기 위한 게 아니라 사람마다 다른 에너지 사용 방식과 관계 맺는 스타일을 재미있게 살펴보기 위한 콘텐츠예요. 인싸형이든 아싸형이든 각자의 매력이 있어요.',
      },
      {
        question: '테스트는 얼마나 걸리나요?',
        answer: '총 11개의 질문으로 구성되어 있고, 평균 3분 정도면 결과까지 확인할 수 있어요.',
      },
      {
        question: '결과가 상황에 따라 다르게 나올 수 있나요?',
        answer:
          '네, 그럴 수 있어요. 그날의 컨디션이나 기분에 따라 답변이 달라지면 결과도 달라질 수 있어요. 이 테스트는 재미로 보는 가벼운 콘텐츠이니 결과 하나로 나를 단정 짓지 않아도 괜찮아요.',
      },
    ],
  },
  questions: [
    {
      id: 'q1',
      question: '모임에서 새로운 사람들을 만나면 나는?',
      choices: [
        { id: 'q1a', label: '곧바로 다가가서 먼저 말을 건다', effects: { 'mood-maker': 2 } },
        { id: 'q1b', label: '몇 명 눈여겨보다가 마음에 드는 사람에게만 다가간다', effects: { 'selective-social': 2 } },
        { id: 'q1c', label: '굳이 먼저 말 걸지 않고 자리에 앉아 있는다', effects: { 'comfy-introvert': 2 } },
        { id: 'q1d', label: '사람들을 살펴보며 대화 흐름부터 파악한다', effects: { observer: 2 } },
      ],
    },
    {
      id: 'q2',
      question: '단체 카톡방에서 나는?',
      choices: [
        { id: 'q2a', label: '아무 말 대잔치를 주도하는 편이다', effects: { 'mood-maker': 2 } },
        { id: 'q2b', label: '필요한 말만 골라서 한다', effects: { 'selective-social': 2 } },
        { id: 'q2c', label: '읽씹은 아니지만 답장이 항상 느리다', effects: { 'comfy-introvert': 2 } },
        { id: 'q2d', label: '읽고 대화 흐름만 조용히 지켜본다', effects: { observer: 2 } },
      ],
    },
    {
      id: 'q3',
      question: '주말 약속이 갑자기 취소되면?',
      choices: [
        { id: 'q3a', label: '바로 다른 사람 찾아서 새 약속을 잡는다', effects: { 'mood-maker': 2 } },
        { id: 'q3d', label: '아쉽지만 계획대로 혼자만의 시간을 즐긴다', effects: { observer: 2 } },
        { id: 'q3b', label: '진짜 편한 한두 명에게만 연락해본다', effects: { 'selective-social': 2 } },
        { id: 'q3c', label: '오히려 잘됐다 싶어 집에서 쉰다', effects: { 'comfy-introvert': 2 } },
      ],
    },
    {
      id: 'q4',
      question: '처음 가는 모임에 초대받았다면?',
      choices: [
        { id: 'q4a', label: '신나서 참석 확정 답장부터 보낸다', effects: { 'mood-maker': 2 } },
        { id: 'q4b', label: '누가 오는지 먼저 확인하고 결정한다', effects: { 'selective-social': 2 } },
        { id: 'q4c', label: '안 가도 되는 핑계를 슬쩍 찾아본다', effects: { 'comfy-introvert': 2 } },
        { id: 'q4d', label: '일단 참석하되 구석 자리부터 확보한다', effects: { observer: 2 } },
      ],
    },
    {
      id: 'q5',
      question: '파티나 회식에서 내가 주로 있는 위치는?',
      choices: [
        { id: 'q5c', label: '출입구 가까운 조용한 자리', effects: { 'comfy-introvert': 2 } },
        { id: 'q5a', label: '중앙에서 분위기를 이끄는 자리', effects: { 'mood-maker': 2 } },
        { id: 'q5d', label: '전체가 잘 보이는 구석 자리', effects: { observer: 2 } },
        { id: 'q5b', label: '친한 사람들 바로 옆자리', effects: { 'selective-social': 2 } },
      ],
    },
    {
      id: 'q6',
      question: '친구가 힘든 일을 털어놓으면?',
      choices: [
        { id: 'q6a', label: '바로 만나서 기분 풀어주자며 나간다', effects: { 'mood-maker': 2 } },
        { id: 'q6c', label: '장문의 메시지로 진심을 눌러 담아 위로한다', effects: { 'comfy-introvert': 2 } },
        { id: 'q6b', label: '편하게 통화하며 얘기를 들어준다', effects: { 'selective-social': 2 } },
        { id: 'q6d', label: '이야기를 곰곰이 듣고 조언을 정리해서 건넨다', effects: { observer: 2 } },
      ],
    },
    {
      id: 'q7',
      question: 'SNS를 사용하는 습관은?',
      choices: [
        { id: 'q7a', label: '일상을 자주 올리고 댓글도 활발히 단다', effects: { 'mood-maker': 2 } },
        { id: 'q7b', label: '가끔 올리고 친한 사람 게시물에만 반응한다', effects: { 'selective-social': 2 } },
        { id: 'q7c', label: '눈팅만 하고 거의 올리지 않는다', effects: { 'comfy-introvert': 2 } },
        { id: 'q7d', label: '남의 게시물을 분석하듯 유심히 본다', effects: { observer: 2 } },
      ],
    },
    {
      id: 'q8',
      question: '낯선 사람과 한 팀이 되어 과제를 해야 한다면?',
      choices: [
        { id: 'q8a', label: '먼저 농담부터 던지며 분위기를 푼다', effects: { 'mood-maker': 2 } },
        { id: 'q8b', label: '필요한 얘기부터 효율적으로 나눈다', effects: { 'selective-social': 2 } },
        { id: 'q8c', label: '정해진 내 역할만 조용히 해낸다', effects: { 'comfy-introvert': 2 } },
        { id: 'q8d', label: '팀원들 성향을 파악한 뒤 움직인다', effects: { observer: 2 } },
      ],
    },
    {
      id: 'q9',
      question: '연락이 뜸했던 친구에게 갑자기 연락이 온다면?',
      choices: [
        { id: 'q9d', label: '왜 연락했는지 맥락부터 살핀다', effects: { observer: 2 } },
        { id: 'q9a', label: '반갑게 바로 약속부터 잡는다', effects: { 'mood-maker': 2 } },
        { id: 'q9c', label: '답은 하지만 만남은 다음으로 슬쩍 미룬다', effects: { 'comfy-introvert': 2 } },
        { id: 'q9b', label: '무슨 일인지 먼저 물어보고 판단한다', effects: { 'selective-social': 2 } },
      ],
    },
    {
      id: 'q10',
      question: '에너지가 바닥났다고 느낄 때 회복 방법은?',
      choices: [
        { id: 'q10a', label: '사람들 만나서 수다 떨며 충전한다', effects: { 'mood-maker': 2 } },
        { id: 'q10b', label: '가까운 한두 명과 조용히 만난다', effects: { 'selective-social': 2 } },
        { id: 'q10c', label: '혼자 집에서 아무것도 안 하고 쉰다', effects: { 'comfy-introvert': 2 } },
        { id: 'q10d', label: '좋아하는 콘텐츠 보며 생각을 정리한다', effects: { observer: 2 } },
      ],
    },
    {
      id: 'q11',
      question: '친구들에게 나는 어떤 사람으로 통할까?',
      choices: [
        { id: 'q11a', label: '어디서든 분위기를 살리는 사람', effects: { 'mood-maker': 2 } },
        { id: 'q11b', label: '필요할 때 확실히 나서는 사람', effects: { 'selective-social': 2 } },
        { id: 'q11c', label: '있는 듯 없는 듯 편안한 사람', effects: { 'comfy-introvert': 2 } },
        { id: 'q11d', label: '조용히 다 지켜보고 있는 사람', effects: { observer: 2 } },
      ],
    },
  ],
  results: [
    {
      id: 'mood-maker',
      title: '분위기 메이커 인싸형',
      shortTitle: '인싸형',
      emoji: '🎉',
      summary: '당신이 나타나면 그 자리의 텐션이 한 단계 올라간다.',
      description:
        '당신은 사람들 사이에서 에너지를 얻고, 그 에너지를 다시 주변에 나눠주는 유형이다. 낯선 사람도 금방 편하게 만들고, 조용하던 자리도 당신이 오면 술렁인다. 사람을 좋아하고 사람에게 좋아받는, 타고난 무드 메이커다.',
      strengths: ['처음 보는 사람과도 어색함 없이 대화를 튼다', '모임의 분위기를 자연스럽게 살린다', '주변 사람을 편하게 만드는 힘이 있다'],
      cautions: ['혼자만의 시간을 챙기지 않으면 방전되기 쉽다', '가끔은 조용히 있고 싶어도 그럴 틈을 못 낸다'],
      recommendations: ['일주일에 한 번은 아무 약속 없는 날을 만들어라', '모두를 챙기려 하지 말고 가끔은 받는 입장이 되어도 된다'],
      shareText: '나는 분위기 메이커 인싸형 - 내가 있으면 자리가 산다',
      color: '#ca8a04',
    },
    {
      id: 'selective-social',
      title: '선택적 인싸형',
      shortTitle: '선택적 인싸',
      emoji: '😎',
      summary: '아무나와는 안 논다. 하지만 마음에 들면 제대로 논다.',
      description:
        '당신은 넓은 인맥보다 깊은 관계를 택하는 유형이다. 사람을 가려서 만나는 게 아니라, 에너지를 어디에 쓸지 똑똑하게 고르는 것이다. 겉으로는 무리 없이 어울리지만, 진짜 마음을 여는 사람은 따로 있다.',
      strengths: ['관계에 쓰는 에너지를 효율적으로 배분한다', '필요할 때는 확실하게 사교성을 발휘한다', '얕은 관계에 휘둘리지 않는 단단함이 있다'],
      cautions: ['처음 만나는 자리에서는 다소 계산적으로 보일 수 있다', '마음의 문을 여는 데 시간이 걸리는 편이다'],
      recommendations: ['가끔은 계산 없이 즉흥적인 만남에 몸을 던져봐라', '친해지고 싶은 사람에게는 먼저 마음을 표현해봐라'],
      shareText: '나는 선택적 인싸형 - 아무나와는 안 놀지만 놀 땐 제대로 논다',
      color: '#a16207',
    },
    {
      id: 'comfy-introvert',
      title: '편안한 아싸형',
      shortTitle: '편안한 아싸',
      emoji: '🛋️',
      summary: '군중 속 소음보다 나만의 고요가 훨씬 편하다.',
      description:
        '당신은 혼자 있는 시간을 결핍이 아니라 충전으로 여기는 유형이다. 억지로 무리에 끼려 하지 않고, 내 페이스대로 관계를 유지한다. 몇 안 되는 사람들과 오래, 편하게 가는 쪽을 훨씬 좋아한다.',
      strengths: ['혼자서도 시간을 알차고 편안하게 보낸다', '소수의 관계를 깊고 안정적으로 유지한다', '남의 시선에 크게 휘둘리지 않는다'],
      cautions: ['새로운 사람과 친해지기까지 시간이 꽤 걸린다', '먼저 연락하는 걸 자주 미루는 편이다'],
      recommendations: ['가끔은 먼저 연락해보는 작은 용기를 내봐라', '억지 사교 대신 좋아하는 소규모 모임을 찾아봐라'],
      shareText: '나는 편안한 아싸형 - 혼자 있는 시간이 제일 편하다',
      color: '#78716c',
    },
    {
      id: 'observer',
      title: '관찰형 아싸형',
      shortTitle: '관찰형 아싸',
      emoji: '🔍',
      summary: '말은 적게 해도, 그 자리에서 가장 많은 걸 보고 있다.',
      description:
        '당신은 뛰어들기보다 지켜보는 쪽을 택하는 유형이다. 앞에 나서지 않아도 분위기와 사람 사이의 흐름을 정확히 읽는다. 조용해 보이지만 사실 그 누구보다 눈치가 빠르고 통찰력이 있다.',
      strengths: ['상황과 사람을 빠르게 파악하는 눈치가 있다', '불필요한 갈등에 휘말리지 않는다', '한마디를 해도 핵심을 짚는다'],
      cautions: ['생각이 많아 행동으로 옮기기까지 오래 걸린다', '속마음을 잘 드러내지 않아 오해를 사기도 한다'],
      recommendations: ['눈치챈 것의 절반만이라도 소리 내어 말해봐라', '관찰한 만큼 가끔은 직접 대화에 뛰어들어봐라'],
      shareText: '나는 관찰형 아싸형 - 조용히 다 보고 있다',
      color: '#57534e',
    },
  ],
}
