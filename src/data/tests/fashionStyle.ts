import type { TestDefinition } from '../../types/test'

export const fashionStyleTest: TestDefinition = {
  slug: 'fashion-style',
  title: '나의 패션 감각 테스트',
  shortTitle: '패션 감각',
  description: '꾸안꾸파? 트렌드세터? 포인트 하나로 승부하는 타입? 11문항으로 알아보는 나의 진짜 패션 감각.',
  intro:
    '옷을 고르는 방식만 봐도 그 사람의 취향이 보인다. 누군가는 힘을 쫙 빼고 자연스럽게 입는 게 진짜 스타일이라고 믿고, 누군가는 요즘 뜨는 아이템을 제일 먼저 입어봐야 직성이 풀린다. 편안함이 우선인 사람도 있고, 심플한 옷에 포인트 하나로 승부하는 사람도, 시간이 지나도 변하지 않는 클래식을 고수하는 사람도 있다. 이 테스트는 옷장을 열 때부터 외출 준비까지, 11개의 질문으로 나의 패션 감각을 캐치해서 어떤 스타일러인지 알려준다. 정답은 없으니 가볍게 즐기면서 내 취향을 구경해보자.',
  category: '라이프스타일',
  emoji: '👗',
  estimatedMinutes: 3,
  theme: { color: '#db2777', gradientFrom: '#f9a8d4', gradientTo: '#9d174d' },
  isPublished: true,
  isNew: true,
  relatedTestSlugs: ['hidden-charm', 'goal-style'],
  seo: {
    title: '나의 패션 감각 테스트 | 오늘의 테스트',
    description:
      '꾸안꾸형, 트렌드세터형, 편안함 최고형, 포인트 감각형, 클래식 고수형. 11가지 질문으로 알아보는 나의 진짜 패션 스타일 심리테스트. 3분이면 무료로 확인.',
  },
  questions: [
    {
      id: 'q1',
      question: '아침에 옷장 문을 열었을 때, 가장 먼저 손이 가는 건?',
      choices: [
        { id: 'q1a', label: '이번 시즌 SNS에서 난리 난 그 아이템', effects: { 'trend-setter': 2 } },
        { id: 'q1b', label: '일단 편하게 걸칠 수 있는 후드나 스웨트', effects: { 'comfy-first': 2 } },
        { id: 'q1c', label: '심플한 옷에 포인트 줄 액세서리 하나', effects: { 'point-item': 2 } },
        { id: 'q1d', label: '몇 년째 입어도 안 질리는 기본 아이템', effects: { 'classic-master': 2 } },
      ],
    },
    {
      id: 'q2',
      question: '친구가 "오늘 스타일 뭔가 신경 썼네?"라고 하면 드는 속마음은?',
      choices: [
        { id: 'q2a', label: '사실 대충 입었는데 그게 매력인가보다', effects: { 'natural-chic': 2 } },
        { id: 'q2b', label: '편한 옷인데 티가 안 났나 보다', effects: { 'comfy-first': 2 } },
        { id: 'q2c', label: '오늘 고른 액세서리 하나가 먹혔구나', effects: { 'point-item': 2 } },
        { id: 'q2d', label: '기본템 조합이 은근히 통했구나', effects: { 'classic-master': 2 } },
      ],
    },
    {
      id: 'q3',
      question: '쇼핑몰 앱을 켰을 때 나도 모르게 누르는 카테고리는?',
      choices: [
        { id: 'q3a', label: '편안해 보이면서 자연스러운 데일리룩', effects: { 'natural-chic': 2 } },
        { id: 'q3b', label: '지금 제일 핫하다는 신상 코너', effects: { 'trend-setter': 2 } },
        { id: 'q3c', label: '가방이나 목걸이 같은 소품 코너', effects: { 'point-item': 2 } },
        { id: 'q3d', label: '베이직하고 클래식한 아우터 코너', effects: { 'classic-master': 2 } },
      ],
    },
    {
      id: 'q4',
      question: '중요한 약속 전날, 입을 옷을 고르는 나의 모습은?',
      choices: [
        { id: 'q4a', label: '평소 즐겨 입는 편한 조합에서 크게 안 벗어난다', effects: { 'natural-chic': 2 } },
        { id: 'q4b', label: '최근 유행한다는 스타일을 참고해서 고른다', effects: { 'trend-setter': 2 } },
        { id: 'q4c', label: '일단 입고 편한 옷 위주로 고른다', effects: { 'comfy-first': 2 } },
        { id: 'q4d', label: '오래 입어도 무난한 단정한 아이템을 고른다', effects: { 'classic-master': 2 } },
      ],
    },
    {
      id: 'q5',
      question: '옷을 살 때 가장 먼저 확인하는 것은?',
      choices: [
        { id: 'q5a', label: '자연스럽게 어울리는지, 힘 안 준 느낌인지', effects: { 'natural-chic': 2 } },
        { id: 'q5b', label: '이게 요즘 트렌드에 맞는 디자인인지', effects: { 'trend-setter': 2 } },
        { id: 'q5c', label: '움직이기 편한지, 재질이 부드러운지', effects: { 'comfy-first': 2 } },
        { id: 'q5d', label: '다른 옷이랑 매치했을 때 포인트가 되는지', effects: { 'point-item': 2 } },
      ],
    },
    {
      id: 'q6',
      question: '옷장 정리를 하다가 오래된 옷을 발견하면?',
      choices: [
        { id: 'q6a', label: '유행 지난 거 같아서 바로 정리 대상', effects: { 'trend-setter': 2 } },
        { id: 'q6b', label: '편해서 못 버리고 계속 입는다', effects: { 'comfy-first': 2 } },
        { id: 'q6c', label: '포인트 소품으로 다시 활용할 방법을 찾는다', effects: { 'point-item': 2 } },
        { id: 'q6d', label: '오히려 다시 봐도 안 질리는 디자인이라 계속 입는다', effects: { 'classic-master': 2 } },
      ],
    },
    {
      id: 'q7',
      question: '여행 갈 때 캐리어에 옷을 챙기는 기준은?',
      choices: [
        { id: 'q7a', label: '평소 입던 대로, 힘 안 들어간 옷 위주로', effects: { 'natural-chic': 2 } },
        { id: 'q7b', label: '일단 편하고 활동하기 좋은 옷부터', effects: { 'comfy-first': 2 } },
        { id: 'q7c', label: '옷은 심플하게, 대신 소품을 다양하게', effects: { 'point-item': 2 } },
        { id: 'q7d', label: '어디서든 무난하게 소화되는 기본템 위주로', effects: { 'classic-master': 2 } },
      ],
    },
    {
      id: 'q8',
      question: '옷을 고를 때 가장 신경 쓰이는 부분은?',
      choices: [
        { id: 'q8a', label: '너무 꾸민 티가 나지는 않는지', effects: { 'natural-chic': 2 } },
        { id: 'q8b', label: '남들보다 트렌드에 뒤처지지 않는지', effects: { 'trend-setter': 2 } },
        { id: 'q8c', label: '어떤 포인트 아이템으로 완성할지', effects: { 'point-item': 2 } },
        { id: 'q8d', label: '유행 안 타고 오래 입을 수 있는지', effects: { 'classic-master': 2 } },
      ],
    },
    {
      id: 'q9',
      question: '친구랑 같이 쇼핑하러 가면 나의 모습은?',
      choices: [
        { id: 'q9a', label: '자연스럽게 어울리는 옷 몇 개만 빠르게 고른다', effects: { 'natural-chic': 2 } },
        { id: 'q9b', label: '신상 코너부터 훑으며 눈이 바빠진다', effects: { 'trend-setter': 2 } },
        { id: 'q9c', label: '입어보고 편한 옷 위주로 고른다', effects: { 'comfy-first': 2 } },
        { id: 'q9d', label: '스테디셀러 스타일만 골라서 산다', effects: { 'classic-master': 2 } },
      ],
    },
    {
      id: 'q10',
      question: '오늘 입을 옷에 대한 나만의 원칙이 있다면?',
      choices: [
        { id: 'q10a', label: '꾸안꾸, 자연스러움이 진리다', effects: { 'natural-chic': 2 } },
        { id: 'q10b', label: '오늘 가장 트렌디한 조합을 시도해본다', effects: { 'trend-setter': 2 } },
        { id: 'q10c', label: '편안함이 스타일을 이긴다', effects: { 'comfy-first': 2 } },
        { id: 'q10d', label: '심플한 옷에 포인트 하나면 끝난다', effects: { 'point-item': 2 } },
      ],
    },
    {
      id: 'q11',
      question: '누군가 내 스타일을 한마디로 표현한다면 듣고 싶은 말은?',
      choices: [
        { id: 'q11a', label: '"트렌드에 밝은 사람"', effects: { 'trend-setter': 2 } },
        { id: 'q11b', label: '"편안해 보이는데 잘 어울리는 사람"', effects: { 'comfy-first': 2 } },
        { id: 'q11c', label: '"작은 디테일까지 신경 쓰는 사람"', effects: { 'point-item': 2 } },
        { id: 'q11d', label: '"오래 봐도 질리지 않는 스타일의 사람"', effects: { 'classic-master': 2 } },
      ],
    },
  ],
  results: [
    {
      id: 'natural-chic',
      title: '꾸안꾸 데일리 감성러',
      shortTitle: '꾸안꾸 감성러',
      emoji: '🌿',
      summary: '힘 뺀 듯 힘준 자연스러움이 진짜 무기인 당신',
      description:
        '화려하게 꾸미지 않아도 이상하게 스타일이 좋아 보이는 타입이다. 대충 입은 것 같은데 은근히 조화롭고, 힘을 뺀 조합에서 오히려 감각이 드러난다. 옷보다 자연스러운 분위기 자체로 승부하는 스타일이다. "꾸민 듯 안 꾸민 듯"이 최고의 칭찬으로 느껴지는 사람.',
      strengths: ['꾸미지 않아도 자연스럽게 어울리는 감각', '과하지 않아서 언제 봐도 편안한 인상', '평소 모습 그대로도 스타일이 되는 여유로움'],
      cautions: ['특별한 날에도 늘 비슷한 느낌으로 보일 수 있음', '너무 힘을 빼다 보니 가끔 성의 없어 보일 때가 있음'],
      recommendations: [
        '평소 스타일에 작은 디테일 하나만 더해보기',
        '특별한 날엔 평소보다 살짝 힘을 준 아이템 하나 시도해보기',
        '내가 자주 입는 조합을 사진으로 기록해서 나만의 스타일 찾아보기',
      ],
      shareText: '나는 꾸안꾸 데일리 감성러 🌿 힘 빼도 스타일은 살아있다!',
      color: '#f472b6',
    },
    {
      id: 'trend-setter',
      title: '패션위크 직행 트렌드세터',
      shortTitle: '트렌드세터',
      emoji: '✨',
      summary: '유행이 뜨기 전에 이미 입고 있는 안테나형 스타일러',
      description:
        '새로운 스타일이 뜬다 싶으면 이미 옷장에 걸려있는 타입이다. SNS에서 화제가 된 아이템을 남들보다 먼저 캐치하고 과감하게 시도하는 걸 즐긴다. 유행에 발맞추는 게 아니라 유행을 앞서가는 재미로 옷을 입는다. 스타일에 있어서만큼은 항상 한발 빠르다.',
      strengths: ['빠른 트렌드 캐치력과 과감한 시도', '새로운 조합을 두려워하지 않는 도전 정신', '늘 신선한 인상을 주는 감각'],
      cautions: ['유행이 지나면 금방 손이 안 가는 아이템이 쌓일 수 있음', '트렌드 따라가다 정작 내 취향을 놓칠 때가 있음'],
      recommendations: [
        '유행템 하나를 사면 오래 입을 기본템도 함께 챙겨보기',
        '남들과 다른 나만의 포인트를 트렌드에 살짝 더해보기',
        '한 달에 한 번 정도는 예전 스타일도 다시 꺼내 입어보기',
      ],
      shareText: '나는 패션위크 직행 트렌드세터 ✨ 유행은 내가 먼저 입는다!',
      color: '#db2777',
    },
    {
      id: 'comfy-first',
      title: '편안함이 제일 예쁘다파',
      shortTitle: '편안함 최고파',
      emoji: '☁️',
      summary: '핏보다 편안함, 스타일보다 내 몸이 먼저인 당신',
      description:
        '아무리 예쁜 옷이라도 불편하면 손이 안 가는 타입이다. 하루 종일 입어도 부담 없는 옷을 최우선으로 생각하고, 그 안에서 자연스럽게 나만의 스타일을 만들어간다. 편안함을 포기하지 않으면서도 은근히 자기다운 분위기를 풍긴다. 몸이 편해야 마음도 편하다는 걸 아는 사람.',
      strengths: ['어디서든 편안하게 움직일 수 있는 실용성', '무리하지 않아 오래 유지되는 자기만의 스타일', '몸의 편안함을 우선하는 자기 관리 감각'],
      cautions: ['가끔 격식 있는 자리에서 옷 고르기가 고민될 수 있음', '편한 옷만 찾다 스타일이 비슷해 보일 수 있음'],
      recommendations: [
        '편안하면서도 핏이 살아있는 아이템 하나쯤 찾아두기',
        '중요한 자리를 위한 편안한 세미 정장 조합 미리 준비해두기',
        '소재는 편하게, 색감으로 포인트를 주는 방법 시도해보기',
      ],
      shareText: '나는 편안함이 제일 예쁘다파 ☁️ 핏보다 컨디션이 먼저!',
      color: '#f9a8d4',
    },
    {
      id: 'point-item',
      title: '포인트 하나로 완성하는 감각파',
      shortTitle: '포인트 감각파',
      emoji: '💎',
      summary: '심플한 옷에 작은 디테일 하나로 분위기를 뒤집는 당신',
      description:
        '기본템 위주로 심플하게 입되, 딱 하나의 포인트로 전체 분위기를 확 바꾸는 재주가 있다. 화려하게 꾸미지 않아도 액세서리나 소품 하나로 시선을 사로잡는다. 과유불급을 아는 사람이라 오히려 힘을 뺀 곳에서 힘이 느껴진다. 디테일이 스타일의 완성이라는 걸 아는 타입.',
      strengths: ['작은 디테일로 전체 인상을 바꾸는 센스', '과하지 않으면서도 시선을 끄는 균형 감각', '심플함 속에서 자기만의 포인트를 찾아내는 눈썰미'],
      cautions: ['포인트 아이템이 없으면 밋밋하게 느껴질 때가 있음', '소품 욕심이 과해지면 오히려 산만해질 수 있음'],
      recommendations: [
        '오늘의 포인트 아이템 하나만 정하고 나머진 심플하게 가기',
        '가진 소품을 계절별로 정리해서 로테이션 해보기',
        '포인트를 두 개 이상 겹치지 않도록 균형 잡는 연습해보기',
      ],
      shareText: '나는 포인트 하나로 완성하는 감각파 💎 디테일이 다 말해준다!',
      color: '#be185d',
    },
    {
      id: 'classic-master',
      title: '시대를 초월한 클래식 고수',
      shortTitle: '클래식 고수',
      emoji: '🎩',
      summary: '유행이 와도 가도 흔들리지 않는 단단한 스타일의 소유자',
      description:
        '화려한 유행보다 시간이 지나도 질리지 않는 스타일을 선택하는 타입이다. 베이직하고 정갈한 조합만으로도 어디서든 무난하고 신뢰감 있는 인상을 준다. 새로운 게 좋아 보여도 결국 검증된 나만의 스타일로 돌아온다. 유행을 좇지 않아도 늘 정돈된 분위기를 유지하는 사람.',
      strengths: ['시간이 지나도 변하지 않는 안정적인 스타일', '어떤 자리에서도 무난하게 소화하는 신뢰감', '오래 입어도 질리지 않는 실용적인 선택 감각'],
      cautions: ['가끔 스타일이 너무 무난해서 밋밋해 보일 수 있음', '새로운 시도를 망설이다 기회를 놓칠 때가 있음'],
      recommendations: [
        '기본템에 어울리는 작은 트렌드 아이템 하나 더해보기',
        '색상 조합만 살짝 바꿔서 분위기 전환해보기',
        '가끔은 평소와 다른 스타일에 과감하게 도전해보기',
      ],
      shareText: '나는 시대를 초월한 클래식 고수 🎩 유행 타지 않는 게 진짜 스타일!',
      color: '#9d174d',
    },
  ],
}
