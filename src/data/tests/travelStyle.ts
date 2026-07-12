import type { TestDefinition } from '../../types/test'

export const travelStyleTest: TestDefinition = {
  slug: 'travel-style',
  title: '나의 여행 스타일 테스트',
  shortTitle: '여행 스타일',
  description: '계획형? 즉흥형? 나의 진짜 여행 취향을 찾아보세요.',
  intro:
    '여행 스타일은 사람마다 다 달라요. 누군가는 계획표 없이 떠나는 것 자체가 설레고, 누군가는 완벽한 동선을 짜야 마음이 놓이죠. 11개의 질문을 통해 내가 어떤 순간에 가장 설레는지, 여행에서 진짜 원하는 게 무엇인지 확인해보세요. 다음 여행을 계획할 때 훨씬 더 나다운 여행을 만들 수 있을 거예요.',
  category: '라이프스타일',
  emoji: '✈️',
  estimatedMinutes: 3,
  theme: { color: '#06b6d4', gradientFrom: '#22d3ee', gradientTo: '#0e7490' },
  isPublished: true,
  isNew: true,
  relatedTestSlugs: ['sns-character', 'insa-type'],
  seo: {
    title: '나의 여행 스타일 테스트 | 오늘의 테스트',
    description: '즉흥 여행형, 계획 마스터형, 맛집 탐방형, 힐링 휴양형, 액티비티 도전형. 11가지 질문으로 나의 진짜 여행 스타일을 알아보세요.',
    faq: [
      {
        question: '나에게 맞는 여행 스타일은 어떻게 알 수 있나요?',
        answer:
          '가방을 싸는 방식, 예산을 쓰는 우선순위, 일정이 틀어졌을 때의 반응 같은 여행 속 다양한 순간을 통해 확인할 수 있어요. 11개의 질문으로 즉흥 여행형부터 액티비티 도전형까지 나의 진짜 여행 취향을 짚어봐요.',
      },
      {
        question: '테스트는 얼마나 걸리나요?',
        answer: '11개 질문으로 구성되어 있어 평균 3분이면 충분히 끝낼 수 있어요. 다음 여행을 계획하기 전에 가볍게 확인해보기 좋아요.',
      },
      {
        question: '결과가 여행지마다 다르게 나올 수 있나요?',
        answer:
          '네, 그럴 수 있어요. 동행이나 여행지, 그날의 컨디션에 따라 선호가 달라지면 결과도 달라질 수 있어요. 이 테스트는 재미로 보는 가벼운 콘텐츠이니 참고 삼아 즐겨주세요.',
      },
    ],
  },
  questions: [
    { id: 'q1', question: '여행 하면 가장 먼저 떠오르는 설렘은?', choices: [
      { id: 'q1a', label: '어디로 갈지 정하지 않고 무작정 공항부터 가는 상상이에요', effects: { impulsive: 2 } },
      { id: 'q1b', label: '촘촘한 일정표를 짜면서 벌써 다 다녀온 기분이 들어요', effects: { planner: 2 } },
      { id: 'q1c', label: '그 지역에서만 먹을 수 있는 음식 생각에 군침이 돌아요', effects: { foodie: 2, activity: 1 } },
      { id: 'q1d', label: '아무것도 안 하고 늘어져 있을 생각에 벌써 마음이 편해져요', effects: { healing: 2 } },
    ]},
    { id: 'q2', question: '여행 가방을 쌀 때 나는?', choices: [
      { id: 'q2a', label: '대충 옷 몇 벌 던져 넣고 나머지는 가서 해결해요', effects: { impulsive: 2 } },
      { id: 'q2b', label: '필요한 것부터 여벌까지 리스트 체크하며 완벽하게 싸요', effects: { planner: 2, healing: 1 } },
      { id: 'q2c', label: '그 지역 맛집에서 예쁘게 찍을 옷부터 챙겨요', effects: { foodie: 2 } },
      { id: 'q2d', label: '운동화와 편한 옷 위주로 챙겨요, 몸이 편해야 하니까요', effects: { activity: 2 } },
    ]},
    { id: 'q3', question: '여행지에서 첫날 일정이 꼬이면?', choices: [
      { id: 'q3a', label: '오히려 더 재밌겠다며 즉흥적으로 다시 짜요', effects: { impulsive: 2 } },
      { id: 'q3b', label: '미리 짜둔 대안 일정으로 바로 전환해요', effects: { planner: 2 } },
      { id: 'q3c', label: '그냥 오늘은 쉬는 날로 정하고 숙소에서 여유를 즐겨요', effects: { healing: 2 } },
      { id: 'q3d', label: '몸을 움직이는 다른 활동으로 바로 채워요', effects: { activity: 2, foodie: 1 } },
    ]},
    { id: 'q4', question: '여행 예산을 짤 때 가장 아끼지 않는 부분은?', choices: [
      { id: 'q4a', label: '예산이라기보다 그때그때 끌리는 데 다 써요', effects: { impulsive: 2, planner: 1 } },
      { id: 'q4b', label: '먹는 데는 아낌없이 써야 여행 온 보람이 있어요', effects: { foodie: 2 } },
      { id: 'q4c', label: '편하게 쉴 수 있는 숙소에는 돈을 아끼지 않아요', effects: { healing: 2 } },
      { id: 'q4d', label: '특별한 체험이나 액티비티에는 과감히 투자해요', effects: { activity: 2 } },
    ]},
    { id: 'q5', question: '여행 중 SNS에 가장 많이 올리는 사진은?', choices: [
      { id: 'q5a', label: '완벽하게 짜인 동선과 인증샷들이에요', effects: { planner: 2 } },
      { id: 'q5b', label: '눈앞에 놓인 음식 사진이 대부분이에요', effects: { foodie: 2 } },
      { id: 'q5c', label: '멍하니 풍경을 바라보는 여유로운 순간이에요', effects: { healing: 2, impulsive: 1 } },
      { id: 'q5d', label: '액티비티하며 땀 흘리는 역동적인 순간이에요', effects: { activity: 2 } },
    ]},
    { id: 'q6', question: '여행지에서 길을 잃으면?', choices: [
      { id: 'q6a', label: '오히려 신나서 발길 닿는 대로 걸어봐요', effects: { impulsive: 2, activity: 1 } },
      { id: 'q6b', label: '지도 앱을 꺼내 바로 최적 경로를 다시 찾아요', effects: { planner: 2 } },
      { id: 'q6c', label: '근처에 괜찮은 식당 없나부터 찾아봐요', effects: { foodie: 2 } },
      { id: 'q6d', label: '서두르지 않고 근처 벤치에 앉아 쉬었다 가요', effects: { healing: 2 } },
    ]},
    { id: 'q7', question: '여행 동행에게 가장 바라는 점은?', choices: [
      { id: 'q7a', label: '계획 없이도 즉흥적으로 잘 맞춰주는 사람', effects: { impulsive: 2 } },
      { id: 'q7b', label: '시간 약속을 잘 지키고 일정에 협조적인 사람', effects: { planner: 2 } },
      { id: 'q7c', label: '같이 맛있는 걸 찾아 먹으러 다닐 사람', effects: { foodie: 2, healing: 1 } },
      { id: 'q7d', label: '체력 좋고 새로운 걸 같이 도전할 사람', effects: { activity: 2 } },
    ]},
    { id: 'q8', question: '여행에서 가장 기억에 남는 순간은?', choices: [
      { id: 'q8a', label: '계획에 없던 우연한 만남이나 발견', effects: { impulsive: 2 } },
      { id: 'q8b', label: '오랫동안 준비한 일정이 완벽하게 맞아떨어진 순간', effects: { planner: 2, foodie: 1 } },
      { id: 'q8c', label: '아무 생각 없이 멍때리며 쉬었던 시간', effects: { healing: 2 } },
      { id: 'q8d', label: '새로운 도전에 성공했던 짜릿한 순간', effects: { activity: 2 } },
    ]},
    { id: 'q9', question: '여행 마지막 날, 남은 시간이 애매하게 생기면?', choices: [
      { id: 'q9a', label: '발길 닿는 대로 즉흥적으로 돌아다녀요', effects: { impulsive: 2 } },
      { id: 'q9b', label: '못 먹어본 메뉴 하나 더 먹으러 가요', effects: { foodie: 2 } },
      { id: 'q9c', label: '남은 시간은 숙소에서 여유롭게 정리하며 보내요', effects: { healing: 2 } },
      { id: 'q9d', label: '미리 봐둔 액티비티 하나를 더 해치워요', effects: { activity: 2, planner: 1 } },
    ]},
    { id: 'q10', question: '여행 스타일이 다른 친구와 함께라면?', choices: [
      { id: 'q10a', label: '내가 짠 일정에 맞춰주길 은근히 바라요', effects: { planner: 2 } },
      { id: 'q10b', label: '결국 맛있는 거 먹으러 가자는 말로 설득해요', effects: { foodie: 2, impulsive: 1 } },
      { id: 'q10c', label: '무리하지 말고 각자 쉬는 시간을 갖자고 제안해요', effects: { healing: 2 } },
      { id: 'q10d', label: '같이 몸을 움직이는 걸 해보자고 이끌어요', effects: { activity: 2 } },
    ]},
    { id: 'q11', question: '여행에서 돌아온 직후 드는 생각은?', choices: [
      { id: 'q11a', label: '벌써 다음엔 또 어디로 즉흥적으로 떠날지 생각해요', effects: { impulsive: 2 } },
      { id: 'q11b', label: '이번 여행에서 아쉬웠던 동선을 다음엔 어떻게 고칠지 정리해요', effects: { planner: 2 } },
      { id: 'q11c', label: '거기서 먹은 그 음식이 계속 생각나요', effects: { foodie: 2 } },
      { id: 'q11d', label: '몸은 피곤해도 마음만은 충전된 느낌이에요', effects: { healing: 2, activity: 1 } },
    ]},
  ],
  results: [
    {
      id: 'impulsive',
      title: '즉흥 여행형',
      shortTitle: '즉흥 여행형',
      emoji: '🎢',
      summary: '계획표보다 그 순간의 끌림을 따라가는 당신의 여행',
      description:
        '당신에게 여행은 정해진 답을 찾아가는 여정이 아니라 그때그때 마음이 이끄는 대로 움직이는 모험이에요. 일정표에 얽매이기보다 눈앞에 보이는 골목 하나, 낯선 냄새 하나에 발걸음을 돌리는 게 더 즐겁죠. 예상 밖의 상황도 여행의 일부로 즐길 줄 아는 사람이에요.',
      strengths: ['예상 밖의 상황에서도 유연하게 대처해요', '낯선 곳에서도 금방 그 순간을 즐길 줄 알아요'],
      cautions: ['가끔은 정말 중요한 예약을 놓칠 수 있어요', '동행이 있다면 일정 조율에서 부딪힐 수 있어요'],
      recommendations: ['숙소나 교통 같은 핵심 예약 하나만은 미리 잡아두세요', '즉흥적인 매력을 살리되 최소한의 안전판은 마련해두세요'],
      shareText: '나는 발길 닿는 대로 떠나는 즉흥 여행형이에요!',
      color: '#22d3ee',
    },
    {
      id: 'planner',
      title: '계획 마스터형',
      shortTitle: '계획 마스터형',
      emoji: '📋',
      summary: '완벽한 동선이 곧 완벽한 여행이라 믿는 당신',
      description:
        '당신에게 여행은 떠나기 전부터 이미 시작돼요. 동선을 짜고, 시간을 배분하고, 만약을 대비한 대안까지 준비해야 마음이 놓이죠. 그렇게 짠 일정이 딱딱 들어맞을 때 느끼는 뿌듯함이 여행의 가장 큰 재미예요.',
      strengths: ['시간과 동선을 알차게 활용해요', '돌발 상황에도 대안을 미리 준비해둬요'],
      cautions: ['계획대로 안 풀리면 스트레스를 크게 받을 수 있어요', '즉흥적인 재미를 놓칠 때가 있어요'],
      recommendations: ['일정 사이 여유 시간을 일부러 비워두세요', '하루 정도는 계획 없이 움직여보는 것도 좋아요'],
      shareText: '나는 동선까지 완벽한 계획 마스터형이에요!',
      color: '#0891b2',
    },
    {
      id: 'foodie',
      title: '맛집 탐방형',
      shortTitle: '맛집 탐방형',
      emoji: '🍜',
      summary: '여행의 8할은 먹는 재미로 완성된다고 믿는 당신',
      description:
        '당신에게 여행지를 기억하는 방법은 그곳에서 먹은 한 끼예요. 유명한 관광지보다 현지인이 많이 가는 식당 하나가 더 궁금하고, 새로운 메뉴 앞에서는 늘 마음이 설레죠. 먹는 즐거움이 여행 전체를 채우는 사람이에요.',
      strengths: ['새로운 음식에 대한 호기심과 도전 정신이 있어요', '현지의 맛과 문화를 깊이 있게 경험해요'],
      cautions: ['식사 시간에 맞추다 다른 일정이 밀릴 수 있어요', '먹는 데만 예산을 쏟아 다른 계획이 빠듯해질 수 있어요'],
      recommendations: ['꼭 먹고 싶은 곳 한두 곳만 정해두고 나머진 즉흥으로 두세요', '식사 예산과 나머지 예산을 미리 나눠보세요'],
      shareText: '나는 먹는 즐거움으로 여행을 완성하는 맛집 탐방형이에요!',
      color: '#0e7490',
    },
    {
      id: 'healing',
      title: '힐링 휴양형',
      shortTitle: '힐링 휴양형',
      emoji: '🌴',
      summary: '바쁜 일상에서 벗어나 멈춰있는 시간 자체가 목적인 당신',
      description:
        '당신에게 여행은 무언가를 보고 성취하는 시간이 아니라 온전히 멈춰서 쉬는 시간이에요. 바쁘게 돌아다니기보다 편안한 공간에서 여유를 느끼는 게 훨씬 소중하죠. 아무것도 하지 않아도 괜찮은 시간이 진짜 휴가라고 생각해요.',
      strengths: ['진짜 휴식이 무엇인지 잘 알고 있어요', '무리하지 않고 자신의 컨디션을 잘 챙겨요'],
      cautions: ['너무 쉬기만 하다 여행지를 제대로 못 볼 수 있어요', '동행이 활동적인 사람이면 속도가 안 맞을 수 있어요'],
      recommendations: ['하루 한 가지 정도는 가벼운 외출 계획을 넣어보세요', '쉬는 것도 좋지만 짧은 산책 정도는 곁들여보세요'],
      shareText: '나는 멈춰있는 시간이 진짜 여행인 힐링 휴양형이에요!',
      color: '#67e8f9',
    },
    {
      id: 'activity',
      title: '액티비티 도전형',
      shortTitle: '액티비티 도전형',
      emoji: '🏄',
      summary: '몸으로 부딪히며 기억에 남는 여행을 만드는 당신',
      description:
        '당신에게 여행은 새로운 것에 도전하는 시간이에요. 가만히 앉아 풍경만 보는 것보다 직접 몸을 움직이고 부딪혀보며 느끼는 짜릿함이 훨씬 크죠. 여행이 끝나고도 그때의 도전이 오래도록 기억에 남는 사람이에요.',
      strengths: ['새로운 도전 앞에서 망설이지 않아요', '체력과 에너지로 여행을 알차게 채워요'],
      cautions: ['체력 소모가 커서 여행 후 피로가 오래갈 수 있어요', '느긋하게 쉬고 싶은 동행과는 속도가 안 맞을 수 있어요'],
      recommendations: ['일정 사이사이 짧은 휴식 시간을 꼭 넣어두세요', '체력 안배를 위해 강도 높은 활동은 하루 이틀에 몰아보세요'],
      shareText: '나는 몸으로 부딪히며 완성하는 액티비티 도전형이에요!',
      color: '#155e75',
    },
  ],
}
