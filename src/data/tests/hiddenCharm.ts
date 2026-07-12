import type { TestDefinition } from '../../types/test'

export const hiddenCharmTest: TestDefinition = {
  slug: 'hidden-charm',
  title: '나의 반전 매력 테스트',
  shortTitle: '반전 매력',
  description: '나도 몰랐던 내 반전 매력, 첫인상과 진짜 분위기 사이의 온도차를 확인해보자.',
  intro:
    '처음 만난 사람에게 나는 어떤 인상을 줄까? 그리고 조금 친해지고 나면 사람들은 나를 어떻게 다시 보게 될까? 이 테스트는 겉으로 풍기는 분위기와 실제로 친해졌을 때 드러나는 태도 사이의 반전을 짚어보는 심리테스트다. 카리스마 있어 보이지만 알고 보면 다정한 유형부터, 쿨해 보이지만 사실 웃긴 유형, 발랄해 보이지만 속은 진지한 유형, 조용해 보이지만 텐션이 폭발하는 유형까지 - 11개의 질문에 답하고 나의 숨겨진 반전 매력을 찾아보자.',
  category: '성격',
  emoji: '🎭',
  estimatedMinutes: 3,
  theme: { color: '#a21caf', gradientFrom: '#d946ef', gradientTo: '#a21caf' },
  isPublished: true,
  isNew: true,
  relatedTestSlugs: ['goal-style', 'burnout'],
  seo: {
    title: '나의 반전 매력 테스트 - 첫인상 뒤에 숨은 나 | 오늘의 테스트',
    description:
      '카리스마 속 다정함형부터 조용함 속 텐션 폭발형까지, 3분이면 알 수 있는 나의 반전 매력 테스트로 진짜 매력을 찾아보자.',
    faq: [
      {
        question: '첫인상과 실제 성격이 다르다는 말을 자주 듣는데, 어떤 유형인지 알 수 있나요?',
        answer:
          '이 테스트가 딱 그런 궁금증을 위한 거예요. 처음 만났을 때의 분위기와 친해진 뒤 드러나는 모습 사이의 온도차를 11개의 질문으로 짚어서, 나의 반전 매력이 어느 쪽에 가까운지 알려줘요.',
      },
      {
        question: '반전 매력 테스트는 얼마나 걸리나요?',
        answer: '11개 질문으로 이루어져 있어서, 보통 3분 안에 편하게 끝까지 답할 수 있어요.',
      },
      {
        question: '결과가 내 진짜 매력이 맞는 건가요?',
        answer:
          '이 테스트는 재미와 자기 이해를 위한 콘텐츠라 딱 떨어지는 진단은 아니에요. 만나는 사람이나 상황에 따라 다르게 느껴질 수 있으니, 가볍게 웃으며 참고해주세요.',
      },
    ],
  },
  questions: [
    {
      id: 'q1',
      question: '새로운 모임에 처음 갔을 때 나의 태도는?',
      choices: [
        {
          id: 'q1a',
          label: '자리를 자연스럽게 이끌며 무게감 있게 존재감을 드러낸다',
          effects: { 'charisma-warmth': 2 },
        },
        {
          id: 'q1b',
          label: '별다른 리액션 없이 담담하게 상황을 지켜본다',
          effects: { 'cool-humor': 2 },
        },
        {
          id: 'q1c',
          label: '먼저 말을 걸고 밝은 텐션으로 분위기를 띄운다',
          effects: { 'bright-serious': 2 },
        },
        {
          id: 'q1d',
          label: '말없이 조용히 앉아 분위기부터 파악한다',
          effects: { 'quiet-hype': 2 },
        },
      ],
    },
    {
      id: 'q2',
      question: '단체 카톡방에서 평소 내 모습은?',
      choices: [
        {
          id: 'q2a',
          label: '대화의 흐름을 정리하고 중심을 잡아준다',
          effects: { 'charisma-warmth': 2 },
        },
        {
          id: 'q2b',
          label: '조용히 있다가 필요한 말만 툭 던진다',
          effects: { 'cool-humor': 2 },
        },
        {
          id: 'q2c',
          label: '이모티콘과 리액션으로 늘 텐션을 채운다',
          effects: { 'bright-serious': 2 },
        },
        {
          id: 'q2d',
          label: '잘 안 보이다가 어쩌다 한 번 엄청난 드립을 던진다',
          effects: { 'quiet-hype': 2 },
        },
      ],
    },
    {
      id: 'q3',
      question: '팀 프로젝트에서 나의 역할은?',
      choices: [
        {
          id: 'q3a',
          label: '방향을 정하고 책임지고 이끄는 쪽이다',
          effects: { 'charisma-warmth': 2 },
        },
        {
          id: 'q3b',
          label: '필요한 순간에만 툭 나서서 핵심을 짚는다',
          effects: { 'cool-humor': 2 },
        },
        {
          id: 'q3c',
          label: '분위기 메이커를 자처하며 텐션을 올린다',
          effects: { 'bright-serious': 2 },
        },
        {
          id: 'q3d',
          label: '묵묵히 맡은 몫을 해내며 크게 티내지 않는다',
          effects: { 'quiet-hype': 2 },
        },
      ],
    },
    {
      id: 'q4',
      question: '누군가 실수했을 때 나의 반응은?',
      choices: [
        {
          id: 'q4a',
          label: '침착하게 상황을 정리하고 다음 계획을 챙긴다',
          effects: { 'charisma-warmth': 2 },
        },
        {
          id: 'q4b',
          label: '대수롭지 않다는 듯 가볍게 한마디 던지고 넘어간다',
          effects: { 'cool-humor': 2 },
        },
        {
          id: 'q4c',
          label: '괜찮다며 밝게 웃어넘기고 분위기를 풀어준다',
          effects: { 'bright-serious': 2 },
        },
        {
          id: 'q4d',
          label: '별말 없이 조용히 자기 할 일을 계속한다',
          effects: { 'quiet-hype': 2 },
        },
      ],
    },
    {
      id: 'q5',
      question: '회식이나 모임 자리에서 나는?',
      choices: [
        {
          id: 'q5a',
          label: '자연스럽게 자리를 주도하고 사람들을 챙긴다',
          effects: { 'charisma-warmth': 2 },
        },
        {
          id: 'q5b',
          label: '크게 나서지 않고 한 발 떨어져서 지켜본다',
          effects: { 'cool-humor': 2 },
        },
        {
          id: 'q5c',
          label: '먼저 나서서 분위기를 띄우고 다 같이 놀자고 한다',
          effects: { 'bright-serious': 2 },
        },
        {
          id: 'q5d',
          label: '구석에서 조용히 자기 페이스대로 있는다',
          effects: { 'quiet-hype': 2 },
        },
      ],
    },
    {
      id: 'q6',
      question: '낯선 사람과 처음 대화할 때 나는?',
      choices: [
        {
          id: 'q6a',
          label: '먼저 리드해서 대화 주제를 정하고 이끌어간다',
          effects: { 'charisma-warmth': 2 },
        },
        {
          id: 'q6b',
          label: '짧고 무심하게 대답만 하고 만다',
          effects: { 'cool-humor': 2 },
        },
        {
          id: 'q6c',
          label: '신나서 이것저것 먼저 물어보며 대화를 이어간다',
          effects: { 'bright-serious': 2 },
        },
        {
          id: 'q6d',
          label: '상대가 먼저 말 걸어주길 기다리며 조용히 있는다',
          effects: { 'quiet-hype': 2 },
        },
      ],
    },
    {
      id: 'q7',
      question: '갈등 상황이 생겼을 때 나의 태도는?',
      choices: [
        {
          id: 'q7a',
          label: '상황을 정리하고 중심을 잡아 이끌어간다',
          effects: { 'charisma-warmth': 2 },
        },
        {
          id: 'q7b',
          label: '한 발 물러나 쿨하게 넘기려 한다',
          effects: { 'cool-humor': 2 },
        },
        {
          id: 'q7c',
          label: '분위기를 풀어보려 밝게 나서서 중재한다',
          effects: { 'bright-serious': 2 },
        },
        {
          id: 'q7d',
          label: '말을 아끼고 조용히 지켜본다',
          effects: { 'quiet-hype': 2 },
        },
      ],
    },
    {
      id: 'q8',
      question: '회의나 발표 중 내 모습은?',
      choices: [
        {
          id: 'q8a',
          label: '자신감 있게 발언하며 분위기를 주도한다',
          effects: { 'charisma-warmth': 2 },
        },
        {
          id: 'q8b',
          label: '필요한 말만 담백하게 하고 여유 있게 앉아있다',
          effects: { 'cool-humor': 2 },
        },
        {
          id: 'q8c',
          label: '적극적으로 리액션하며 활기차게 참여한다',
          effects: { 'bright-serious': 2 },
        },
        {
          id: 'q8d',
          label: '조용히 듣고만 있다가 꼭 필요할 때만 입을 연다',
          effects: { 'quiet-hype': 2 },
        },
      ],
    },
    {
      id: 'q9',
      question: '좋아하는 주제 이야기가 나오면 나는?',
      choices: [
        {
          id: 'q9a',
          label: '차분하게 핵심만 짚어가며 대화를 이끈다',
          effects: { 'charisma-warmth': 2 },
        },
        {
          id: 'q9b',
          label: '여전히 무심한 척하지만 은근히 할 말은 다 한다',
          effects: { 'cool-humor': 2 },
        },
        {
          id: 'q9c',
          label: '눈을 반짝이며 신나서 이야기를 쏟아낸다',
          effects: { 'bright-serious': 2 },
        },
        {
          id: 'q9d',
          label: '평소와 다르게 갑자기 텐션이 확 올라간다',
          effects: { 'quiet-hype': 2 },
        },
      ],
    },
    {
      id: 'q10',
      question: '오랜만에 만난 친구에게 자주 듣는 말은?',
      choices: [
        {
          id: 'q10a',
          label: '"여전히 든든하고 믿음직스러워"',
          effects: { 'charisma-warmth': 2 },
        },
        {
          id: 'q10b',
          label: '"여전히 시크하네, 근데 은근 웃겨"',
          effects: { 'cool-humor': 2 },
        },
        {
          id: 'q10c',
          label: '"여전히 밝고 에너지 넘쳐"',
          effects: { 'bright-serious': 2 },
        },
        {
          id: 'q10d',
          label: '"너 원래 이렇게 텐션 높았어?"',
          effects: { 'quiet-hype': 2 },
        },
      ],
    },
    {
      id: 'q11',
      question: '힘든 일이 있을 때 나의 태도는?',
      choices: [
        {
          id: 'q11a',
          label: '티내지 않고 알아서 상황을 정리하려 한다',
          effects: { 'charisma-warmth': 2 },
        },
        {
          id: 'q11b',
          label: '무덤덤하게 넘기며 별일 아니라는 듯 군다',
          effects: { 'cool-humor': 2 },
        },
        {
          id: 'q11c',
          label: '밝은 척하며 애써 텐션을 유지한다',
          effects: { 'bright-serious': 2 },
        },
        {
          id: 'q11d',
          label: '조용히 혼자 삭이다가 가끔 확 터뜨린다',
          effects: { 'quiet-hype': 2 },
        },
      ],
    },
  ],
  results: [
    {
      id: 'charisma-warmth',
      title: '카리스마 속 다정함형',
      shortTitle: '카리스마 다정',
      emoji: '🐻',
      summary: '보기엔 압도적인데, 알고 보면 누구보다 다정하다.',
      description:
        '처음 만나면 묘한 위압감이 느껴지는 타입이다. 목소리 톤이나 태도에서 자연스럽게 무게감이 느껴져서, 사람들은 은근히 어려워하거나 함부로 대하지 못한다. 그런데 조금만 친해지면 완전히 다른 얼굴이 나온다. 상대방의 사소한 표정 변화까지 캐치하고, 힘든 티를 안 내도 먼저 다가가 챙기는 스타일이다. 겉으로 풍기는 카리스마와 속에 감춰둔 다정함의 온도차가 클수록, 친해진 사람들은 그 반전에 완전히 빠져버린다.',
      strengths: [
        '처음 보는 사람도 은근히 믿고 따르게 만드는 힘이 있다',
        '친해진 사람의 작은 변화도 귀신같이 알아챈다',
        '위기 상황에서 흔들리지 않고 중심을 잡아준다',
      ],
      cautions: [
        '먼저 다가가기 어렵다는 오해를 자주 받는다',
        '속마음을 잘 안 드러내서 서운함이 쌓여도 티가 안 난다',
      ],
      recommendations: [
        '가끔은 그 다정함을 먼저, 티 나게 표현해보자',
        '어려워하는 사람에게 짧은 농담 한마디만 건네도 거리가 확 좁혀진다',
      ],
      shareText: '나는 카리스마 속 다정함형 - 어려운 것 같지만 사실 누구보다 챙긴다',
      color: '#7e22ce',
    },
    {
      id: 'cool-humor',
      title: '쿨함 속 유머러스형',
      shortTitle: '쿨한 개그',
      emoji: '😏',
      summary: '표정은 시크한데, 입을 열면 분위기가 뒤집힌다.',
      description:
        '리액션이 크지 않고 감정 기복도 잘 안 보여서, 처음엔 무심하거나 살짝 차가운 사람으로 비춰지는 타입이다. 하지만 몇 마디 나눠보면 반전이 시작된다. 담담한 표정으로 던지는 한마디가 그 자리의 텐션을 확 끌어올리고, 정작 본인은 하나도 안 웃는 채로 좌중을 웃기는 게 더 웃기다는 평을 자주 듣는다. 애써 웃기려 하지 않는데도 저절로 웃음이 터지게 만드는, 힘 안 들이는 유머 감각의 소유자다.',
      strengths: [
        '힘을 안 줘도 자연스럽게 분위기를 살린다',
        '예상치 못한 타이밍에 웃음 포인트를 만든다',
        '과하게 감정적으로 반응하지 않아 신뢰감을 준다',
      ],
      cautions: [
        '진지한 이야기를 할 때도 장난처럼 오해받을 수 있다',
        '무심해 보여서 관심 없다는 오해를 사기 쉽다',
      ],
      recommendations: [
        '진지해야 할 순간엔 표정과 톤을 살짝 바꿔주자',
        '웃긴 타이밍 다음엔 진심 한마디를 더해보자',
      ],
      shareText: '나는 쿨함 속 유머러스형 - 무표정으로 분위기를 접수한다',
      color: '#a21caf',
    },
    {
      id: 'bright-serious',
      title: '발랄함 속 진지함형',
      shortTitle: '발랄 진지',
      emoji: '🐰',
      summary: '텐션은 최고인데, 생각은 누구보다 깊다.',
      description:
        '처음 보면 에너지 넘치고 밝은 분위기 메이커로 느껴지는 타입이다. 리액션도 좋고 말도 많아서 가볍게만 볼 수 있는데, 사실 그 안에는 꽤 진지하고 신중한 고민이 자리 잡고 있다. 중요한 결정 앞에서는 누구보다 꼼꼼하게 따지고, 가벼운 대화 중에도 은근히 상대방의 말을 오래 곱씹는 편이다. 밝은 텐션 뒤에 숨겨진 이 진지함을 알게 된 사람들은, 생각보다 훨씬 깊은 사람이었다며 놀라곤 한다.',
      strengths: [
        '밝은 분위기로 사람들을 편하게 만든다',
        '가벼워 보여도 중요한 순간엔 신중하게 판단한다',
        '상대방의 말을 오래 기억하고 진심으로 곱씹는다',
      ],
      cautions: [
        '가볍게 보여서 진지한 고민을 나누기 어렵다는 말을 듣는다',
        '혼자 끙끙 앓다가 뒤늦게 고민을 털어놓는 편이다',
      ],
      recommendations: [
        '고민이 있을 땐 발랄한 텐션 그대로 솔직하게 꺼내보자',
        '가끔은 진지한 얼굴도 보여줘야 사람들이 더 깊이 이해해준다',
      ],
      shareText: '나는 발랄함 속 진지함형 - 텐션은 하이, 생각은 딥이다',
      color: '#c026d3',
    },
    {
      id: 'quiet-hype',
      title: '조용함 속 텐션 폭발형',
      shortTitle: '조용한 텐션',
      emoji: '🌋',
      summary: '평소엔 잠잠하다가, 스위치 켜지면 아무도 못 말린다.',
      description:
        '평소엔 말수도 적고 리액션도 크지 않아서, 조용하고 차분한 사람으로만 여겨지는 타입이다. 그런데 좋아하는 주제가 나오거나 마음 맞는 사람들과 있을 때는 완전히 다른 사람이 된다. 눌러왔던 텐션이 한꺼번에 터지면서 누구보다 신나게 떠들고 웃고 노는 모습에, 주변 사람들은 매번 놀란다. 평소의 잠잠함과 터졌을 때의 텐션 사이 낙차가 클수록, "저런 모습이 있었어?"라는 반응을 자주 이끌어낸다.',
      strengths: [
        '불필요한 텐션 소모 없이 에너지를 아껴둔다',
        '좋아하는 순간엔 누구보다 진심으로 몰입한다',
        '반전 매력으로 사람들에게 강한 인상을 남긴다',
      ],
      cautions: [
        '평소 모습만 보고 재미없는 사람으로 오해받을 수 있다',
        '텐션이 오르내리는 낙차가 커서 주변이 당황할 때가 있다',
      ],
      recommendations: [
        '좋아하는 걸 평소에도 살짝씩 티내보자',
        '텐션 터지는 순간을 스스로도 즐겁게 받아들이자',
      ],
      shareText: '나는 조용함 속 텐션 폭발형 - 스위치 켜지면 아무도 못 말린다',
      color: '#86198f',
    },
  ],
}
