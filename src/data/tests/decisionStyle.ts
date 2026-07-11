import type { TestDefinition } from '../../types/test'

export const decisionStyleTest: TestDefinition = {
  slug: 'decision-style',
  title: '나의 결정 스타일 테스트',
  shortTitle: '결정 스타일',
  description: '메뉴 하나 고르는 데도 사람마다 방식이 다르다, 나는 어떤 쪽?',
  intro:
    '누군가는 3초 만에 정하고, 누군가는 검색창을 20개쯤 열어놓고서야 겨우 하나를 고른다. 결정을 내리는 방식에는 정답이 없다, 그냥 스타일이 다를 뿐이다. 11개의 질문으로 나는 빠르게 정하는 편인지, 끝까지 재보는 편인지, 주변에 물어보고 정하는 편인지, 아니면 고민 자체를 즐기는 편인지 확인해보자. 정답도 우열도 없으니, 밈 보듯 가볍게 즐기면서 내 성향을 구경해보자.',
  category: '성격',
  emoji: '🤔',
  estimatedMinutes: 3,
  theme: { color: '#f43f5e', gradientFrom: '#fb7185', gradientTo: '#be123c' },
  isPublished: true,
  isNew: true,
  relatedTestSlugs: ['conflict-style', 'burnout'],
  seo: {
    title: '나의 결정 스타일 테스트 | 오늘의 테스트',
    description:
      '즉흥 결단형, 신중 비교형, 조언 의존형, 고민 즐기는형. 11가지 질문으로 나는 결정을 어떻게 내리는 사람인지 정확히 알아보세요.',
  },
  questions: [
    {
      id: 'q1',
      question: '점심 메뉴를 고를 때 나는?',
      choices: [
        { id: 'q1a', label: '가게 앞에 서자마자 바로 정한다, 고민할 시간에 먹는 게 낫다', effects: { 'snap-decider': 2 } },
        { id: 'q1b', label: '리뷰와 별점을 다 훑어보고 그중 최선을 고른다', effects: { 'careful-comparer': 2 } },
        { id: 'q1c', label: '같이 있는 사람한테 뭐 먹고 싶은지부터 물어본다', effects: { 'advice-seeker': 2 } },
        { id: 'q1d', label: '메뉴판 보는 그 시간이 제일 즐겁다, 오래 걸려도 상관없다', effects: { 'joyful-ponderer': 2 } },
      ],
    },
    {
      id: 'q2',
      question: '옷을 살 때 나는?',
      choices: [
        { id: 'q2a', label: '입어보고 딱 좋으면 그 자리에서 바로 결제한다', effects: { 'snap-decider': 2 } },
        { id: 'q2b', label: '비슷한 옷을 여러 사이트에서 다 비교하고 나서 산다', effects: { 'careful-comparer': 2 } },
        { id: 'q2c', label: '친구나 가족한테 사진 찍어 보내고 어울리는지 물어본다', effects: { 'advice-seeker': 2 } },
        { id: 'q2d', label: '장바구니에 몇 주째 담아두고 구경하는 게 취미다', effects: { 'joyful-ponderer': 2 } },
      ],
    },
    {
      id: 'q3',
      question: '여행지를 정할 때 나는?',
      choices: [
        { id: 'q3a', label: '끌리는 사진 한 장 보고 바로 티켓을 끊는다', effects: { 'snap-decider': 2 } },
        { id: 'q3b', label: '항공권, 숙소, 날씨까지 엑셀로 정리해서 비교한다', effects: { 'careful-comparer': 2 } },
        { id: 'q3c', label: '여행 좀 다녀본 지인한테 어디가 좋은지 물어본다', effects: { 'advice-seeker': 2 } },
        { id: 'q3d', label: '가는 곳보다 정하는 과정 자체가 여행의 절반이다', effects: { 'joyful-ponderer': 2 } },
      ],
    },
    {
      id: 'q4',
      question: '넷플릭스에서 뭘 볼지 고를 때?',
      choices: [
        { id: 'q4a', label: '썸네일 딱 보고 첫 화면에서 3초 안에 누른다', effects: { 'snap-decider': 2 } },
        { id: 'q4b', label: '평점과 줄거리, 러닝타임까지 다 확인하고 재생한다', effects: { 'careful-comparer': 2 } },
        { id: 'q4c', label: '단톡방에 뭐 볼 만한 거 없냐고 물어본다', effects: { 'advice-seeker': 2 } },
        { id: 'q4d', label: '결국 못 정하고 목록만 스크롤하다 잠든다', effects: { 'joyful-ponderer': 2 } },
      ],
    },
    {
      id: 'q5',
      question: '친구와 약속 장소를 정할 때?',
      choices: [
        { id: 'q5a', label: '내가 먼저 한 곳을 툭 던지고 거기서 만나자고 한다', effects: { 'snap-decider': 2 } },
        { id: 'q5b', label: '위치, 주차, 웨이팅까지 따져서 최적의 장소를 찾는다', effects: { 'careful-comparer': 2 } },
        { id: 'q5c', label: '어디가 좋을지 물어보고 상대 의견을 따르는 편이다', effects: { 'advice-seeker': 2 } },
        { id: 'q5d', label: '이 얘기 저 얘기 하다 보면 장소는 늘 늦게 정해진다', effects: { 'joyful-ponderer': 2 } },
      ],
    },
    {
      id: 'q6',
      question: '큰 맘 먹고 가전제품을 살 때?',
      choices: [
        { id: 'q6a', label: '매장에서 직원 설명 듣고 그날 바로 산다', effects: { 'snap-decider': 2 } },
        { id: 'q6b', label: '스펙표를 열어놓고 몇 주에 걸쳐 꼼꼼히 비교한다', effects: { 'careful-comparer': 2 } },
        { id: 'q6c', label: '주변에서 뭐 쓰는지 물어보고 그거랑 똑같은 걸 산다', effects: { 'advice-seeker': 2 } },
        { id: 'q6d', label: '고민하는 그 몇 주가 사실 제일 설레는 순간이다', effects: { 'joyful-ponderer': 2 } },
      ],
    },
    {
      id: 'q7',
      question: '헤어스타일을 바꾸고 싶을 때?',
      choices: [
        { id: 'q7a', label: '마음먹은 그날 바로 미용실로 향한다', effects: { 'snap-decider': 2 } },
        { id: 'q7b', label: '사진을 잔뜩 모아 미용실에 가서 상담부터 길게 받는다', effects: { 'careful-comparer': 2 } },
        { id: 'q7c', label: '어울릴지 주변 사람들한테 먼저 의견을 구한다', effects: { 'advice-seeker': 2 } },
        { id: 'q7d', label: '상상만 몇 달째, 결국 자르러 안 갈 확률이 높다', effects: { 'joyful-ponderer': 2 } },
      ],
    },
    {
      id: 'q8',
      question: '선물을 고를 때 나는?',
      choices: [
        { id: 'q8a', label: '눈에 딱 들어오는 걸 보면 바로 집어 든다', effects: { 'snap-decider': 2 } },
        { id: 'q8b', label: '받는 사람의 취향을 분석해서 최적의 답을 찾아낸다', effects: { 'careful-comparer': 2 } },
        { id: 'q8c', label: '그 사람과 친한 사람에게 힌트를 얻어서 정한다', effects: { 'advice-seeker': 2 } },
        { id: 'q8d', label: '고르는 재미에 빠져서 정작 사는 건 마지막 순간이다', effects: { 'joyful-ponderer': 2 } },
      ],
    },
    {
      id: 'q9',
      question: '갑자기 계획이 틀어졌을 때 나는?',
      choices: [
        { id: 'q9a', label: '당황하지 않고 바로 다음 대안을 정한다', effects: { 'snap-decider': 2 } },
        { id: 'q9b', label: '가능한 대안들을 쭉 나열해두고 하나씩 따져본다', effects: { 'careful-comparer': 2 } },
        { id: 'q9c', label: '같이 있는 사람들 의견을 모아서 다수결로 정한다', effects: { 'advice-seeker': 2 } },
        { id: 'q9d', label: '오히려 이럴 때 새로운 선택지를 궁리하는 게 재밌다', effects: { 'joyful-ponderer': 2 } },
      ],
    },
    {
      id: 'q10',
      question: '두 가지 옵션 중 하나만 골라야 할 때?',
      choices: [
        { id: 'q10a', label: '동전 던지듯 감으로 바로 찍는다', effects: { 'snap-decider': 2 } },
        { id: 'q10b', label: '장단점을 표로 그려서 점수로 비교한다', effects: { 'careful-comparer': 2 } },
        { id: 'q10c', label: '결국 누군가에게 대신 골라달라고 부탁한다', effects: { 'advice-seeker': 2 } },
        { id: 'q10d', label: '둘 다 좋아 보여서 고민하는 시간이 제일 길다', effects: { 'joyful-ponderer': 2 } },
      ],
    },
    {
      id: 'q11',
      question: '결정을 내린 후 나의 모습은?',
      choices: [
        { id: 'q11a', label: '뒤도 안 돌아본다, 이미 다음 결정으로 넘어갔다', effects: { 'snap-decider': 2 } },
        { id: 'q11b', label: '이 정도면 최선의 선택이었다고 스스로 확신한다', effects: { 'careful-comparer': 2 } },
        { id: 'q11c', label: '내 선택에 다들 뭐라고 하는지 은근히 신경 쓰인다', effects: { 'advice-seeker': 2 } },
        { id: 'q11d', label: '결정은 끝났지만 이미 다음 고민거리를 찾고 있다', effects: { 'joyful-ponderer': 2 } },
      ],
    },
  ],
  results: [
    {
      id: 'snap-decider',
      title: '즉흥 결단형',
      shortTitle: '즉흥 결단형',
      emoji: '⚡',
      summary: '고민은 짧게, 결정은 빠르게. 이미 다음 스텝으로 넘어갔다.',
      description:
        '당신은 결정 앞에서 오래 머무르지 않는다. 정보가 완벽하지 않아도 일단 감이 오면 바로 움직이고, 그 판단력에 스스로도 꽤 만족하는 편이다. 남들이 고민하는 사이 당신은 이미 결과를 만들어내고 있다.',
      strengths: [
        '결정 속도가 빨라서 기회를 놓치지 않는다',
        '고민에 에너지를 낭비하지 않고 실행에 집중한다',
        '주변 사람들이 답답할 때 시원하게 정리해준다',
      ],
      cautions: [
        '가끔은 너무 빨리 정해서 뒤늦게 아쉬운 순간이 생긴다',
        '신중한 사람 입장에서는 성급해 보일 수 있다',
      ],
      recommendations: [
        '중요한 결정 앞에서는 딱 한 번만 더 확인하는 습관을 들여보자',
        '빠른 판단력은 강점이니 자신 있게 밀고 나가되, 되돌릴 수 없는 선택엔 잠깐 숨 고르기',
      ],
      shareText: '나는 즉흥 결단형 - 고민은 짧게, 결정은 빠르게',
      color: '#e11d48',
    },
    {
      id: 'careful-comparer',
      title: '신중 비교형',
      shortTitle: '신중 비교형',
      emoji: '📊',
      summary: '재보고 또 재본다, 후회 없는 선택을 위해서라면 시간은 아깝지 않다.',
      description:
        '당신에게 결정은 하나의 프로젝트다. 후기를 찾아보고, 장단점을 정리하고, 여러 옵션을 나란히 놓고서야 비로소 마음이 놓인다. 그 덕분에 웬만해선 크게 후회할 일이 없다.',
      strengths: [
        '정보를 꼼꼼히 따져서 실패 확률이 낮은 선택을 한다',
        '주변 사람들이 뭘 살지 물어볼 때 믿고 찾는 사람이다',
        '한 번 정하면 근거가 탄탄해서 흔들리지 않는다',
      ],
      cautions: [
        '고르는 데 시간이 너무 오래 걸려서 타이밍을 놓치기도 한다',
        '완벽한 선택을 찾다가 정작 결정을 미루게 될 때가 있다',
      ],
      recommendations: [
        '별로 중요하지 않은 결정은 스스로 제한 시간을 정해보자',
        '비교 능력은 큰 무기니, 사소한 선택엔 조금만 힘을 빼도 괜찮다',
      ],
      shareText: '나는 신중 비교형 - 후회 없는 선택을 위해 끝까지 재본다',
      color: '#be123c',
    },
    {
      id: 'advice-seeker',
      title: '조언 의존형',
      shortTitle: '조언 의존형',
      emoji: '💬',
      summary: '혼자 정하지 않는다, 다 같이 정해야 마음이 편하다.',
      description:
        '당신은 결정을 내리기 전에 누군가의 의견을 듣고 싶어 한다. 혼자 고민하는 것보다 여러 시선을 모으는 쪽이 더 좋은 답을 만든다고 믿기 때문이다. 그 덕에 주변 사람들과의 관계도 자연스럽게 끈끈해진다.',
      strengths: [
        '여러 사람의 의견을 잘 모아서 균형 잡힌 선택을 한다',
        '주변과 소통하는 걸 즐겨서 관계가 두텁다',
        '혼자 짊어지지 않고 함께 결정하는 여유가 있다',
      ],
      cautions: [
        '의견이 갈리면 오히려 더 헷갈릴 때가 있다',
        '가끔은 스스로 확신을 갖는 연습도 필요하다',
      ],
      recommendations: [
        '작은 결정 하나는 아무에게도 안 물어보고 혼자 정해보자',
        '조언을 구하는 건 강점이니, 최종 선택은 본인 몫이라는 걸 잊지 말자',
      ],
      shareText: '나는 조언 의존형 - 혼자 정하지 않는다, 다 같이 정한다',
      color: '#fb7185',
    },
    {
      id: 'joyful-ponderer',
      title: '고민 즐기는형',
      shortTitle: '고민 즐기는형',
      emoji: '🌀',
      summary: '결정 자체보다, 고민하는 그 시간이 이미 하나의 즐거움이다.',
      description:
        '당신에게 고민은 부담이 아니라 놀이에 가깝다. 이것저것 재보고 상상하는 과정 자체를 즐기다 보니 결정이 늦어지는 건 그냥 따라오는 자연스러운 결과일 뿐이다. 서두를 이유가 없다, 고민하는 지금도 충분히 즐거우니까.',
      strengths: [
        '다양한 가능성을 오래 열어두고 즐기는 여유가 있다',
        '결정 과정에서 새로운 아이디어나 취향을 발견한다',
        '서두르지 않아서 주변에 느긋한 분위기를 만든다',
      ],
      cautions: [
        '결정이 계속 미뤄지면 주변 사람이 답답해할 수 있다',
        '고민이 길어지다 타이밍 자체를 놓치는 경우가 있다',
      ],
      recommendations: [
        '데드라인을 정해서 그 안에서는 마음껏 고민해보자',
        '고민하는 재미는 그대로 즐기되, 중요한 순간엔 마감 시한을 스스로 정해두자',
      ],
      shareText: '나는 고민 즐기는형 - 결정보다 고민하는 시간이 더 즐겁다',
      color: '#fda4af',
    },
  ],
}
