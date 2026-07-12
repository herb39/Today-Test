import type { TestDefinition } from '../../types/test'

export const aiSurvivalTest: TestDefinition = {
  slug: 'ai-survival',
  title: 'AI 시대 나의 생존 유형',
  shortTitle: 'AI 생존 유형',
  description: '새 AI 도구 뜨면 바로 써보는 편? 아니면 후기부터 스캔하는 편? 11문항으로 알아보는 나의 AI 캐릭터.',
  intro:
    'AI가 일상 곳곳에 스며든 요즘, 다들 이걸 어떻게 받아들이고 있을까? 새로운 AI 서비스가 떴다는 소식에 바로 링크부터 클릭하는 사람이 있는가 하면, 트렌드부터 눈으로 스캔하는 사람도 있고, 세 번은 검증하고 나서야 움직이는 사람도 있다. 이 테스트는 AI를 대하는 태도와 실행 스타일을 11개의 가벼운 질문으로 캐치해서 나만의 "AI 생존 유형"을 찾아준다. 정답도 우열도 없으니, 밈 보듯 가볍게 즐기면서 내 성향을 구경해보자.',
  category: 'AI/미래',
  emoji: '🤖',
  estimatedMinutes: 3,
  theme: { color: '#14b8a6', gradientFrom: '#5eead4', gradientTo: '#0d9488' },
  isPublished: true,
  isNew: true,
  relatedTestSlugs: ['love-style', 'animal-type'],
  seo: {
    title: 'AI 시대 나의 생존 유형 테스트 | 오늘의 테스트',
    description:
      'AI를 대하는 태도와 실행 스타일로 알아보는 나의 AI 생존 유형 심리테스트. 3분이면 끝, 무료로 바로 확인해보세요.',
    faq: [
      {
        question: 'AI 시대 생존 유형 테스트는 무엇을 알려주나요?',
        answer:
          '새로운 AI 서비스를 접했을 때의 반응, 정보를 검증하는 습관, 주변에 공유하는 스타일 등을 바탕으로 직진 실행러, 얼리버드형, 팩트체크러, 인싸 전도사, 마이웨이러 중 나의 AI 생존 유형을 알려드려요.',
      },
      {
        question: '테스트는 얼마나 걸리나요?',
        answer: '11개 질문으로 구성돼 있어 평균 3분이면 가볍게 끝낼 수 있어요.',
      },
      {
        question: '결과가 정확한가요?',
        answer:
          '이 테스트는 AI를 대하는 태도를 재미있게 비춰보는 콘텐츠일 뿐, 전문적인 진단이나 평가는 아니에요. 답변 성향에 따라 결과가 달라질 수 있으니 편하게 즐겨주세요.',
      },
    ],
  },
  questions: [
    {
      id: 'q1',
      question: '핫하다는 새 AI 서비스 소식을 들었다. 나는?',
      choices: [
        { id: 'q1a', label: '어떤 밈이 도는지부터 구경한다', effects: { 'trend-scout': 2, broadcaster: 1 } },
        { id: 'q1b', label: '후기와 논란부터 검색해본다', effects: { 'fact-checker': 2 } },
        { id: 'q1c', label: '캡처해서 단톡방에 공유부터 한다', effects: { broadcaster: 2, 'trend-scout': 1 } },
        { id: 'q1d', label: '"오 그렇구나" 하고 넘어간다', effects: { 'my-pace': 2 } },
      ],
    },
    {
      id: 'q2',
      question: 'AI에게 조금 중요한 업무를 맡겨야 할 때, 내 마음은?',
      choices: [
        { id: 'q2a', label: '못 미더워도 일단 맡기고 결과 보며 고친다', effects: { 'rush-in': 2 } },
        { id: 'q2b', label: '결과가 나오면 세 번은 다시 확인한다', effects: { 'fact-checker': 2, 'my-pace': 1 } },
        { id: 'q2c', label: '잘 되면 바로 자랑하고 싶어진다', effects: { broadcaster: 2 } },
        { id: 'q2d', label: '손에 익은 원래 방식이 더 편하다', effects: { 'my-pace': 2, 'fact-checker': 1 } },
      ],
    },
    {
      id: 'q3',
      question: 'AI가 자신만만하게 틀린 답을 내놓으면?',
      choices: [
        { id: 'q3a', label: '"풉" 웃고 바로 다시 물어본다', effects: { 'rush-in': 2 } },
        { id: 'q3b', label: '이것도 밈으로 써먹을 수 있겠다 싶다', effects: { 'trend-scout': 2, broadcaster: 1 } },
        { id: 'q3c', label: '캡처해서 단톡방에 웃긴 예시로 공유한다', effects: { broadcaster: 2, 'trend-scout': 1 } },
        { id: 'q3d', label: '그럴 수도 있지, 하고 대수롭지 않게 넘긴다', effects: { 'my-pace': 2 } },
      ],
    },
    {
      id: 'q4',
      question: '새로운 기술을 배울 때 나의 스타일은?',
      choices: [
        { id: 'q4a', label: '설명서 없이 일단 눌러보며 몸으로 익힌다', effects: { 'rush-in': 2 } },
        { id: 'q4b', label: '최신 트렌드 채널, 커뮤니티부터 구독한다', effects: { 'trend-scout': 2 } },
        { id: 'q4c', label: '개념과 원리부터 차근차근 정리한다', effects: { 'fact-checker': 2 } },
        { id: 'q4d', label: '필요할 때 필요한 만큼만 익힌다', effects: { 'my-pace': 2 } },
      ],
    },
    {
      id: 'q5',
      question: 'AI 관련 소식을 접했을 때 드는 감정은?',
      choices: [
        { id: 'q5a', label: '재밌겠다, 나도 당장 써봐야지', effects: { 'rush-in': 2, 'trend-scout': 1 } },
        { id: 'q5b', label: '오 이거 완전 힙한데, 더 찾아봐야지', effects: { 'trend-scout': 2 } },
        { id: 'q5c', label: '진짜인지 좀 더 알아봐야겠다', effects: { 'fact-checker': 2 } },
        { id: 'q5d', label: '사람들한테 이 소식부터 전하고 싶다', effects: { broadcaster: 2 } },
      ],
    },
    {
      id: 'q6',
      question: '귀찮은 반복 작업, AI로 자동화할 수 있다면?',
      choices: [
        { id: 'q6a', label: '요즘 유행하는 조합을 그대로 따라 해본다', effects: { 'trend-scout': 2 } },
        { id: 'q6b', label: '오류 안 나는지 몇 번 테스트하고 적용한다', effects: { 'fact-checker': 2 } },
        { id: 'q6c', label: '성공하면 바로 주변에 소문낸다', effects: { broadcaster: 2, 'rush-in': 1 } },
        { id: 'q6d', label: '급한 거 아니면 굳이 안 바꾼다', effects: { 'my-pace': 2 } },
      ],
    },
    {
      id: 'q7',
      question: '내가 알게 된 AI 활용법을 남에게 알려줄 때 나는?',
      choices: [
        { id: 'q7a', label: '말보다 그냥 옆에서 바로 해 보여준다', effects: { 'rush-in': 2 } },
        { id: 'q7b', label: '확실히 되는 것만 골라서 알려준다', effects: { 'fact-checker': 2 } },
        { id: 'q7c', label: '물어보기도 전에 먼저 신나서 알려준다', effects: { broadcaster: 2 } },
        { id: 'q7d', label: '물어보면 알려주지만 먼저 나서진 않는다', effects: { 'my-pace': 2 } },
      ],
    },
    {
      id: 'q8',
      question: '시도했다가 뜻대로 안 되면 나는?',
      choices: [
        { id: 'q8a', label: '"다음!" 하고 바로 다른 방법을 시도한다', effects: { 'rush-in': 2 } },
        { id: 'q8b', label: '요즘 잘된다는 다른 방식으로 갈아탄다', effects: { 'trend-scout': 2 } },
        { id: 'q8c', label: '실패담도 재밌는 이야깃거리라 여기고 공유한다', effects: { broadcaster: 2 } },
        { id: 'q8d', label: '좀 쉬었다가 내 속도에 맞춰 다시 해본다', effects: { 'my-pace': 2, 'fact-checker': 1 } },
      ],
    },
    {
      id: 'q9',
      question: '정보를 검증하는 나만의 습관은?',
      choices: [
        { id: 'q9a', label: '일단 써보면서 맞는지 확인한다', effects: { 'rush-in': 2 } },
        { id: 'q9b', label: '최신 트렌드에 맞는 정보인지부터 확인한다', effects: { 'trend-scout': 2 } },
        { id: 'q9c', label: '출처를 두세 개는 꼭 대조해본다', effects: { 'fact-checker': 2 } },
        { id: 'q9d', label: '급하지 않으면 굳이 검증까지는 안 한다', effects: { 'my-pace': 2 } },
      ],
    },
    {
      id: 'q10',
      question: '계획 없이 일단 해보기 vs 철저히 준비하기, 나는?',
      choices: [
        { id: 'q10a', label: '일단 저지르고 본다', effects: { 'rush-in': 2 } },
        { id: 'q10b', label: '감 잡히면 트렌드 따라 빠르게 판단한다', effects: { 'trend-scout': 2 } },
        { id: 'q10c', label: '체크리스트를 만들어놓고 하나씩 확인한다', effects: { 'fact-checker': 2 } },
        { id: 'q10d', label: '일단 해보고 주변에도 같이 해보자고 한다', effects: { broadcaster: 2, 'rush-in': 1 } },
      ],
    },
    {
      id: 'q11',
      question: '주변 사람들이 AI를 이것저것 활용하는 모습을 보면?',
      choices: [
        { id: 'q11a', label: '오 저건 나도 알아야겠다며 트렌드 체크', effects: { 'trend-scout': 2 } },
        { id: 'q11b', label: '저게 진짜 효과가 있는 건지 궁금해진다', effects: { 'fact-checker': 2 } },
        { id: 'q11c', label: '나도 써보고 사람들한테 알려주고 싶어진다', effects: { broadcaster: 2, 'trend-scout': 1 } },
        { id: 'q11d', label: '나는 내 속도대로 하련다, 하며 미소 짓는다', effects: { 'my-pace': 2 } },
      ],
    },
  ],
  results: [
    {
      id: 'rush-in',
      title: '일단 GO! 직진 실행러',
      shortTitle: '직진 실행러',
      emoji: '🏃',
      summary: '설명서는 나중에, 일단 눌러보고 배우는 당신',
      description:
        '새 AI 도구가 뜨면 고민할 시간에 이미 로그인 화면까지 도달해 있는 타입. 완벽한 이해보다 일단 부딪혀보면서 감을 잡는 쪽이 훨씬 빠르다고 믿는다. 실수해도 "다음!" 하고 바로 다른 방법을 시도하는 회복력이 최대 무기다. 몸으로 익힌 감각이 결국 남들보다 한 발 빠른 실전 감각으로 쌓인다.',
      strengths: ['망설임 없는 실행력', '실패해도 금방 털고 재도전하는 회복력', '몸으로 부딪히며 익히는 빠른 습득력'],
      cautions: ['꼼꼼한 확인 없이 넘어가는 순간들이 쌓일 수 있음', '재미로 시작했다가 중요한 일까지 즉흥적으로 처리할 때가 있음'],
      recommendations: [
        '중요한 결과물은 제출 전 한 번만 다시 훑어보는 습관 들이기',
        '자주 쓰는 AI 도구 하나를 정해 나만의 사용 루틴 만들어보기',
        '새로 시도한 것 중 잘 됐던 방법을 메모로 남겨 다음에 재활용하기',
      ],
      shareText: '나는 일단 GO! 직진 실행러 🏃 너는 AI 앞에서 어떤 유형이야?',
      color: '#2dd4bf',
    },
    {
      id: 'trend-scout',
      title: '트렌드 스캐너, 얼리버드형',
      shortTitle: '얼리버드형',
      emoji: '🔭',
      summary: '뭐가 뜨는지 제일 먼저 캐치하는 안테나형 인간',
      description:
        '새로운 AI 소식이 뜨면 이미 관련 채널 세 개는 구독 완료된 상태. 트렌드의 흐름을 읽는 감이 좋아서 "이거 곧 힙해질 것 같은데?" 하는 촉이 자주 맞는다. 실제로 깊게 파고들기보다는 넓게 스캔하며 흐름을 잡는 걸 즐긴다. 주변 사람들이 뭘 쓰는지, 세상이 어디로 가는지 늘 안테나를 세우고 있는 타입.',
      strengths: ['빠른 트렌드 감지력', '넓은 정보 수집 범위', '변화에 유연하게 반응하는 감각'],
      cautions: ['넓게만 훑고 깊이 써보지 않은 채 넘어갈 때가 있음', '트렌드에 휩쓸려 정작 나에게 필요한 도구를 놓칠 수 있음'],
      recommendations: [
        '이번 주에 캐치한 트렌드 중 딱 하나는 끝까지 써보기',
        '스크랩만 하지 말고 실제 사용 후기를 짧게라도 메모해두기',
        '관심 분야를 좁혀서 정보 소스를 3개 이내로 압축해보기',
      ],
      shareText: '나는 트렌드 스캐너, 얼리버드형 🔭 다음 트렌드는 내가 먼저 안다!',
      color: '#14b8a6',
    },
    {
      id: 'fact-checker',
      title: '찐팩트 검증러',
      shortTitle: '팩트체크러',
      emoji: '🔍',
      summary: '세 번 확인하기 전엔 마음이 안 놓이는 당신',
      description:
        'AI가 뭐라고 답하든 일단 출처부터 대조해보고 믿는 신중파. 화려한 트렌드보다 "이게 진짜 맞는 정보인가"가 더 궁금하다. 검증을 마친 뒤에는 확실한 근거를 가지고 움직이기 때문에 실수가 적은 편이다. 남들이 빠르게 지나칠 때 한 번 더 들여다보는 그 습관이 결국 신뢰를 만든다.',
      strengths: ['꼼꼼한 검증 습관', '정보를 다각도로 살피는 분석력', '실수를 미리 걸러내는 안정감'],
      cautions: ['검증에 시간을 쓰다 타이밍을 놓칠 때가 있음', '완벽하게 확인되기 전까진 시작을 미루는 경향'],
      recommendations: [
        '검증 시간에 상한선을 정해두고 그 안에서 결정하는 연습해보기',
        '가벼운 일에는 "일단 해보고 고치기" 모드도 한 번씩 시도해보기',
        '내가 검증한 정보를 짧게 정리해서 주변과 나눠보기',
      ],
      shareText: '나는 찐팩트 검증러 🔍 믿을 건 검증된 정보뿐!',
      color: '#0d9488',
    },
    {
      id: 'broadcaster',
      title: 'AI 인싸 전도사',
      shortTitle: '인싸 전도사',
      emoji: '📢',
      summary: '나 혼자 알기 아까워서 다 같이 쓰자는 당신',
      description:
        '뭔가 신기한 AI 활용법을 알게 되면 손이 먼저 움직여서 단톡방에 공유부터 한다. 좋은 걸 발견하면 나만 알기보다 주변 사람들과 함께 즐기고 싶은 마음이 크다. 설명하는 걸 좋아하고, 남들이 "오 신기하다" 하는 반응을 보면 뿌듯함을 느낀다. 자연스럽게 주변 사람들의 AI 활용도를 끌어올리는 확산자 역할을 한다.',
      strengths: ['적극적인 공유와 전파력', '설명을 쉽게 풀어주는 친화력', '주변 분위기를 끌어올리는 에너지'],
      cautions: ['확인 전에 성급하게 공유해서 정정할 때가 생길 수 있음', '알리는 데 집중하다 정작 깊이 써보는 시간이 부족할 수 있음'],
      recommendations: [
        '공유하기 전 핵심 내용 한 줄만 다시 확인하는 습관 들이기',
        '주변 사람들과 소소한 AI 활용 꿀팁 나누는 모임 만들어보기',
        '내가 자주 공유하는 주제를 하나로 모아 나만의 노트 만들어보기',
      ],
      shareText: '나는 AI 인싸 전도사 📢 좋은 건 같이 써야 제맛!',
      color: '#06b6d4',
    },
    {
      id: 'my-pace',
      title: '내 속도가 짱, 마이웨이러',
      shortTitle: '마이웨이러',
      emoji: '🌿',
      summary: '급할 거 없다, 내 리듬대로 천천히 받아들이는 당신',
      description:
        '주변이 아무리 시끌시끌해도 흔들리지 않고 나만의 속도를 지킨다. 필요할 때, 필요한 만큼만 배우면 충분하다고 생각하는 편안한 마음가짐의 소유자. 유행을 좇기보다 내게 진짜 도움이 되는지를 스스로 판단해서 받아들인다. 느긋해 보이지만 정작 필요할 땐 누구보다 담담하게 적응해내는 뚝심이 있다.',
      strengths: ['흔들리지 않는 자기만의 기준', '조급해하지 않는 여유', '필요한 순간엔 담담하게 적응하는 뚝심'],
      cautions: ['관심이 없다 보니 유용한 정보를 놓칠 때가 있음', '주변과 활용도 차이가 벌어지면 살짝 아쉬울 수 있음'],
      recommendations: [
        '한 달에 한 번, 딱 하나의 AI 도구만 가볍게 구경해보는 시간 정해두기',
        '주변 사람이 추천하는 활용법 중 부담 없는 것 하나만 시도해보기',
        '나만의 속도를 지키되, 관심 있는 주제 하나 정도는 즐겨찾기 해두기',
      ],
      shareText: '나는 내 속도가 짱, 마이웨이러 🌿 급할 거 없잖아?',
      color: '#0f766e',
    },
  ],
}
