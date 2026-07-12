import type { TestDefinition } from '../../types/test'

export const animalTypeTest: TestDefinition = {
  slug: 'animal-type',
  title: '나의 동물상 성격 테스트',
  shortTitle: '동물상 성격',
  description: '나는 강아지상? 고양이상? 성격으로 보는 나의 동물상은?',
  intro:
    '요즘 사람 볼 때 빠지지 않는 밈이 바로 동물상이다. 그런데 생김새 말고 성격으로 보면 얘기가 달라진다. 애정표현 솔직한 강아지상부터 조용히 감성에 젖는 사슴상까지, 11개 질문으로 내 성격이 진짜로 어떤 동물 이미지에 가까운지 확인해보자. 결과 캡처해서 친구한테 보내면 "완전 너잖아" 소리 나오는 거 국룰이다.',
  category: '성격',
  emoji: '🐾',
  estimatedMinutes: 3,
  theme: { color: '#8b5cf6', gradientFrom: '#c4b5fd', gradientTo: '#7c3aed' },
  isPublished: true,
  isNew: true,
  relatedTestSlugs: ['kakao-habit', 'work-dinner'],
  seo: {
    title: '나의 동물상 성격 테스트 | 오늘의 테스트',
    description:
      '강아지상, 고양이상, 여우상, 곰상, 토끼상, 사슴상까지. 11가지 질문으로 알아보는 나의 성격 동물상 테스트, 지금 확인해보세요.',
    faq: [
      {
        question: '동물상 테스트는 외모로 판단하는 건가요?',
        answer:
          '아니에요. 얼굴형이 아니라 애정 표현 방식이나 관계를 맺는 스타일 같은 성격적인 특징을 바탕으로 강아지상부터 사슴상까지 나누는 테스트예요. 생김새보다 평소 행동 패턴에 가까운 결과가 나올 거예요.',
      },
      {
        question: '테스트는 얼마나 걸리나요?',
        answer: '총 11개의 질문으로 구성되어 있고, 평균 3분 정도면 끝까지 확인할 수 있어요. 부담 없이 가볍게 즐기기 좋은 길이예요.',
      },
      {
        question: '결과가 실제 성격과 다르게 나올 수도 있나요?',
        answer:
          '네, 그럴 수 있어요. 이 테스트는 재미와 자기 이해를 위한 콘텐츠로 의학적이거나 심리학적인 진단이 아니에요. 그날 기분에 따라 선택이 달라지면 결과도 달라질 수 있으니 가볍게 즐겨주세요.',
      },
    ],
  },
  questions: [
    {
      id: 'q1',
      question: '단톡방 알림이 999개 쌓여있을 때 나는?',
      choices: [
        { id: 'q1a', label: '안 읽음 999여도 안 급하다, 내킬 때 몰아서 확인한다', effects: { 'cat-type': 2 } },
        { id: 'q1b', label: '일단 스크롤 쭉 훑고 중요한 것만 골라 답한다', effects: { 'fox-type': 2, 'dog-type': 1 } },
        { id: 'q1c', label: '혹시 내 얘기 하나 싶어서 자꾸 신경 쓰인다', effects: { 'rabbit-type': 2 } },
        { id: 'q1d', label: '다들 활발한데 나만 조용한 것 같아 괜히 눈치 보인다', effects: { 'deer-type': 2, 'bear-type': 1 } },
      ],
    },
    {
      id: 'q2',
      question: '친구가 갑자기 연락 없이 3일째 잠수를 탔다, 나는?',
      choices: [
        { id: 'q2a', label: '바로 전화해서 무슨 일 있냐고 물어본다, 걱정부터 앞선다', effects: { 'dog-type': 2 } },
        { id: 'q2b', label: '굳이 티 안 내고, 걔가 연락할 때까지 태연하게 기다린다', effects: { 'fox-type': 2, 'cat-type': 1 } },
        { id: 'q2c', label: '그럴 수도 있지, 하고 별생각 없이 넘어간다', effects: { 'bear-type': 2, 'rabbit-type': 1 } },
        { id: 'q2d', label: '혹시 내가 뭘 잘못했나 싶어서 계속 곱씹는다', effects: { 'deer-type': 2 } },
      ],
    },
    {
      id: 'q3',
      question: '처음 만난 사람들 모임에 나갔다, 나는?',
      choices: [
        { id: 'q3a', label: '먼저 말 걸고 분위기 띄우는 역할을 자처한다', effects: { 'dog-type': 2, 'fox-type': 1 } },
        { id: 'q3b', label: '말은 별로 안 하지만 은근히 다 지켜보고 있다', effects: { 'cat-type': 2, 'deer-type': 1 } },
        { id: 'q3c', label: '구석 자리에 있다가 친해지면 그때부터 진가를 보인다', effects: { 'bear-type': 2 } },
        { id: 'q3d', label: '낯설어서 계속 눈치 보고 말 한마디도 조심스럽다', effects: { 'rabbit-type': 2 } },
      ],
    },
    {
      id: 'q4',
      question: '좋아하는 사람이 생기면 나는?',
      choices: [
        { id: 'q4a', label: '티 안 내려고 하는데 오히려 그게 더 티가 난다', effects: { 'cat-type': 2 } },
        { id: 'q4b', label: '상대 반응 하나하나 계산하면서 밀당의 고수가 된다', effects: { 'fox-type': 2, 'dog-type': 1 } },
        { id: 'q4c', label: '심장이 떨려서 말 한마디도 제대로 못 한다', effects: { 'rabbit-type': 2, 'bear-type': 1 } },
        { id: 'q4d', label: '괜히 혼자 설렜다가 혼자 상처받을까 봐 미리 걱정한다', effects: { 'deer-type': 2 } },
      ],
    },
    {
      id: 'q5',
      question: '주말 약속 스타일은?',
      choices: [
        { id: 'q5a', label: '일주일 내내 사람 만날 약속으로 스케줄이 꽉 차 있다', effects: { 'dog-type': 2 } },
        { id: 'q5b', label: '그때그때 제일 재밌어 보이는 약속으로 스마트하게 갈아탄다', effects: { 'fox-type': 2 } },
        { id: 'q5c', label: '한 번 잡은 약속은 어지간하면 끝까지 지킨다', effects: { 'bear-type': 2, 'rabbit-type': 1 } },
        { id: 'q5d', label: '약속은 좋은데 막상 당일 되면 집이 제일 좋다', effects: { 'deer-type': 2, 'cat-type': 1 } },
      ],
    },
    {
      id: 'q6',
      question: '화가 났을 때 나의 반응은?',
      choices: [
        { id: 'q6a', label: '화났다는 걸 숨기지 못하고 바로 티가 팍팍 난다', effects: { 'dog-type': 2, 'deer-type': 1 } },
        { id: 'q6b', label: '말없이 조용해진다, 알아서 눈치채길 바란다', effects: { 'cat-type': 2, 'fox-type': 1 } },
        { id: 'q6c', label: '웬만해선 화 안 낸다, 근데 한번 터지면 진짜 무섭다', effects: { 'bear-type': 2 } },
        { id: 'q6d', label: '화나기보다 서러워서 눈물부터 난다', effects: { 'rabbit-type': 2 } },
      ],
    },
    {
      id: 'q7',
      question: '새로운 환경(전학, 이직 등)에 던져지면?',
      choices: [
        { id: 'q7a', label: '적응이고 뭐고 일단 내 페이스부터 지킨다', effects: { 'cat-type': 2, 'bear-type': 1 } },
        { id: 'q7b', label: '빠르게 분위기 파악해서 누구랑 친해져야 할지 감을 잡는다', effects: { 'fox-type': 2, 'dog-type': 1 } },
        { id: 'q7c', label: '적응하는 데 시간이 좀 걸린다, 초반엔 많이 긴장한다', effects: { 'rabbit-type': 2 } },
        { id: 'q7d', label: '낯선 곳에서 괜히 위축되고 조용해진다', effects: { 'deer-type': 2 } },
      ],
    },
    {
      id: 'q8',
      question: '칭찬을 받으면 나는?',
      choices: [
        { id: 'q8a', label: '너무 좋아서 리액션이 그 자리에서 폭발한다', effects: { 'dog-type': 2, 'rabbit-type': 1 } },
        { id: 'q8b', label: '속으론 좋으면서 겉으론 능청스럽게 받아친다', effects: { 'fox-type': 2 } },
        { id: 'q8c', label: '고맙다고 짧게 말하고 만다, 표현이 크진 않다', effects: { 'bear-type': 2, 'cat-type': 1 } },
        { id: 'q8d', label: '부끄러워서 얼굴부터 빨개진다', effects: { 'deer-type': 2 } },
      ],
    },
    {
      id: 'q9',
      question: '무리(그룹) 안에서 나의 포지션은?',
      choices: [
        { id: 'q9a', label: '분위기 메이커, 텐션 담당이다', effects: { 'dog-type': 2, 'fox-type': 1 } },
        { id: 'q9b', label: '있는 듯 없는 듯 하다가 결정적일 때 한마디씩 던진다', effects: { 'cat-type': 2 } },
        { id: 'q9c', label: '든든한 맏형, 맏언니 포지션이다', effects: { 'bear-type': 2, 'deer-type': 1 } },
        { id: 'q9d', label: '막내처럼 귀여움받는 포지션이다', effects: { 'rabbit-type': 2 } },
      ],
    },
    {
      id: 'q10',
      question: '혼자 있는 시간에 대해 나는?',
      choices: [
        { id: 'q10a', label: '혼자만의 시간이 최고다, 방해받는 게 제일 싫다', effects: { 'cat-type': 2 } },
        { id: 'q10b', label: '혼자 있어도 심심할 틈 없이 알아서 잘 논다', effects: { 'fox-type': 2, 'dog-type': 1 } },
        { id: 'q10c', label: '혼자 있으면 좋으면서도 은근 누가 연락해주길 기다린다', effects: { 'rabbit-type': 2, 'bear-type': 1 } },
        { id: 'q10d', label: '혼자 있으면 이런저런 생각이 많아져서 감성에 잠긴다', effects: { 'deer-type': 2 } },
      ],
    },
    {
      id: 'q11',
      question: '연애할 때 나의 스타일은?',
      choices: [
        { id: 'q11a', label: '좋아하는 마음을 숨기지 못하고 표현을 확실하게 한다', effects: { 'dog-type': 2, 'cat-type': 1 } },
        { id: 'q11b', label: '밀당의 고수, 상대가 나를 궁금해하게 만든다', effects: { 'fox-type': 2 } },
        { id: 'q11c', label: '표현은 서툴러도 한번 마음 주면 끝까지 진심이다', effects: { 'bear-type': 2, 'rabbit-type': 1 } },
        { id: 'q11d', label: '사소한 말 한마디에도 마음이 왔다갔다 한다', effects: { 'deer-type': 2 } },
      ],
    },
  ],
  results: [
    {
      id: 'dog-type',
      title: '강아지상 - 애정 솔직러',
      shortTitle: '강아지상',
      emoji: '🐶',
      summary: '좋아하면 좋아한다고 바로 티 내는 타입, 인간 그 자체로 리트리버다.',
      description:
        '감정 숨기는 거 자체가 안 되는 사람이다. 좋으면 좋다고, 반가우면 반갑다고 표정과 말투에 다 드러난다. 사람 만나는 것도 좋아하고, 먼저 다가가는 것도 어렵지 않다. 그 솔직함 덕분에 주변 사람들은 늘 편하게 다가온다.',
      strengths: ['먼저 다가가고 표현하는 데 거리낌이 없다', '분위기를 밝게 만드는 텐션이 있다', '누구와도 금방 친해지는 친화력이 있다'],
      cautions: ['감정이 얼굴에 다 드러나서 숨기기 어렵다', '리액션이 커서 가끔 오해를 사기도 한다'],
      recommendations: ['가끔은 한 박자 쉬고 리액션해도 매력이 줄지 않는다', '솔직함은 최고의 무기니까 계속 그대로 가도 된다'],
      shareText: '나는 강아지상 - 좋아하면 티부터 나는 애정 솔직러!',
      color: '#c084fc',
    },
    {
      id: 'cat-type',
      title: '고양이상 - 도도한 마이페이스',
      shortTitle: '고양이상',
      emoji: '🐱',
      summary: '먼저 다가오는 법은 없지만, 곁을 내주면 은근 다정한 타입이다.',
      description:
        '남 눈치 보느라 내 페이스를 잃는 일은 없다. 필요할 때, 내키는 때에 딱 맞춰 움직이는 스타일이라 처음엔 차가워 보일 수 있지만 알고 보면 은근한 다정함이 있다. 곁을 내주는 사람에게는 확실히 다르게 대한다.',
      strengths: ['자기 기준과 속도를 흔들림 없이 지킨다', '겉으로 티는 안 나도 은근히 세심하게 챙긴다', '혼자서도 잘 노는 독립심이 있다'],
      cautions: ['속마음을 잘 안 드러내서 오해를 사기도 한다', '내키지 않으면 티가 팍팍 난다'],
      recommendations: ['가끔은 먼저 연락 한 통 해보면 관계가 더 깊어진다', '무뚝뚝해 보여도 이미 충분히 매력적이니 걱정 말자'],
      shareText: '나는 고양이상 - 도도하지만 곁을 내주면 다정한 마이페이스!',
      color: '#a855f7',
    },
    {
      id: 'fox-type',
      title: '여우상 - 눈치백단 밀당러',
      shortTitle: '여우상',
      emoji: '🦊',
      summary: '상황 파악은 3초, 분위기 캐치는 순삭인 눈치 만렙 타입이다.',
      description:
        '어떤 자리에 가도 분위기를 빠르게 읽고 거기에 맞춰 움직인다. 계산적이라기보다는 센스가 좋은 쪽에 가깝다. 상대의 마음을 살짝살짝 궁금하게 만드는 밀당 능력도 자연스럽게 탑재하고 있다.',
      strengths: ['눈치가 빠르고 상황 판단이 정확하다', '어디서든 자기 매력을 잘 어필한다', '위기 상황에서도 임기응변이 뛰어나다'],
      cautions: ['너무 계산적으로 보일까 봐 스스로 조심하게 된다', '속마음을 다 보여주지 않아 가끔 답답하게 느껴질 수 있다'],
      recommendations: ['가끔은 계산 없이 솔직하게 다가가도 매력이 배가 된다', '눈치 보는 에너지를 나를 위해 써보는 것도 좋다'],
      shareText: '나는 여우상 - 눈치 빠르고 밀당까지 완벽한 타입!',
      color: '#9333ea',
    },
    {
      id: 'bear-type',
      title: '곰상 - 진국 그 자체',
      shortTitle: '곰상',
      emoji: '🐻',
      summary: '표현은 서툴러도 마음 하나는 제일 진하고 무거운 타입이다.',
      description:
        '화려한 리액션이나 말재주는 없지만 한번 마음을 주면 끝까지 진심으로 대한다. 웬만한 일에는 흔들리지 않는 든든함이 있어서 곁에 있으면 안심이 된다는 얘기를 자주 듣는다.',
      strengths: ['한번 맺은 관계를 오래, 진하게 유지한다', '어지간한 일에는 크게 흔들리지 않는다', '말보다 행동으로 마음을 보여준다'],
      cautions: ['감정 표현이 서툴러서 오해를 살 수 있다', '변화를 받아들이는 데 시간이 좀 걸린다'],
      recommendations: ['가끔은 마음을 말로도 표현해보면 관계가 더 깊어진다', '진심은 이미 전해지고 있으니 조급해하지 않아도 된다'],
      shareText: '나는 곰상 - 표현은 서툴러도 진심은 진국인 타입!',
      color: '#7c3aed',
    },
    {
      id: 'rabbit-type',
      title: '토끼상 - 여리여리 순정파',
      shortTitle: '토끼상',
      emoji: '🐰',
      summary: '작은 것에도 마음이 몽글몽글, 감정 기복은 있지만 그래서 더 사랑스러운 타입이다.',
      description:
        '낯선 자리는 어렵고 사람 눈치도 많이 보지만 그만큼 감정이 여리고 순수하다. 좋아하는 사람이나 편한 사람 앞에서는 애교와 애정이 폭발하는 반전 매력도 있다.',
      strengths: ['감정이 섬세해서 상대의 기분을 잘 캐치한다', '편한 사람 앞에서는 애정 표현이 풍부해진다', '순수하고 여린 매력으로 보호본능을 자극한다'],
      cautions: ['낯선 상황에서 긴장을 많이 하는 편이다', '감정 기복이 겉으로 드러나기 쉽다'],
      recommendations: ['긴장될 땐 심호흡 한 번, 생각보다 다 잘하고 있다', '여린 마음도 매력이니 굳이 숨기려 하지 않아도 된다'],
      shareText: '나는 토끼상 - 여리여리하지만 그래서 더 사랑스러운 타입!',
      color: '#e879f9',
    },
    {
      id: 'deer-type',
      title: '사슴상 - 감성 충만 관찰러',
      shortTitle: '사슴상',
      emoji: '🦌',
      summary: '조용히 관찰하다 혼자 감성에 젖는, 은근 섬세한 타입이다.',
      description:
        '시끌벅적한 중심보다는 한 발짝 떨어져서 지켜보는 걸 좋아한다. 작은 말 한마디에도 마음이 오래 남고, 혼자 있는 시간에 이런저런 생각과 감정을 정리하는 편이다. 조용하지만 그 안에 담긴 감정의 깊이는 누구보다 깊다.',
      strengths: ['관찰력이 좋고 섬세하게 감정을 느낀다', '조용하지만 깊이 있는 존재감이 있다', '다른 사람의 감정 변화를 잘 알아챈다'],
      cautions: ['사소한 말에도 상처를 오래 담아두는 편이다', '먼저 나서기보다 지켜보다가 타이밍을 놓치기도 한다'],
      recommendations: ['마음에 담아두지 말고 가끔은 툭 털어놔도 괜찮다', '섬세함은 단점이 아니라 가장 큰 매력 포인트다'],
      shareText: '나는 사슴상 - 조용히 감성 충만한 관찰러 타입!',
      color: '#d946ef',
    },
  ],
}
