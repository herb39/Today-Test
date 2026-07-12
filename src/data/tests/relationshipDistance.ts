import type { TestDefinition } from '../../types/test'

export const relationshipDistanceTest: TestDefinition = {
  slug: 'relationship-distance',
  title: '나의 인간관계 거리감 테스트',
  shortTitle: '관계 거리감',
  description: '가까운 사이일수록 거리 조절이 어렵다면? 11가지 질문으로 알아보는 나의 인간관계 거리감 유형',
  intro:
    '사람마다 편안하게 느끼는 관계의 거리는 달라요. 누군가는 매일 연락하고 붙어 있어야 안심이 되고, 누군가는 적당히 떨어져 있을 때 오히려 편안함을 느끼죠. 11개의 질문에 답하다 보면, 내가 관계 안에서 얼마나 가까이 다가가고, 어디쯤에서 선을 긋고, 얼마나 신중하게 마음을 여는 사람인지 자연스럽게 알게 될 거예요.',
  category: '관계',
  emoji: '🤝',
  estimatedMinutes: 3,
  theme: {
    color: '#6366f1',
    gradientFrom: '#818cf8',
    gradientTo: '#4338ca',
  },
  questions: [
    {
      id: 'q1',
      question: '친구에게 요즘 연락이 뜸해졌다는 걸 느꼈을 때',
      choices: [
        { id: 'q1a', label: '서운한 마음이 조금 들지만, 자연스럽게 안부 인사를 건네며 다시 리듬을 맞춰요', effects: { 'easy-distance': 2, 'close-bond': 1 } },
        { id: 'q1b', label: '각자 사정이 있겠거니 하고, 연락이 다시 올 때까지 편하게 기다려요', effects: { 'clear-line': 2 } },
        { id: 'q1c', label: '혹시 무슨 일 있나 걱정돼서 먼저 메시지를 보내고 챙겨요', effects: { 'warm-oversharer': 2 } },
        { id: 'q1d', label: '바로 연락하기보다, 이 타이밍이 맞을지 한 번 더 생각해봐요', effects: { 'careful-explorer': 2 } },
      ],
    },
    {
      id: 'q2',
      question: '여러 명이 있는 단체 채팅방에서 나는',
      choices: [
        { id: 'q2a', label: '대화 흐름을 이끌면서 다들 챙기고, 반응도 제일 빨리 해요', effects: { 'close-bond': 2 } },
        { id: 'q2b', label: '필요한 얘기에만 짧게 답하고, 나머지는 조용히 지켜봐요', effects: { 'clear-line': 2, 'easy-distance': 1 } },
        { id: 'q2c', label: '다들 잘 지내나 궁금해서 이런저런 질문을 많이 던져요', effects: { 'warm-oversharer': 2 } },
        { id: 'q2d', label: '분위기를 먼저 파악한 뒤에 한두 마디씩 조심스럽게 껴요', effects: { 'careful-explorer': 2 } },
      ],
    },
    {
      id: 'q3',
      question: '친구가 갑자기 고민 상담을 요청해왔을 때',
      choices: [
        { id: 'q3a', label: '만사 제쳐두고 달려가서 밤새도록 얘기를 들어줘요', effects: { 'close-bond': 2 } },
        { id: 'q3b', label: '시간을 내서 차분히 들어주되, 너무 깊이 끌려 들어가진 않아요', effects: { 'easy-distance': 2 } },
        { id: 'q3c', label: '같이 발 벗고 나서서 해결책까지 찾아주고 싶어져요', effects: { 'warm-oversharer': 2, 'clear-line': 1 } },
        { id: 'q3d', label: '먼저 무슨 일인지 충분히 파악한 다음에 조심스럽게 말을 얹어요', effects: { 'careful-explorer': 2 } },
      ],
    },
    {
      id: 'q4',
      question: '오랜만에 만난 친구와 대화를 나눌 때',
      choices: [
        { id: 'q4a', label: '떨어져 있던 시간이 무색하게 시시콜콜한 얘기까지 다 쏟아내요', effects: { 'close-bond': 2 } },
        { id: 'q4b', label: '요즘 어떻게 지내는지 편하게 근황을 나누는 정도로도 충분해요', effects: { 'easy-distance': 2 } },
        { id: 'q4c', label: '굳이 사적인 이야기까지 캐묻지 않고, 가벼운 화제로도 즐거워요', effects: { 'clear-line': 2 } },
        { id: 'q4d', label: '예전 기억을 하나씩 꺼내보면서 상대가 어떻게 변했는지 살펴봐요', effects: { 'careful-explorer': 2, 'warm-oversharer': 1 } },
      ],
    },
    {
      id: 'q5',
      question: '친구가 개인적인 부탁을 해왔을 때',
      choices: [
        { id: 'q5a', label: '웬만하면 다 들어주고 싶고, 부탁을 들어주기 전에 상황을 한 번 더 물어봐요', effects: { 'close-bond': 2, 'careful-explorer': 1 } },
        { id: 'q5b', label: '할 수 있는 선에서는 기꺼이 돕고, 무리다 싶으면 솔직히 말해요', effects: { 'easy-distance': 2 } },
        { id: 'q5c', label: '내 상황부터 살핀 뒤, 어려운 부탁이면 정중히 사양해요', effects: { 'clear-line': 2 } },
        { id: 'q5d', label: '부탁 안 해도 먼저 나서서 도와주고 싶은 마음이 커요', effects: { 'warm-oversharer': 2 } },
      ],
    },
    {
      id: 'q6',
      question: '친구들과 약속이나 여행을 계획할 때',
      choices: [
        { id: 'q6a', label: '다 같이 의견을 모아서 무난한 일정으로 정하는 걸 좋아해요', effects: { 'easy-distance': 2 } },
        { id: 'q6b', label: '내 일정을 먼저 확실히 챙기고, 그 안에서 즐겁게 맞춰가요', effects: { 'clear-line': 2, 'close-bond': 1 } },
        { id: 'q6c', label: '다들 좋아할 만한 코스를 이것저것 알아보고 먼저 제안해요', effects: { 'warm-oversharer': 2 } },
        { id: 'q6d', label: '정하기 전에 다른 사람들 생각을 충분히 들어보고 나서 의견을 내요', effects: { 'careful-explorer': 2 } },
      ],
    },
    {
      id: 'q7',
      question: '마음속 이야기를 얼마나 터놓는 편인가요',
      choices: [
        { id: 'q7a', label: '친한 친구에게는 웬만한 속마음도 다 털어놓는 편이에요', effects: { 'close-bond': 2 } },
        { id: 'q7b', label: '정말 믿을 수 있는 사람에게만, 그것도 필요한 만큼만 얘기해요', effects: { 'clear-line': 2 } },
        { id: 'q7c', label: '얘기를 듣고 나면 걱정돼서 계속 안부를 확인하고 챙기게 돼요', effects: { 'warm-oversharer': 2, 'easy-distance': 1 } },
        { id: 'q7d', label: '얘기하기 전에 이 사람이 어디까지 이해해줄 수 있을지 가늠해봐요', effects: { 'careful-explorer': 2 } },
      ],
    },
    {
      id: 'q8',
      question: '친구와 다투고 난 뒤 화해하는 방식은',
      choices: [
        { id: 'q8a', label: '빨리 풀고 싶어서 먼저 연락해 마음을 다 풀어놓아요', effects: { 'close-bond': 2 } },
        { id: 'q8b', label: '며칠 시간을 두고 감정이 가라앉으면 자연스럽게 다시 연락해요', effects: { 'easy-distance': 2 } },
        { id: 'q8c', label: '친구가 속상해할까봐 이것저것 챙기며 먼저 다가가요', effects: { 'warm-oversharer': 2 } },
        { id: 'q8d', label: '무엇 때문에 서운했는지 충분히 정리한 다음, 조심스럽게 대화를 시도해요', effects: { 'careful-explorer': 2, 'clear-line': 1 } },
      ],
    },
    {
      id: 'q9',
      question: '모임에 낯선 사람이 함께 왔을 때',
      choices: [
        { id: 'q9a', label: '먼저 다가가서 이것저것 챙겨주며 빨리 편해지도록 이끌어요', effects: { 'close-bond': 2, 'warm-oversharer': 1 } },
        { id: 'q9b', label: '적당히 대화를 나누면서 자연스럽게 어울리는 편이에요', effects: { 'easy-distance': 2 } },
        { id: 'q9c', label: '굳이 애쓰지 않고, 필요할 때 인사 정도만 나눠요', effects: { 'clear-line': 2 } },
        { id: 'q9d', label: '어떤 사람인지 좀 더 지켜본 뒤에 천천히 말을 걸어요', effects: { 'careful-explorer': 2 } },
      ],
    },
    {
      id: 'q10',
      question: '누군가 나도 모르게 선을 넘는 느낌이 들 때',
      choices: [
        { id: 'q10a', label: '서운해도 이 정도는 괜찮다며 넘어가는 편이에요', effects: { 'close-bond': 2 } },
        { id: 'q10b', label: '이건 아니다 싶으면, 잠깐 생각을 정리한 뒤 부드럽게 말해요', effects: { 'easy-distance': 2, 'careful-explorer': 1 } },
        { id: 'q10c', label: '선을 넘었다 싶은 순간 바로, 명확하게 표현해요', effects: { 'clear-line': 2 } },
        { id: 'q10d', label: '속상하지만 관계가 어색해질까봐 걱정이 앞서요', effects: { 'warm-oversharer': 2 } },
      ],
    },
    {
      id: 'q11',
      question: '내가 생각하는 가장 이상적인 친구 사이는',
      choices: [
        { id: 'q11a', label: '적당히 자주 연락하면서도 서로의 생활을 존중해주는 사이', effects: { 'easy-distance': 2 } },
        { id: 'q11b', label: '각자의 공간을 지켜주면서, 필요할 때 든든하게 있어주는 사이', effects: { 'clear-line': 2 } },
        { id: 'q11c', label: '언제든 서로의 일에 진심으로 참견하고 챙겨줄 수 있는 사이', effects: { 'warm-oversharer': 2, 'close-bond': 1 } },
        { id: 'q11d', label: '천천히 알아가면서 신뢰를 차곡차곡 쌓아가는 사이', effects: { 'careful-explorer': 2 } },
      ],
    },
  ],
  results: [
    {
      id: 'close-bond',
      title: '절친 밀착형',
      shortTitle: '밀착형',
      emoji: '🫶',
      summary: '마음의 문을 활짝 열고, 가까운 사람에게는 거리를 두지 않아요.',
      description:
        '당신은 친해진 사람과는 최대한 가까이 지내고 싶어 하는 타입이에요. 자잘한 일상까지 나누고, 자주 연락하고, 함께 있는 시간 자체를 소중히 여겨요. 그 덕분에 주변 사람들은 당신 옆에서 깊은 유대감을 느끼곤 해요.',
      strengths: ['마음을 먼저 열어서 관계를 빠르게 가깝게 만들어요', '함께하는 시간과 애정 표현에 진심이에요'],
      cautions: ['가끔은 상대의 개인 공간을 놓치기 쉬워요', '관계에 마음을 많이 쓰는 만큼 서운함도 크게 느낄 수 있어요'],
      recommendations: ['상대마다 편한 거리가 다르다는 걸 가끔 확인해보세요', '내 마음만큼 상대도 여유가 필요할 수 있다는 걸 기억해요'],
      shareText: '나는 절친 밀착형 - 가까운 사람껜 거리를 두지 않아요',
      color: '#4338ca',
    },
    {
      id: 'easy-distance',
      title: '적당한 거리형',
      shortTitle: '거리형',
      emoji: '🌿',
      summary: '가깝지도 멀지도 않은, 편안한 온도를 잘 아는 사람이에요.',
      description:
        '당신은 관계에서 균형 감각이 뛰어나요. 너무 붙지도, 너무 멀어지지도 않는 딱 좋은 거리를 본능적으로 찾아내죠. 그 덕분에 함께 있는 사람들은 부담 없이 편안함을 느껴요.',
      strengths: ['상황에 맞게 거리를 유연하게 조절해요', '누구와 있어도 무리 없이 자연스러운 편안함을 줘요'],
      cautions: ['가끔은 조금 더 다가가야 할 순간을 지나칠 수 있어요', '깊은 얘기를 나누기까지 시간이 걸릴 수 있어요'],
      recommendations: ['정말 가까워지고 싶은 사람에게는 한 걸음 먼저 다가가봐요', '균형만큼 가끔의 과감한 표현도 관계에 도움이 돼요'],
      shareText: '나는 적당한 거리형 - 딱 좋은 온도를 아는 사람',
      color: '#059669',
    },
    {
      id: 'clear-line',
      title: '선긋기 능숙형',
      shortTitle: '선긋기형',
      emoji: '🧭',
      summary: '내 공간과 상대의 공간을 정확히 구분할 줄 아는 사람이에요.',
      description:
        '당신은 관계 안에서도 자신만의 영역을 잘 지켜요. 무리한 부탁이나 불편한 상황에는 분명하게 선을 긋고, 그 덕분에 오히려 관계가 오래도록 건강하게 유지돼요.',
      strengths: ['필요한 순간에 정중하지만 분명하게 의사를 표현해요', '나와 상대 모두의 공간을 존중할 줄 알아요'],
      cautions: ['가끔은 거리감이 있다는 오해를 살 수 있어요', '먼저 다가가는 표현이 조금 인색해 보일 수 있어요'],
      recommendations: ['가끔은 먼저 다가가는 작은 표현도 시도해보세요', '선을 긋는 이유를 짧게라도 설명하면 오해가 줄어요'],
      shareText: '나는 선긋기 능숙형 - 내 공간을 지킬 줄 아는 사람',
      color: '#0f766e',
    },
    {
      id: 'warm-oversharer',
      title: '오지랖 다정형',
      shortTitle: '다정형',
      emoji: '🍯',
      summary: '정이 많아서 자꾸 챙기고, 참견까지 마음이 담겨 있는 사람이에요.',
      description:
        '당신은 주변 사람들의 일이 남 일 같지 않아요. 걱정되면 먼저 나서서 챙기고, 도움이 될 만한 건 뭐든 해주고 싶어 하죠. 그 다정함 덕분에 사람들은 당신 곁에서 든든함을 느껴요.',
      strengths: ['먼저 나서서 챙기는 따뜻한 마음을 가졌어요', '어려운 순간에 가장 먼저 손 내밀어주는 사람이에요'],
      cautions: ['때로는 원치 않는 참견처럼 느껴질 수 있어요', '상대의 감정을 내 일처럼 떠안느라 지칠 수 있어요'],
      recommendations: ['도와주기 전에 상대가 원하는지 먼저 물어봐요', '내 에너지도 아끼면서 다정함을 나눠주세요'],
      shareText: '나는 오지랖 다정형 - 정 많은 마음으로 챙기는 사람',
      color: '#c2410c',
    },
    {
      id: 'careful-explorer',
      title: '신중한 탐색형',
      shortTitle: '탐색형',
      emoji: '🔭',
      summary: '천천히, 꾸준히 신뢰를 쌓아가는 사람이에요.',
      description:
        '당신은 관계를 서두르지 않아요. 상대를 충분히 관찰하고, 시간을 들여 신뢰를 확인한 뒤에야 마음을 열죠. 그렇게 쌓은 관계는 쉽게 흔들리지 않는 단단함을 가져요.',
      strengths: ['신중하게 상대를 파악해서 오해를 줄여요', '한 번 쌓은 신뢰는 꾸준하고 단단하게 이어가요'],
      cautions: ['마음을 여는 데 시간이 걸려 답답해 보일 수 있어요', '먼저 다가가는 걸 망설이다 기회를 놓칠 수 있어요'],
      recommendations: ['이미 믿음이 생겼다면 조금 더 과감하게 표현해보세요', '천천히 다가가는 속도를 상대에게 살짝 알려주면 좋아요'],
      shareText: '나는 신중한 탐색형 - 천천히 신뢰를 쌓는 사람',
      color: '#4c1d95',
    },
  ],
  relatedTestSlugs: ['decision-style', 'conflict-style'],
  seo: {
    title: '나의 인간관계 거리감 테스트 | 오늘의 테스트',
    description:
      '절친 밀착형부터 신중한 탐색형까지, 나는 관계에서 어떤 거리감을 가진 사람일까요? 11개 질문으로 알아보는 인간관계 거리감 유형 테스트.',
    faq: [
      {
        question: '인간관계 거리감 테스트는 어떤 걸 알려주나요?',
        answer:
          '친구 사이의 연락 빈도, 고민 상담 방식, 선 넘는 상황에 대한 반응 등을 바탕으로 절친 밀착형부터 신중한 탐색형까지 다섯 가지 관계 거리감 유형 중 나에게 맞는 유형을 알려드려요.',
      },
      {
        question: '테스트는 얼마나 걸리나요?',
        answer: '총 11개 질문으로 구성되어 있고, 평균 3분이면 편하게 끝낼 수 있어요.',
      },
      {
        question: '결과가 정확한가요?',
        answer:
          '이 테스트는 관계 심리를 가볍게 들여다보는 콘텐츠로, 의학적·심리학적 진단이 아니에요. 상대와의 관계나 그날 기분에 따라 결과가 달라질 수 있으니 재미로 봐주세요.',
      },
    ],
  },
  isPublished: true,
  isNew: true,
}
