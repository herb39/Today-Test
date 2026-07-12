import type { TestDefinition } from '../../types/test'

export const loveStyleTest: TestDefinition = {
  slug: 'love-style',
  title: '연애할 때 나는 어떤 유형?',
  shortTitle: '연애 유형',
  description: '마음을 표현하는 방식부터 갈등을 풀어가는 태도까지, 나만의 연애 결을 들여다보는 테스트예요.',
  intro:
    '연애를 할 때 우리는 저마다 다른 결을 가지고 있어요. 마음이 생기면 바로 티를 내는 사람이 있고, 조용히 옆에서 챙겨주는 사람이 있고, 한 박자 쉬고 다가가는 사람도 있죠. 11개의 질문에 솔직하게 답하다 보면, 내가 관계 안에서 마음을 어떻게 표현하고, 거리를 어떻게 조절하고, 서운함이나 다툼은 어떻게 풀어가는 사람인지 자연스럽게 보일 거예요. 정답은 없으니 부담 갖지 말고, 지금 떠오르는 그대로 골라보세요.',
  category: '연애',
  emoji: '💌',
  estimatedMinutes: 3,
  theme: { color: '#ec4899', gradientFrom: '#f472b6', gradientTo: '#ec4899' },
  isPublished: true,
  isNew: true,
  relatedTestSlugs: ['animal-type', 'kakao-habit'],
  seo: {
    title: '연애할 때 나는 어떤 유형? - 나의 연애 스타일 테스트 | 오늘의 테스트',
    description: '표현 방식, 거리감, 갈등 대처까지. 11가지 질문으로 알아보는 나의 연애 유형 심리테스트.',
    faq: [
      {
        question: '연애 유형 테스트는 어떤 방식으로 결과를 알려주나요?',
        answer:
          '마음을 표현하는 방식, 다투고 화해하는 태도, 상대와의 거리감을 조절하는 습관 등 11가지 상황에 대한 답변을 바탕으로 솔직 표현형, 다정 챙김형, 신중 접근형, 몰입형, 안정 거리형 중 나와 가장 가까운 연애 스타일을 알려드려요.',
      },
      {
        question: '테스트는 얼마나 걸리나요?',
        answer: '총 11개의 질문으로 구성되어 있어서 평균 3분 정도면 편하게 끝낼 수 있어요.',
      },
      {
        question: '결과가 항상 똑같이 나오나요?',
        answer:
          '재미와 자기이해를 위한 콘텐츠라서 의학적·심리학적 진단은 아니에요. 최근 연애 경험이나 그날의 감정 상태에 따라 답변이 조금씩 달라질 수 있으니 가볍게 즐겨주세요.',
      },
    ],
  },
  questions: [
    {
      id: 'q1',
      question: '연락이 뜸해졌을 때 나는',
      choices: [
        { id: 'q1a', label: '그 사람이 좋아할 만한 걸 발견하면 아무 말 없이 링크만 슬쩍 보내둔다', effects: { 'quiet-care': 2 } },
        { id: 'q1b', label: '며칠 더 지켜보다가 마음이 정리되면 그때 연락한다', effects: { 'slow-approach': 2 } },
        { id: 'q1c', label: '겉으론 태연한 척해도 속으론 계속 그 사람 생각만 한다', effects: { 'deep-immersion': 2 } },
        { id: 'q1d', label: '바쁜가 보다 하고 내 할 일을 하며 여유롭게 기다린다', effects: { 'steady-distance': 2 } },
      ],
    },
    {
      id: 'q2',
      question: '다투고 난 뒤 화해하는 방식은',
      choices: [
        { id: 'q2a', label: '감정이 풀릴 때까지 그 자리에서 바로 얘기해서 풀고 싶다', effects: { expressive: 2 } },
        { id: 'q2b', label: '각자 진정할 시간을 가진 뒤 차분히 얘기를 꺼낸다', effects: { 'slow-approach': 2 } },
        { id: 'q2c', label: '화해하기 전까지는 다른 일이 잘 손에 잡히지 않는다', effects: { 'deep-immersion': 2 } },
        { id: 'q2d', label: '시간이 지나면 자연스레 풀린다고 믿고 여유를 둔다', effects: { 'steady-distance': 2 } },
      ],
    },
    {
      id: 'q3',
      question: '좋아하는 마음을 표현할 때 나는',
      choices: [
        { id: 'q3a', label: '좋아한다는 말을 아끼지 않고 자주 표현한다', effects: { expressive: 2 } },
        { id: 'q3b', label: '말보다는 작은 챙김으로 마음을 보여준다', effects: { 'quiet-care': 2 } },
        { id: 'q3c', label: '그 사람 중심으로 하루 일과가 자연스레 맞춰진다', effects: { 'deep-immersion': 2 } },
        { id: 'q3d', label: '티는 잘 안 나지만 꾸준한 관심으로 마음을 표현한다', effects: { 'steady-distance': 2 } },
      ],
    },
    {
      id: 'q4',
      question: '상대에게 서운함을 느꼈을 때 나는',
      choices: [
        { id: 'q4a', label: '서운한 이유를 그 자리에서 바로 말한다', effects: { expressive: 2 } },
        { id: 'q4b', label: '말은 안 해도 행동에서 슬쩍 티가 난다', effects: { 'quiet-care': 2 } },
        { id: 'q4c', label: '감정이 가라앉을 때까지 기다렸다가 조심스레 얘기한다', effects: { 'slow-approach': 2 } },
        { id: 'q4d', label: '서운함도 있는 그대로 받아들이고 크게 담아두지 않는다', effects: { 'steady-distance': 2 } },
      ],
    },
    {
      id: 'q5',
      question: '데이트 계획을 짤 때 나는',
      choices: [
        { id: 'q5a', label: '하고 싶은 걸 신나게 먼저 제안한다', effects: { expressive: 2 } },
        { id: 'q5b', label: '상대가 좋아할 만한 코스를 미리 조사해서 준비한다', effects: { 'quiet-care': 2 } },
        { id: 'q5c', label: '서두르지 않고 상대의 의견을 먼저 물어본 뒤 정한다', effects: { 'slow-approach': 2 } },
        { id: 'q5d', label: '그 하루를 어떻게 하면 완벽하게 만들지 며칠 전부터 고민한다', effects: { 'deep-immersion': 2 } },
      ],
    },
    {
      id: 'q6',
      question: '상대의 친구나 지인 모임 얘기를 들을 때 나는',
      choices: [
        { id: 'q6a', label: '잘 다녀오라고 챙겨주고 필요한 게 있는지 물어본다', effects: { 'quiet-care': 2 } },
        { id: 'q6b', label: '궁금한 게 있어도 다녀온 뒤 천천히 물어본다', effects: { 'slow-approach': 2 } },
        { id: 'q6c', label: '모임이 끝날 때까지 은근히 신경이 쓰인다', effects: { 'deep-immersion': 2 } },
        { id: 'q6d', label: '각자의 시간이니 편하게 다녀오라며 쿨하게 넘긴다', effects: { 'steady-distance': 2 } },
      ],
    },
    {
      id: 'q7',
      question: '혼자만의 시간이 필요할 때 나는',
      choices: [
        { id: 'q7a', label: '혼자 있고 싶은 마음을 솔직하게 바로 얘기한다', effects: { expressive: 2 } },
        { id: 'q7b', label: '타이밍을 봐서 조심스럽게 시간을 달라고 말한다', effects: { 'slow-approach': 2 } },
        { id: 'q7c', label: '혼자 있어도 마음 한켠엔 늘 상대가 자리하고 있다', effects: { 'deep-immersion': 2 } },
        { id: 'q7d', label: '각자의 시간을 갖는 게 당연하다고 생각해서 편하게 요청한다', effects: { 'steady-distance': 2 } },
      ],
    },
    {
      id: 'q8',
      question: '기념일을 챙기는 방식은',
      choices: [
        { id: 'q8a', label: '며칠 전부터 들떠서 이것저것 이벤트를 준비한다', effects: { expressive: 2 } },
        { id: 'q8b', label: '거창하진 않아도 평소보다 더 세심하게 챙긴다', effects: { 'quiet-care': 2 } },
        { id: 'q8c', label: '그날 하루를 특별하게 만들 생각에 몰두한다', effects: { 'deep-immersion': 2 } },
        { id: 'q8d', label: '소소하지만 꾸준히, 잊지 않고 챙긴다', effects: { 'steady-distance': 2 } },
      ],
    },
    {
      id: 'q9',
      question: '힘든 일이 있을 때 상대에게 기대는 정도는',
      choices: [
        { id: 'q9a', label: '힘든 마음을 바로바로 다 털어놓는 편이다', effects: { expressive: 2 } },
        { id: 'q9b', label: '말하기보다 그냥 곁에 있어주는 걸로 위로받고 싶다', effects: { 'quiet-care': 2 } },
        { id: 'q9c', label: '혼자 정리할 시간을 가진 뒤에 조금씩 얘기를 꺼낸다', effects: { 'slow-approach': 2 } },
        { id: 'q9d', label: '기대는 것도 좋지만 스스로 해결하려는 편이다', effects: { 'steady-distance': 2 } },
      ],
    },
    {
      id: 'q10',
      question: '관계에서 확신이 필요한 순간에 나는',
      choices: [
        { id: 'q10a', label: '직접 마음을 물어보고 확실하게 확인받고 싶다', effects: { expressive: 2 } },
        { id: 'q10b', label: '말보다는 꾸준한 행동에서 확신을 얻는 편이다', effects: { 'quiet-care': 2 } },
        { id: 'q10c', label: '조급해하지 않고 시간이 답을 준다고 믿는다', effects: { 'slow-approach': 2 } },
        { id: 'q10d', label: '사소한 신호 하나에도 마음이 크게 움직인다', effects: { 'deep-immersion': 2 } },
      ],
    },
    {
      id: 'q11',
      question: '상대가 약속을 깜빡하는 등 실수를 했을 때 나는',
      choices: [
        { id: 'q11a', label: '서운해도 티 내지 않고 다음엔 잘 챙겨주길 바란다', effects: { 'quiet-care': 2 } },
        { id: 'q11b', label: '감정이 앞서지 않게 하루 정도 생각을 정리한 뒤 얘기한다', effects: { 'slow-approach': 2 } },
        { id: 'q11c', label: '속상한 마음이 오래 남아서 계속 신경이 쓰인다', effects: { 'deep-immersion': 2 } },
        { id: 'q11d', label: '그럴 수도 있지 하고 대수롭지 않게 넘어간다', effects: { 'steady-distance': 2 } },
      ],
    },
  ],
  results: [
    {
      id: 'expressive',
      title: '마음을 숨기지 못하는 솔직 표현형',
      shortTitle: '솔직 표현형',
      emoji: '💬',
      summary: '좋아하는 마음이 생기면 얼굴부터 티가 나는 사람',
      description:
        '당신은 마음이 생기면 그걸 굳이 숨기지 않아요. 좋으면 좋다고, 서운하면 서운하다고 그 자리에서 바로 얘기하는 편이라 상대는 당신의 마음을 애써 짐작할 필요가 없어요. 감정을 꾹꾹 눌러 담아두기보다는 바로바로 꺼내놓아야 마음이 편해지는 타입이에요. 그만큼 관계 안에서 오해가 오래 쌓이는 일이 적은 편이에요.',
      strengths: ['마음을 숨기지 않아 오해가 쌓이지 않아요', '표현이 솔직해서 상대가 안심할 수 있어요'],
      cautions: ['감정이 앞서 상대가 생각할 틈을 놓칠 수 있어요', '즉흥적인 표현이 상대에게 부담으로 느껴질 때도 있어요'],
      recommendations: ['말하기 전에 상대의 속도를 한 번 살펴보기', '표현한 뒤엔 상대의 반응에도 귀 기울이기'],
      shareText: '나는 마음을 숨기지 못하는 솔직 표현형 💬 오늘의 테스트에서 내 연애 유형 확인해보기',
      color: '#fb7185',
    },
    {
      id: 'quiet-care',
      title: '말보다 행동이 앞서는 다정 챙김형',
      shortTitle: '다정 챙김형',
      emoji: '🤲',
      summary: '표현은 서툴러도 챙기는 마음만큼은 확실한 사람',
      description:
        '당신은 "좋아해"라는 말을 자주 하는 편은 아니지만, 상대에게 무엇이 필요한지 누구보다 먼저 알아채는 사람이에요. 작은 관심을 조용히 행동으로 옮기는 게 당신에게는 가장 자연스러운 애정 표현이에요. 말수는 적어도 그 안에 담긴 진심은 상대도 시간이 지나면 자연스레 느끼게 돼요.',
      strengths: ['꾸준하고 세심한 배려가 몸에 배어 있어요', '과장 없이 진심을 전할 줄 알아요'],
      cautions: ['마음을 표현하지 않아 상대가 헷갈릴 수 있어요', '챙기는 걸 당연하게 여겨질까 봐 서운할 때가 있어요'],
      recommendations: ['가끔은 말로도 마음을 표현해보기', '내가 받고 싶은 것도 솔직하게 얘기해보기'],
      shareText: '나는 말보다 행동이 앞서는 다정 챙김형 🤲 오늘의 테스트에서 내 연애 유형 확인해보기',
      color: '#f472b6',
    },
    {
      id: 'slow-approach',
      title: '한 박자 쉬고 다가가는 신중 접근형',
      shortTitle: '신중 접근형',
      emoji: '🌙',
      summary: '서두르지 않고 마음의 속도를 지키는 사람',
      description:
        '당신은 감정이 생겨도 바로 움직이기보다, 먼저 그 마음을 스스로 들여다보는 시간을 가져요. 다툼이 생겨도 감정이 앞선 채로 말을 꺼내기보다는 정리가 된 다음에 다가가는 편이에요. 느리게 다가가는 만큼, 한 번 내린 마음은 쉽게 흔들리지 않는 단단함이 있어요.',
      strengths: ['감정에 휩쓸리지 않고 차분하게 판단해요', '한 번 다가간 마음은 오래 지속돼요'],
      cautions: ['생각하는 시간이 길어져 상대가 답답해할 수 있어요', '속마음을 표현할 타이밍을 자주 놓쳐요'],
      recommendations: ['생각이 끝나면 짧게라도 상대에게 알려주기', '정리 중이라는 사실만이라도 먼저 전하기'],
      shareText: '나는 한 박자 쉬고 다가가는 신중 접근형 🌙 오늘의 테스트에서 내 연애 유형 확인해보기',
      color: '#ec4899',
    },
    {
      id: 'deep-immersion',
      title: '한 사람에게 깊이 몰입하는 몰입형',
      shortTitle: '몰입형',
      emoji: '🌊',
      summary: '마음이 향하면 온통 그 사람 생각뿐인 사람',
      description:
        '당신은 누군가에게 마음이 향하면 그 사람 중심으로 하루가 자연스레 흘러가요. 사소한 말 한마디, 작은 신호 하나에도 마음이 크게 움직이고, 그만큼 관계에 깊이 몰두하는 타입이에요. 그 진심 어린 몰입은 상대에게 큰 사랑받는 느낌을 주지만, 나 자신을 챙기는 것도 잊지 않아야 해요.',
      strengths: ['관계에 진심을 다해 깊이 몰두해요', '상대의 작은 변화도 세심하게 알아차려요'],
      cautions: ['상대에게 지나치게 의미를 부여해 지칠 수 있어요', '나만의 시간과 취향을 잃기 쉬워요'],
      recommendations: ['관계 밖에서도 나만의 시간을 꾸준히 만들기', '작은 신호에 일희일비하지 않고 잠시 거리를 두고 바라보기'],
      shareText: '나는 한 사람에게 깊이 몰입하는 몰입형 🌊 오늘의 테스트에서 내 연애 유형 확인해보기',
      color: '#db2777',
    },
    {
      id: 'steady-distance',
      title: '적당한 거리에서 안정을 찾는 안정 거리형',
      shortTitle: '안정 거리형',
      emoji: '🌿',
      summary: '서로의 공간을 지키며 편안함을 추구하는 사람',
      description:
        '당신은 관계 안에서도 각자의 시간과 공간이 소중하다고 생각해요. 서운한 일이 있어도 크게 담아두지 않고, 시간이 지나면 자연스레 풀린다고 믿는 여유가 있어요. 요란하지 않아도 꾸준하고 편안한 온도를 유지하는 게 당신만의 안정적인 연애 방식이에요.',
      strengths: ['서로에게 무리한 부담을 주지 않아요', '흔들리지 않는 편안한 안정감을 줘요'],
      cautions: ['무심하다는 오해를 받을 때가 있어요', '표현이 적어 상대가 마음을 확신하지 못할 수 있어요'],
      recommendations: ['가끔은 먼저 마음을 말로 표현해보기', '거리를 두는 이유를 상대에게 짧게라도 설명해주기'],
      shareText: '나는 적당한 거리에서 안정을 찾는 안정 거리형 🌿 오늘의 테스트에서 내 연애 유형 확인해보기',
      color: '#be185d',
    },
  ],
}
