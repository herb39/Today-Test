import type { TestDefinition } from '../../types/test'

export const petCareStyleTest: TestDefinition = {
  slug: 'pet-care-style',
  title: '나의 반려동물 집사 스타일 테스트',
  shortTitle: '집사 스타일',
  description: '반려동물을 대하는 습관과 태도로 알아보는 나만의 집사 유형',
  intro:
    '반려동물과 함께하는 방식은 사람마다 참 달라요. 작은 몸짓 하나에도 마음을 졸이는 사람이 있고, 크게 신경 쓰지 않고 여유롭게 흘러가는 사람도 있고, 미리 계획부터 세워야 마음이 놓이는 사람도 있죠. 지금 반려동물이 없어도 괜찮아요. 11개의 질문에 "만약 키운다면"이라는 마음으로 편하게 답하다 보면, 나도 몰랐던 나의 집사 스타일이 자연스럽게 보일 거예요.',
  category: '라이프스타일',
  emoji: '🐕',
  estimatedMinutes: 3,
  theme: { color: '#ca8a04', gradientFrom: '#fbbf24', gradientTo: '#92400e' },
  isPublished: true,
  isNew: true,
  relatedTestSlugs: ['season-type', 'leadership-style'],
  seo: {
    title: '나의 반려동물 집사 스타일 테스트 | 오늘의 테스트',
    description:
      '과잉보호 집사형, 쿨한 자유방임형, 완벽 계획형, 놀이 대장형, 뒤늦은 깨달음형. 11가지 질문으로 반려동물을 대하는 나의 습관과 태도를 알아보세요.',
  },
  questions: [
    {
      id: 'q1',
      question: '반려동물을 키운다면, 이름을 지어줄 때 나는?',
      choices: [
        { id: 'q1a', label: '부르기 쉽고 발음 편한 이름으로 빠르게 정할 것 같다', effects: { 'easygoing-freerange': 2 } },
        { id: 'q1b', label: '의미, 어감, 부르기 편함까지 꼼꼼히 따져서 후보를 여러 개 뽑아볼 것 같다', effects: { 'perfect-planner': 2 } },
        { id: 'q1c', label: '같이 놀아주는 상상을 하다 보면 자연스럽게 어울리는 별명이 먼저 떠오른다', effects: { 'playful-companion': 2 } },
        {
          id: 'q1d',
          label: '일단 아무렇게나 지어놓고, 나중에 더 어울리는 이름이 있었다는 걸 깨닫고 아쉬워할 것 같다',
          effects: { 'late-bloomer': 2, 'overprotective-guardian': 1 },
        },
      ],
    },
    {
      id: 'q2',
      question: '반려동물과 산책을 나간다면 나는?',
      choices: [
        { id: 'q2a', label: '목줄을 두 번 세 번 확인하고, 사람 많은 길은 미리 피해서 다닌다', effects: { 'overprotective-guardian': 2 } },
        { id: 'q2b', label: '산책 시간과 코스를 요일별로 정해두고 거의 어기지 않는다', effects: { 'perfect-planner': 2 } },
        {
          id: 'q2c',
          label: '산책은 곧 놀이 시간, 공이나 장난감을 꼭 챙겨서 나간다',
          effects: { 'playful-companion': 2, 'easygoing-freerange': 1 },
        },
        { id: 'q2d', label: '처음엔 대충 나갔다가, 나중에야 더 좋아하는 코스를 알게 되어 바꾸는 편이다', effects: { 'late-bloomer': 2 } },
      ],
    },
    {
      id: 'q3',
      question: '반려동물의 밥을 챙긴다면 나는?',
      choices: [
        {
          id: 'q3a',
          label: '사료 성분표를 꼼꼼히 읽고, 혹시 안 맞을까 봐 소량씩 여러 번 시도해본다',
          effects: { 'overprotective-guardian': 2, 'perfect-planner': 1 },
        },
        { id: 'q3b', label: '잘 먹는 걸로 정해지면 그냥 쭉 그걸로 준다, 크게 스트레스 받지 않는다', effects: { 'easygoing-freerange': 2 } },
        { id: 'q3c', label: '밥 먹는 시간도 놀이처럼, 노즈워크 장난감이나 퍼즐 급식기를 써보고 싶다', effects: { 'playful-companion': 2 } },
        { id: 'q3d', label: '처음엔 대충 주다가, 나중에 더 좋은 방법이 있었다는 걸 알고 바꾼다', effects: { 'late-bloomer': 2 } },
      ],
    },
    {
      id: 'q4',
      question: '반려동물에게 새 장난감이나 물건을 들인다면 나는?',
      choices: [
        { id: 'q4a', label: '새 물건을 주기 전에 혹시 위험하지 않은지 몇 번이고 확인한다', effects: { 'overprotective-guardian': 2 } },
        {
          id: 'q4b',
          label: '일단 던져주고 알아서 탐색하게 둔다, 위험해 보이면 그때 치운다',
          effects: { 'easygoing-freerange': 2, 'playful-companion': 1 },
        },
        { id: 'q4c', label: '미리 정보를 찾아보고, 안전한 제품 목록을 만들어서 하나씩 사본다', effects: { 'perfect-planner': 2 } },
        { id: 'q4d', label: '일단 아무거나 사줬다가, 나중에 더 좋아하는 걸 알고 후회 반 반성 반을 한다', effects: { 'late-bloomer': 2 } },
      ],
    },
    {
      id: 'q5',
      question: '반려동물이 컨디션이 안 좋아 보인다면 나는?',
      choices: [
        { id: 'q5a', label: '작은 증상에도 바로 병원부터 예약한다', effects: { 'overprotective-guardian': 2 } },
        { id: 'q5b', label: '며칠 지켜보다가 스스로 괜찮아지면 그냥 넘어간다', effects: { 'easygoing-freerange': 2 } },
        { id: 'q5c', label: '정기 검진 일정을 캘린더에 미리 다 등록해두는 편이라 크게 당황하지 않는다', effects: { 'perfect-planner': 2 } },
        {
          id: 'q5d',
          label: '일단 신나게 놀아주면서 기분부터 풀어주려 한다',
          effects: { 'playful-companion': 2, 'late-bloomer': 1 },
        },
      ],
    },
    {
      id: 'q6',
      question: '반려동물이 집안에서 사고를 쳤다면 나는?',
      choices: [
        { id: 'q6a', label: '그럴 수도 있지, 하고 대수롭지 않게 치운다', effects: { 'easygoing-freerange': 2 } },
        {
          id: 'q6b',
          label: '왜 그랬는지 원인을 분석해서 다음엔 안 그러도록 환경을 미리 바꿔둔다',
          effects: { 'perfect-planner': 2, 'overprotective-guardian': 1 },
        },
        { id: 'q6c', label: '혼내지 않고 오히려 더 놀아주면서 스트레스를 풀어주려 한다', effects: { 'playful-companion': 2 } },
        { id: 'q6d', label: '처음엔 짜증부터 났다가, 나중에 내 잘못도 있었다는 걸 깨닫고 반성한다', effects: { 'late-bloomer': 2 } },
      ],
    },
    {
      id: 'q7',
      question: '며칠 집을 비워야 해서 반려동물을 맡겨야 한다면 나는?',
      choices: [
        { id: 'q7a', label: '며칠씩 맡기는 게 불안해서 웬만하면 데리고 다닐 방법을 찾는다', effects: { 'overprotective-guardian': 2 } },
        { id: 'q7b', label: '믿을 만한 펫시터나 호텔을 미리 꼼꼼히 비교해서 예약해둔다', effects: { 'perfect-planner': 2 } },
        {
          id: 'q7c',
          label: '데리고 다닐 수 있는 여행지를 찾아서 같이 신나게 놀러 간다',
          effects: { 'playful-companion': 2, 'easygoing-freerange': 1 },
        },
        { id: 'q7d', label: '급하게 아무 데나 맡겼다가, 나중에 더 좋은 곳이 있었다는 걸 알고 아쉬워한다', effects: { 'late-bloomer': 2 } },
      ],
    },
    {
      id: 'q8',
      question: '반려동물에게 새로운 행동을 가르친다면 나는?',
      choices: [
        {
          id: 'q8a',
          label: '혹시 잘못될까 봐 아주 조심스럽게, 작은 것 하나까지 신경 써서 알려준다',
          effects: { 'overprotective-guardian': 2, 'perfect-planner': 1 },
        },
        { id: 'q8b', label: '억지로 가르치기보다 크면서 자연스럽게 알아가게 둔다', effects: { 'easygoing-freerange': 2 } },
        { id: 'q8c', label: '놀이처럼, 게임하듯 재미있게 알려주는 걸 좋아한다', effects: { 'playful-companion': 2 } },
        { id: 'q8d', label: '처음엔 대충 넘어가다가, 나중에 제대로 안 가르친 걸 후회하고 다시 시작한다', effects: { 'late-bloomer': 2 } },
      ],
    },
    {
      id: 'q9',
      question: '반려동물과의 일상을 기록한다면 나는?',
      choices: [
        { id: 'q9a', label: '혹시 모를 사고에 대비해 위치 추적기나 카메라부터 알아본다', effects: { 'overprotective-guardian': 2 } },
        {
          id: 'q9b',
          label: '특별히 기록하지 않아도 그냥 순간순간을 즐긴다',
          effects: { 'easygoing-freerange': 2, 'playful-companion': 1 },
        },
        { id: 'q9c', label: '몸무게, 식사량, 배변 상태까지 앱이나 노트에 꾸준히 기록한다', effects: { 'perfect-planner': 2 } },
        { id: 'q9d', label: '처음엔 기록 안 하다가, 나중에 "그때 적어둘걸" 하며 뒤늦게 기록을 시작한다', effects: { 'late-bloomer': 2 } },
      ],
    },
    {
      id: 'q10',
      question: '손님이 놀러 와서 반려동물을 만지려 한다면 나는?',
      choices: [
        { id: 'q10a', label: '먼저 나서서 이것저것 주의사항을 알려준다', effects: { 'overprotective-guardian': 2 } },
        { id: 'q10b', label: '알아서 판단하게 두고, 크게 개입하지 않는다', effects: { 'easygoing-freerange': 2 } },
        { id: 'q10c', label: '미리 손님에게 우리 애의 규칙과 주의사항을 정리해서 안내한다', effects: { 'perfect-planner': 2 } },
        {
          id: 'q10d',
          label: '손님이 오면 오히려 신나서 같이 놀 거리부터 챙긴다',
          effects: { 'playful-companion': 2, 'late-bloomer': 1 },
        },
      ],
    },
    {
      id: 'q11',
      question: '반려동물과 함께할 앞으로의 시간을 상상해보면 나는?',
      choices: [
        { id: 'q11a', label: '큰 계획 없이도 하루하루 잘 맞춰가면 그걸로 충분하다고 생각한다', effects: { 'easygoing-freerange': 2 } },
        {
          id: 'q11b',
          label: '앞으로의 예방접종, 나이대별 관리 계획까지 미리 세워둔다',
          effects: { 'perfect-planner': 2, 'overprotective-guardian': 1 },
        },
        { id: 'q11c', label: '오래오래 같이 신나게 놀 생각에 벌써 설렌다', effects: { 'playful-companion': 2 } },
        { id: 'q11d', label: '지나고 나서야 "그때 이렇게 할걸" 하는 순간들이 유독 많을 것 같다', effects: { 'late-bloomer': 2 } },
      ],
    },
  ],
  results: [
    {
      id: 'overprotective-guardian',
      title: '과잉보호 집사형',
      shortTitle: '과잉보호 집사',
      emoji: '😰',
      summary: '문 열기 전부터 세 번은 확인하는, 걱정이 곧 사랑인 집사예요.',
      description:
        '반려동물의 작은 몸짓 하나에도 마음이 쓰이는 타입이에요. 위험할 수 있는 상황을 미리 상상하고 대비하는 데 진심이라, 늘 한 발 앞서 걱정하고 챙기는 편이에요. 그 세심함 덕분에 정작 큰 사고는 잘 일어나지 않지만, 가끔은 스스로도 지치고 반려동물도 눈치를 볼 때가 있어요.',
      strengths: ['위험 신호를 남들보다 빨리 알아챈다', '작은 변화도 놓치지 않고 세심하게 챙긴다', '안전과 관련된 준비만큼은 확실하게 해둔다'],
      cautions: ['걱정이 앞서 정작 즐거운 순간을 놓칠 때가 있다', '너무 조심스러운 태도가 반려동물에게 그대로 전해질 수 있다'],
      recommendations: [
        '하루 한 번은 걱정을 잠시 내려놓고 그냥 함께 있는 시간을 즐겨보아요',
        '모든 걸 혼자 챙기려 하지 말고 가끔은 주변에 맡기는 연습도 해보아요',
      ],
      shareText: '나는 과잉보호 집사형 - 걱정이 곧 사랑이에요',
      color: '#b45309',
    },
    {
      id: 'easygoing-freerange',
      title: '쿨한 자유방임형',
      shortTitle: '자유방임형',
      emoji: '😎',
      summary: '크게 스트레스 받지 않고, 흘러가는 대로 여유롭게 함께하는 집사예요.',
      description:
        '매사에 너그럽고, 반려동물이 스스로 알아서 하는 걸 믿어주는 편이에요. 사소한 실수나 변화에 크게 동요하지 않고 "그럴 수도 있지" 하며 넘어가는 힘이 있어요. 덕분에 반려동물도 눈치 보지 않고 편안하게 지낼 수 있지만, 가끔은 조금 더 관심을 기울여야 할 순간까지 무심코 지나칠 때도 있어요.',
      strengths: ['함께 있는 것만으로도 서로 편안한 분위기를 만든다', '작은 일에 일희일비하지 않는 안정감이 있다', '반려동물의 독립성을 존중해준다'],
      cautions: ['챙겨야 할 타이밍을 무심코 놓칠 수 있다', '너무 여유로운 태도가 방치처럼 비칠 때도 있다'],
      recommendations: ['한 달에 한 번은 건강 상태를 의식적으로 점검해보아요', '여유로움과 무심함의 차이를 가끔 되짚어보아요'],
      shareText: '나는 쿨한 자유방임형 - 흘러가는 대로가 편해요',
      color: '#0d9488',
    },
    {
      id: 'perfect-planner',
      title: '완벽 계획형',
      shortTitle: '완벽 계획형',
      emoji: '📋',
      summary: '식사, 산책, 병원 일정까지 미리 다 정해두어야 마음이 놓이는 집사예요.',
      description:
        '반려동물과 관련된 모든 것을 미리 조사하고 계획하는 걸 좋아해요. 일정표와 기록을 꼼꼼히 남기고, 예상 가능한 변수까지 대비해두어야 안심이 되는 타입이에요. 그 철저함 덕분에 반려동물의 컨디션 변화를 빠르게 알아채지만, 계획이 틀어지면 유독 스트레스를 크게 받기도 해요.',
      strengths: ['꾸준한 기록과 관리로 건강 변화를 빠르게 알아챈다', '필요한 준비물과 일정을 빈틈없이 챙긴다', '예측 가능한 루틴으로 안정감을 준다'],
      cautions: ['계획대로 안 되면 필요 이상으로 스트레스를 받는다', '즉흥적인 즐거움을 놓치기 쉽다'],
      recommendations: ['가끔은 계획에 없던 산책이나 놀이를 그냥 즐겨보아요', '완벽하지 않아도 괜찮다는 걸 스스로에게 알려주어요'],
      shareText: '나는 완벽 계획형 - 일정표 없이는 불안해요',
      color: '#a16207',
    },
    {
      id: 'playful-companion',
      title: '놀이 대장형',
      shortTitle: '놀이 대장',
      emoji: '🎾',
      summary: '반려동물과 함께라면 뭐든 놀이가 되는, 에너지 넘치는 집사예요.',
      description:
        '반려동물과 함께하는 시간을 무엇보다 즐거운 놀이로 만드는 타입이에요. 밥을 줄 때도, 훈련을 할 때도 늘 재미 요소를 먼저 떠올려요. 그 밝은 에너지 덕분에 반려동물도 활기차게 지내지만, 가끔은 차분하게 쉬어야 할 순간까지 놀이로 채우려 할 때가 있어요.',
      strengths: ['함께 있는 시간을 늘 즐겁고 활기차게 만든다', '새로운 놀이와 활동을 찾아내는 데 능하다', '긍정적인 에너지로 유대감을 키운다'],
      cautions: ['쉬어야 할 타이밍까지 놀이로 채우려 할 수 있다', '차분한 관리보다 재미를 우선시할 때가 있다'],
      recommendations: ['신나게 논 만큼 충분히 쉬는 시간도 꼭 챙겨주어요', '가끔은 조용히 곁에 있어주는 것만으로도 충분하다는 걸 기억해요'],
      shareText: '나는 놀이 대장형 - 함께라면 뭐든 놀이가 돼요',
      color: '#ca8a04',
    },
    {
      id: 'late-bloomer',
      title: '뒤늦은 깨달음형',
      shortTitle: '뒤늦은 깨달음형',
      emoji: '🌱',
      summary: '처음엔 서툴러도, 지나고 나서 하나씩 더 좋은 방법을 깨닫는 집사예요.',
      description:
        '처음부터 완벽하게 준비하기보다는 일단 부딪혀보고, 지나고 나서야 "이렇게 할걸" 하고 깨닫는 편이에요. 시행착오를 겪으면서도 조금씩 더 나은 방법을 찾아가는 성장형 집사예요. 처음엔 서툴러 보여도, 시간이 지날수록 누구보다 반려동물을 잘 이해하게 되는 타입이에요.',
      strengths: ['경험을 통해 빠르게 배우고 다음엔 더 잘 챙긴다', '실수를 인정하고 바로 개선하려는 유연함이 있다', '시간이 지날수록 관계가 더 단단해진다'],
      cautions: ['처음 시기에 시행착오가 잦은 편이다', '미리 대비하기보다 겪은 뒤에야 움직인다'],
      recommendations: ['이번에 깨달은 걸 다음번엔 미리 적용해보아요', '서툴렀던 순간도 성장의 과정이라고 편하게 생각해요'],
      shareText: '나는 뒤늦은 깨달음형 - 겪어봐야 아는 스타일이에요',
      color: '#92400e',
    },
  ],
}
