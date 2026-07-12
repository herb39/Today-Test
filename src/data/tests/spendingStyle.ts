import type { TestDefinition } from '../../types/test'

export const spendingStyleTest: TestDefinition = {
  slug: 'spending-style',
  title: '나의 소비 스타일 테스트',
  shortTitle: '소비 스타일',
  description: '나는 어떤 방식으로 돈을 쓰는 사람일까?',
  intro:
    '무심코 카드를 긁고 나서야 "내가 왜 샀지?" 싶었던 적 있나요? 아니면 사고 싶은 걸 이미 다 정해놓고 예산까지 짜뒀나요? 돈을 쓰는 방식에는 저마다의 습관과 취향이 담겨 있어요. 11개의 질문으로 쇼핑, 외식, 취미 생활 속에서 드러나는 나의 소비 스타일을 가볍게 확인해보세요.',
  category: '라이프스타일',
  emoji: '💳',
  estimatedMinutes: 3,
  theme: { color: '#10b981', gradientFrom: '#34d399', gradientTo: '#059669' },
  isPublished: true,
  isNew: true,
  relatedTestSlugs: ['travel-style', 'sns-character'],
  seo: {
    title: '나의 소비 스타일 테스트 | 오늘의 테스트',
    description: '플렉스 소비형, 알뜰살뜰 계획형, 취향 저격 몰입형, 즉흥 소비형, 짠테크 마스터형까지. 11가지 질문으로 나의 일상 소비 습관과 스타일을 알아보세요.',
    faq: [
      {
        question: '내 소비 습관을 어떻게 확인할 수 있나요?',
        answer:
          '쇼핑, 외식, 세일, 구독 서비스 등 일상 속 여러 소비 상황에서 어떤 선택을 하는지를 통해 확인할 수 있어요. 11개의 질문에 답하는 것만으로 플렉스 소비형부터 짠테크 마스터형까지 나의 소비 스타일을 가볍게 짚어봐요.',
      },
      {
        question: '테스트는 얼마나 걸리나요?',
        answer: '11개 질문으로 구성되어 있고 평균 3분이면 끝낼 수 있어요. 잠깐 쉬는 시간에 부담 없이 확인해보기 좋아요.',
      },
      {
        question: '결과가 정확한 진단인가요?',
        answer:
          '아니에요. 이 테스트는 재미와 자기 이해를 위한 콘텐츠이며, 실제 소비나 지출 관리를 위한 전문적인 진단은 아니에요. 가벼운 자가 점검 정도로 즐겨주세요.',
      },
    ],
  },
  questions: [
    { id: 'q1', question: '주말에 갑자기 생긴 여윳돈, 나라면?', choices: [
      { id: 'q1a', label: '일단 저축 계좌에 넣어두고 나중에 필요할 때 써요', effects: { 'thrifty-planner': 2 } },
      { id: 'q1b', label: '평소 눈여겨보던 취향템 하나를 사요', effects: { 'taste-hunter': 2 } },
      { id: 'q1c', label: '딱히 계획 없이 그날 기분 따라 써버려요', effects: { 'impulse-buyer': 2, 'flex-spender': 1 } },
      { id: 'q1d', label: '가계부에 적어두고 언제 쓸지부터 고민해요', effects: { 'penny-pincher': 2 } },
    ]},
    { id: 'q2', question: '친구들과 저녁 약속, 메뉴 고를 때 나는?', choices: [
      { id: 'q2a', label: '가격 신경 안 쓰고 먹고 싶은 걸 시원하게 시켜요', effects: { 'flex-spender': 2 } },
      { id: 'q2b', label: '이 집만의 시그니처 메뉴를 꼭 챙겨 먹어요', effects: { 'taste-hunter': 2 } },
      { id: 'q2c', label: '메뉴판 보다가 즉흥적으로 끌리는 걸 골라요', effects: { 'impulse-buyer': 2 } },
      { id: 'q2d', label: '가성비 좋은 메뉴 위주로 알뜰하게 골라요', effects: { 'penny-pincher': 2, 'thrifty-planner': 1 } },
    ]},
    { id: 'q3', question: '세일 소식을 보면 나는?', choices: [
      { id: 'q3a', label: '세일이든 아니든 사고 싶으면 그냥 사요', effects: { 'flex-spender': 2, 'taste-hunter': 1 } },
      { id: 'q3b', label: '미리 찜해둔 목록에서 세일하는 것만 골라 사요', effects: { 'thrifty-planner': 2 } },
      { id: 'q3c', label: '세일 문구만 보고 바로 장바구니에 담아요', effects: { 'impulse-buyer': 2 } },
      { id: 'q3d', label: '세일 기간까지 기다렸다가 최저가를 확인하고 사요', effects: { 'penny-pincher': 2 } },
    ]},
    { id: 'q4', question: '매달 나가는 구독료를 보면?', choices: [
      { id: 'q4a', label: '좋아하는 건 아낌없이 구독해요, 그게 제 낙이에요', effects: { 'flex-spender': 2, 'impulse-buyer': 1 } },
      { id: 'q4b', label: '정말 필요한 것만 남기고 나머지는 정리해요', effects: { 'thrifty-planner': 2 } },
      { id: 'q4c', label: '내 취향에 딱 맞는 서비스 하나만 진득하게 이용해요', effects: { 'taste-hunter': 2 } },
      { id: 'q4d', label: '중복되는 구독은 없는지 꼼꼼히 따져봐요', effects: { 'penny-pincher': 2 } },
    ]},
    { id: 'q5', question: '새로운 취미가 생겼을 때 나는?', choices: [
      { id: 'q5a', label: '필요한 장비를 한 번에 풀세트로 질러요', effects: { 'flex-spender': 2 } },
      { id: 'q5b', label: '우선 저렴한 것부터 시작해서 필요하면 늘려가요', effects: { 'thrifty-planner': 2, 'penny-pincher': 1 } },
      { id: 'q5c', label: '내 취향에 맞는 감성까지 꼼꼼히 골라요', effects: { 'taste-hunter': 2 } },
      { id: 'q5d', label: '일단 마음에 드는 거 하나 사고 시작해요', effects: { 'impulse-buyer': 2 } },
    ]},
    { id: 'q6', question: '여행 갈 때 나의 지출 스타일은?', choices: [
      { id: 'q6a', label: '예산을 미리 정해두고 그 안에서만 써요', effects: { 'thrifty-planner': 2 } },
      { id: 'q6b', label: '그 지역에서만 즐길 수 있는 특별한 경험에 아낌없이 써요', effects: { 'taste-hunter': 2, 'flex-spender': 1 } },
      { id: 'q6c', label: '계획 없이 발길 닿는 대로 쓰다 보면 어느새 다 써요', effects: { 'impulse-buyer': 2 } },
      { id: 'q6d', label: '숙소든 뭐든 최대한 저렴하게 아껴서 다녀요', effects: { 'penny-pincher': 2 } },
    ]},
    { id: 'q7', question: '소중한 사람 생일 선물을 고를 때?', choices: [
      { id: 'q7a', label: '가격표는 안 보고 마음에 드는 걸로 골라요', effects: { 'flex-spender': 2 } },
      { id: 'q7b', label: '그 사람 취향을 저격할 특별한 걸 오래 찾아요', effects: { 'taste-hunter': 2 } },
      { id: 'q7c', label: '매장을 돌다가 눈에 딱 들어오는 걸 바로 사요', effects: { 'impulse-buyer': 2 } },
      { id: 'q7d', label: '실용적이면서도 가격이 합리적인 걸 골라요', effects: { 'penny-pincher': 2, 'thrifty-planner': 1 } },
    ]},
    { id: 'q8', question: '장바구니에 오래 담아둔 물건, 결국?', choices: [
      { id: 'q8a', label: '고민할 것도 없이 바로 결제해요', effects: { 'flex-spender': 2, 'taste-hunter': 1 } },
      { id: 'q8b', label: '정말 필요한지 며칠 더 고민한 후에 결정해요', effects: { 'thrifty-planner': 2 } },
      { id: 'q8c', label: '어느 날 갑자기 충동적으로 결제 버튼을 눌러요', effects: { 'impulse-buyer': 2 } },
      { id: 'q8d', label: '할인 쿠폰이 뜰 때까지 꾹 참고 기다려요', effects: { 'penny-pincher': 2 } },
    ]},
    { id: 'q9', question: '카페에서 음료를 고를 때 나는?', choices: [
      { id: 'q9a', label: '제일 특별한 시그니처 메뉴를 골라요', effects: { 'flex-spender': 2 } },
      { id: 'q9b', label: '적립이나 할인되는 메뉴 위주로 골라요', effects: { 'thrifty-planner': 2 } },
      { id: 'q9c', label: '나만 아는 숨은 카페를 찾아다니는 걸 즐겨요', effects: { 'taste-hunter': 2, 'impulse-buyer': 1 } },
      { id: 'q9d', label: '집에서 마실 수 있는데 굳이 사야 하나 고민해요', effects: { 'penny-pincher': 2 } },
    ]},
    { id: 'q10', question: '안 쓰는 물건이 생기면 나는?', choices: [
      { id: 'q10a', label: '그냥 두거나 필요한 사람에게 줘버려요, 되파는 건 귀찮아요', effects: { 'flex-spender': 2 } },
      { id: 'q10b', label: '중고로 팔아서 그 돈으로 필요한 걸 다시 사요', effects: { 'thrifty-planner': 2, 'penny-pincher': 1 } },
      { id: 'q10c', label: '비슷한 취향을 가진 사람을 찾아 제값 받고 넘겨요', effects: { 'taste-hunter': 2 } },
      { id: 'q10d', label: '정리한다고 팔았다가 결국 비슷한 걸 또 사요', effects: { 'impulse-buyer': 2 } },
    ]},
    { id: 'q11', question: '월급날, 통장에 돈이 들어오면 가장 먼저?', choices: [
      { id: 'q11a', label: '이번 달 예산부터 다시 짜봐요', effects: { 'thrifty-planner': 2 } },
      { id: 'q11b', label: '평소 갖고 싶던 걸 살 생각에 설레요', effects: { 'taste-hunter': 2, 'flex-spender': 1 } },
      { id: 'q11c', label: '일단 뭐라도 사야 할 것 같은 기분이 들어요', effects: { 'impulse-buyer': 2 } },
      { id: 'q11d', label: '얼마를 모을 수 있을지부터 계산해봐요', effects: { 'penny-pincher': 2 } },
    ]},
  ],
  results: [
    {
      id: 'flex-spender',
      title: '플렉스 소비형',
      shortTitle: '플렉스형',
      emoji: '💸',
      summary: '쓸 땐 화끈하게, 계산은 나중에 하는 당신',
      description:
        '가격표를 보기 전에 마음이 먼저 움직이는 편이에요. 좋아하는 걸 살 때는 망설임 없이 지갑을 열고, 그 순간의 만족감을 가장 중요하게 생각해요.',
      strengths: ['하고 싶은 걸 참지 않고 지금의 행복에 아낌없이 써요', '주변 사람들에게도 통 크게 베푸는 편이에요'],
      cautions: ['월말이 되면 카드값에 깜짝 놀랄 때가 많아요', '큰 지출 뒤에 작은 후회가 뒤따르기도 해요'],
      recommendations: ['정말 갖고 싶은 것 하나만 딱 고르고 나머지는 미뤄보세요', '한 달에 한 번은 지출 내역을 가볍게 훑어보는 습관을 만들어보세요'],
      shareText: '나는 쓸 때 화끈하게 쓰는 플렉스 소비형!',
      color: '#065f46',
    },
    {
      id: 'thrifty-planner',
      title: '알뜰살뜰 계획형',
      shortTitle: '계획형',
      emoji: '📝',
      summary: '쓰기 전에 이미 계산부터 끝내놓는 당신',
      description:
        '무언가를 사기 전에 정말 필요한지, 예산 안에서 가능한지부터 따져보는 편이에요. 계획에 없던 지출은 좀처럼 하지 않아요.',
      strengths: ['예산 관리 능력이 뛰어나 지출을 안정적으로 조절해요', '충동적인 소비로 후회하는 일이 거의 없어요'],
      cautions: ['계획에 없던 즐거움을 놓칠 때가 있어요', '너무 신중하다 보면 좋은 타이밍을 놓치기도 해요'],
      recommendations: ['한 달에 한 번은 계획 없이 써도 되는 작은 예산을 정해보세요'],
      shareText: '나는 쓰기 전에 계산부터 끝내는 알뜰살뜰 계획형!',
      color: '#0f766e',
    },
    {
      id: 'taste-hunter',
      title: '취향 저격 몰입형',
      shortTitle: '취향몰입형',
      emoji: '🎨',
      summary: '남들 기준보다 내 취향이 우선인 당신',
      description:
        '가격보다 얼마나 내 취향에 맞는지가 더 중요해요. 마음에 드는 걸 발견하면 시간과 정성을 들여서라도 손에 넣는 편이에요.',
      strengths: ['자신만의 확고한 취향을 갖고 있어요', '좋아하는 분야에서는 남다른 안목을 자랑해요'],
      cautions: ['취향템 앞에서는 지출 규모를 잊기 쉬워요', '비슷한 취향의 물건이 쌓이기도 해요'],
      recommendations: ['정말 오래 곁에 둘 것인지 한 번 더 생각해보는 시간을 가져보세요'],
      shareText: '나는 취향 앞에서는 진심인 취향 저격 몰입형!',
      color: '#15803d',
    },
    {
      id: 'impulse-buyer',
      title: '즉흥 소비형',
      shortTitle: '즉흥형',
      emoji: '⚡',
      summary: '고민은 짧게, 결제는 빠르게 하는 당신',
      description:
        '그 순간의 기분과 분위기에 따라 지출이 달라져요. 계획보다는 즉흥적인 끌림을 따르는 편이라, 예상치 못한 곳에서 지갑을 여는 일이 많아요.',
      strengths: ['순간의 행복을 놓치지 않고 즉각적으로 즐길 줄 알아요', '결정이 빨라서 망설이는 시간이 적어요'],
      cautions: ['지출 내역을 나중에 보면 스스로도 놀랄 때가 있어요', '비슷한 물건을 중복으로 사기도 해요'],
      recommendations: ['장바구니에 담고 하루만 묵혀두는 습관을 들여보세요'],
      shareText: '나는 마음이 끌리면 바로 지르는 즉흥 소비형!',
      color: '#4d7c0f',
    },
    {
      id: 'penny-pincher',
      title: '짠테크 마스터형',
      shortTitle: '짠테크형',
      emoji: '🐢',
      summary: '한 푼이라도 아끼는 게 몸에 밴 당신',
      description:
        '지출 앞에서 늘 신중하고, 조금이라도 아낄 방법을 찾는 편이에요. 할인, 적립, 쿠폰까지 꼼꼼히 챙기는 알뜰함이 몸에 배어 있어요.',
      strengths: ['작은 지출까지 꼼꼼히 관리하는 습관이 있어요', '할인이나 혜택을 알뜰하게 잘 챙겨요'],
      cautions: ['가끔은 아끼는 데 너무 몰두해 정작 원하는 걸 놓치기도 해요', '지나치게 재는 동안 좋은 타이밍을 놓칠 수 있어요'],
      recommendations: ['가끔은 계산 없이 나를 위한 작은 사치를 허락해보세요'],
      shareText: '나는 한 푼도 허투루 안 쓰는 짠테크 마스터형!',
      color: '#047857',
    },
  ],
}
