import type { TestDefinition } from '../../types/test'

export const workDinnerTest: TestDefinition = {
  slug: 'work-dinner',
  title: '나의 회식·모임 캐릭터 테스트',
  shortTitle: '회식 캐릭터',
  description: '회식 자리에 앉는 순간, 나는 어떤 캐릭터가 될까?',
  intro:
    '누군가는 회식이 즐겁고, 누군가는 참석 확인 버튼을 누르는 순간부터 머리가 아파요. 정답은 없어요, 그냥 스타일이 다를 뿐이니까요. 11개 질문으로 회식이나 모임 자리에서 나는 어떤 캐릭터인지 확인해보세요. 술을 마시든 안 마시든, 오래 있든 일찍 가든 모두 나답게 즐기는 방법이 있어요.',
  category: '직장생활',
  emoji: '🍻',
  estimatedMinutes: 3,
  theme: { color: '#ef4444', gradientFrom: '#fca5a5', gradientTo: '#b91c1c' },
  isPublished: true,
  isNew: true,
  relatedTestSlugs: ['spending-style', 'travel-style'],
  seo: {
    title: '나의 회식·모임 캐릭터 테스트 | 오늘의 테스트',
    description:
      '분위기 메이커형, 조용한 서포터형, 얼른 집에 가고 싶은형, 계획된 참석형, 진지한 관찰자형. 11가지 질문으로 나의 회식·모임 캐릭터를 재미있게 알아보세요.',
  },
  questions: [
    {
      id: 'q1',
      question: '단체 채팅방에 회식 공지가 올라왔을 때 내 반응은?',
      choices: [
        { id: 'q1a', label: '가야죠… 참석 체크는 확실하게 눌러둬요', effects: { 'quiet-supporter': 2 } },
        { id: 'q1b', label: '안 갈 방법부터 슬쩍 찾아봐요', effects: { 'early-exit': 2 } },
        { id: 'q1c', label: '몇 시 시작에 몇 시 끝인지부터 확인해요', effects: { 'planned-attendee': 2 } },
        { id: 'q1d', label: '이번엔 또 무슨 얘기가 나올지 은근히 궁금해요', effects: { 'quiet-observer': 2, 'vibe-maker': 1 } },
      ],
    },
    {
      id: 'q2',
      question: '회식 자리에 도착해서 앉는 위치는?',
      choices: [
        { id: 'q2a', label: '당연히 중앙 자리, 다 같이 보이는 곳에 앉아요', effects: { 'vibe-maker': 2 } },
        { id: 'q2b', label: '출입구 가까운 자리부터 슬쩍 사수해요', effects: { 'early-exit': 2 } },
        { id: 'q2c', label: '말 잘 통하는 사람 옆자리를 미리 노려요', effects: { 'planned-attendee': 2 } },
        { id: 'q2d', label: '구석 자리에 앉아서 전체를 한눈에 살펴봐요', effects: { 'quiet-observer': 2, 'quiet-supporter': 1 } },
      ],
    },
    {
      id: 'q3',
      question: '메뉴와 음료를 정할 때 나는?',
      choices: [
        { id: 'q3a', label: '다 같이 좋아할 만한 메뉴로 신나게 주도해요', effects: { 'vibe-maker': 2 } },
        { id: 'q3b', label: '다들 뭐 시키는지 보고 무난하게 맞춰요', effects: { 'quiet-supporter': 2 } },
        { id: 'q3c', label: '미리 메뉴판을 봐두고 뭘 시킬지 정해뒀어요', effects: { 'planned-attendee': 2 } },
        { id: 'q3d', label: '다른 사람들이 뭘 좋아하는지 눈여겨봐요', effects: { 'quiet-observer': 2, 'early-exit': 1 } },
      ],
    },
    {
      id: 'q4',
      question: '건배할 시간! 나는?',
      choices: [
        { id: 'q4a', label: '제가 나서서 건배사 한마디 하고 분위기를 띄워요', effects: { 'vibe-maker': 2 } },
        { id: 'q4b', label: '시키면 짧게 하고, 안 시키면 그냥 웃으며 잔을 들어요', effects: { 'quiet-supporter': 2 } },
        { id: 'q4c', label: '저는 음료로 건배해도 괜찮아요, 굳이 술을 마시진 않아요', effects: { 'early-exit': 2 } },
        { id: 'q4d', label: '다른 사람 건배사 듣는 게 저는 더 재밌어요', effects: { 'quiet-observer': 2, 'planned-attendee': 1 } },
      ],
    },
    {
      id: 'q5',
      question: '옆자리 상사나 선배가 말을 걸어올 때 나는?',
      choices: [
        { id: 'q5a', label: '먼저 이런저런 얘기로 대화를 이끌어가요', effects: { 'vibe-maker': 2 } },
        { id: 'q5b', label: '고개 끄덕이며 리액션을 열심히 해드려요', effects: { 'quiet-supporter': 2 } },
        { id: 'q5c', label: '적당히 대답하고 빨리 대화가 끝나길 바라요', effects: { 'early-exit': 2 } },
        { id: 'q5d', label: '이런 타이밍에 할 얘기를 미리 준비해뒀어요', effects: { 'planned-attendee': 2, 'quiet-observer': 1 } },
      ],
    },
    {
      id: 'q6',
      question: '오늘따라 술을 마시고 싶지 않을 때 나는?',
      choices: [
        { id: 'q6a', label: '눈치껏 잔만 채워두고 조용히 넘어가요', effects: { 'quiet-supporter': 2 } },
        { id: 'q6b', label: '괜찮다고 확실히 말하고 음료로 바꿔 마셔요', effects: { 'early-exit': 2 } },
        { id: 'q6c', label: '다음 날 일정을 핑계로 미리 준비해뒀어요', effects: { 'planned-attendee': 2, 'vibe-maker': 1 } },
        { id: 'q6d', label: '굳이 설명 안 하고 그냥 제 페이스대로 마셔요', effects: { 'quiet-observer': 2 } },
      ],
    },
    {
      id: 'q7',
      question: '분위기가 무르익어서 게임이나 노래방 얘기가 나오면?',
      choices: [
        { id: 'q7a', label: '제가 먼저 나서서 게임을 제안하고 분위기를 띄워요', effects: { 'vibe-maker': 2 } },
        { id: 'q7b', label: '이때다 싶어서 조용히 자리를 뜰 준비를 해요', effects: { 'early-exit': 2, 'quiet-supporter': 1 } },
        { id: 'q7c', label: '노래방을 갈지 말지 다음 일정까지 계산해봐요', effects: { 'planned-attendee': 2 } },
        { id: 'q7d', label: '다들 노는 모습 구경하는 게 제일 재밌어요', effects: { 'quiet-observer': 2 } },
      ],
    },
    {
      id: 'q8',
      question: '"2차 가자!"라는 말이 나왔을 때 나는?',
      choices: [
        { id: 'q8a', label: '좋아요! 하면서 먼저 자리를 옮기자고 해요', effects: { 'vibe-maker': 2 } },
        { id: 'q8b', label: '다들 가면 저도 슬쩍 따라가요', effects: { 'quiet-supporter': 2, 'early-exit': 1 } },
        { id: 'q8c', label: '2차를 갈지 말지 미리 정해둔 제 기준이 있어요', effects: { 'planned-attendee': 2 } },
        { id: 'q8d', label: '가서 사람들 얘기를 더 들어볼까 싶어요', effects: { 'quiet-observer': 2 } },
      ],
    },
    {
      id: 'q9',
      question: '회식 중 대화 주제가 흘러가는 걸 보면 나는?',
      choices: [
        { id: 'q9a', label: '제가 재밌는 얘기를 꺼내서 다 같이 웃게 만들어요', effects: { 'vibe-maker': 2, 'planned-attendee': 1 } },
        { id: 'q9b', label: '다른 사람 얘기에 맞장구쳐주는 게 제일 편해요', effects: { 'quiet-supporter': 2 } },
        { id: 'q9c', label: '언제 끝나나 대화 중에도 시계를 힐끔 봐요', effects: { 'early-exit': 2 } },
        { id: 'q9d', label: '평소엔 안 하던 진지한 얘기가 나오나 지켜봐요', effects: { 'quiet-observer': 2 } },
      ],
    },
    {
      id: 'q10',
      question: '회식이 끝나갈 시간, 눈치게임이 시작되면 나는?',
      choices: [
        { id: 'q10a', label: '끝까지 남아서 마무리까지 신나게 즐겨요', effects: { 'vibe-maker': 2, 'quiet-observer': 1 } },
        { id: 'q10b', label: '다들 일어날 때 같이 조용히 따라 일어나요', effects: { 'quiet-supporter': 2 } },
        { id: 'q10c', label: '제일 먼저 일어날 타이밍만 계속 노려요', effects: { 'early-exit': 2 } },
        { id: 'q10d', label: '미리 정해둔 시간에 딱 맞춰 일어나요', effects: { 'planned-attendee': 2 } },
      ],
    },
    {
      id: 'q11',
      question: '다음 날 출근해서 어제 회식을 떠올리면?',
      choices: [
        { id: 'q11a', label: '다들 무사히 집에 잘 갔는지 슬쩍 안부를 물어요', effects: { 'quiet-supporter': 2 } },
        { id: 'q11b', label: '어제 일찍 들어가길 잘했다며 뿌듯해해요', effects: { 'early-exit': 2, 'vibe-maker': 1 } },
        { id: 'q11c', label: '예상했던 대로 흘러갔다며 스스로 뿌듯해해요', effects: { 'planned-attendee': 2 } },
        { id: 'q11d', label: '어제 있었던 일들을 조용히 곱씹어봐요', effects: { 'quiet-observer': 2 } },
      ],
    },
  ],
  results: [
    {
      id: 'vibe-maker',
      title: '분위기 메이커형',
      shortTitle: '분위기 메이커',
      emoji: '🎉',
      summary: '회식 자리에 활기를 불어넣는, 이 자리의 숨은 진행자',
      description:
        '당신이 있는 테이블은 늘 웃음소리가 끊이지 않아요. 먼저 말을 걸고, 먼저 잔을 채우고, 먼저 분위기를 살피는 사람이라 어색한 침묵이 생길 틈이 없어요. 술이 있든 없든 사람들과 어울리는 그 순간 자체를 즐기는 타입이에요.',
      strengths: ['어색한 분위기를 순식간에 풀어주는 능력이 있어요', '누구와 앉아도 대화를 이어갈 수 있어요'],
      cautions: ['정작 본인의 텐션을 챙기는 걸 깜빡할 때가 있어요', '가끔은 조용히 쉬고 싶은 사람들의 신호를 놓칠 수 있어요'],
      recommendations: ['오늘은 내 얘기 말고 옆사람 얘기를 먼저 들어보세요', '분위기를 띄운 만큼, 나를 위한 휴식도 꼭 챙기세요'],
      shareText: '나는 회식 자리의 분위기 메이커형! 어디서든 텐션을 올려요',
      color: '#dc2626',
    },
    {
      id: 'quiet-supporter',
      title: '조용한 서포터형',
      shortTitle: '조용한 서포터',
      emoji: '🤝',
      summary: '나서진 않지만, 누구보다 자리를 편안하게 만드는 사람',
      description:
        '당신은 분위기를 주도하기보단 맞춰주는 편이에요. 리액션도 좋고 눈치도 빨라서, 옆에 있으면 다들 편안함을 느껴요. 조용히 있는 것 같아도 이 자리에서 누가 불편한지 제일 먼저 알아채는 사람이기도 해요.',
      strengths: ['상대의 말에 잘 공감해주고 배려심이 깊어요', '조용히 있어도 함께 있는 사람을 편하게 만들어요'],
      cautions: ['내 의견을 말할 타이밍을 자꾸 놓칠 수 있어요', '맞춰주다 보니 정작 내가 하고 싶은 건 못 할 때가 있어요'],
      recommendations: ['오늘은 하고 싶은 말 한마디 정도는 먼저 꺼내보세요', '맞춰주는 것만큼, 내가 편한 자리인지도 한번 살펴보세요'],
      shareText: '나는 회식 자리의 조용한 서포터형! 있는 듯 없는 듯 분위기를 지켜요',
      color: '#f87171',
    },
    {
      id: 'early-exit',
      title: '얼른 집에 가고 싶은형',
      shortTitle: '칼퇴 지향',
      emoji: '🏃',
      summary: '누구보다 솔직하게, 내 시간이 제일 소중한 사람',
      description:
        '당신에게 회식은 필수 참석이지 필수 만족은 아니에요. 술을 마시든 안 마시든 크게 상관없고, 그보다 중요한 건 얼마나 빨리, 얼마나 편하게 집에 돌아가느냐예요. 눈치 보지 않고 내 페이스를 지키는 당당함이 매력이에요.',
      strengths: ['내가 원하는 걸 솔직하게 표현할 줄 알아요', '술자리 압박에 흔들리지 않는 자기 기준이 있어요'],
      cautions: ['너무 빨리 자리를 뜨면 아쉬워하는 사람도 있을 수 있어요', '가끔은 그 자리에서 나눈 대화가 뜻밖의 기회가 되기도 해요'],
      recommendations: ['가기 전 딱 한마디, 좋았던 부분을 짚어주고 나서보세요', '일찍 가는 대신 있는 동안은 눈 맞추고 제대로 들어보세요'],
      shareText: '나는 회식 자리의 얼른 집에 가고 싶은형! 내 시간이 제일 소중해요',
      color: '#b91c1c',
    },
    {
      id: 'planned-attendee',
      title: '계획된 참석형',
      shortTitle: '계획된 참석',
      emoji: '📋',
      summary: '즉흥보다 전략, 회식도 나만의 계획표대로',
      description:
        '당신은 회식 자리도 미리 그림을 그려두는 편이에요. 몇 시에 시작해서 몇 시에 끝날지, 2차를 갈지 말지, 언제 인사드릴지까지 대충 정해두고 움직여요. 즉흥적으로 보이는 자리에서도 나만의 리듬을 지키는 사람이에요.',
      strengths: ['상황을 미리 그려보고 침착하게 대응해요', '분위기에 휩쓸리지 않고 내 페이스를 지켜요'],
      cautions: ['계획에 없던 상황이 생기면 살짝 당황할 수 있어요', '너무 계산적으로 보여서 딱딱한 인상을 줄 수도 있어요'],
      recommendations: ['오늘 하루는 계획표를 살짝 내려놓고 흘러가는 대로 즐겨보세요', '예상 밖의 순간에도 웃어넘기는 여유를 하나 챙겨보세요'],
      shareText: '나는 회식 자리의 계획된 참석형! 즉흥보다 전략이 편해요',
      color: '#ef4444',
    },
    {
      id: 'quiet-observer',
      title: '진지한 관찰자형',
      shortTitle: '진지한 관찰자',
      emoji: '🧐',
      summary: '말은 적어도, 이 자리의 모든 걸 다 보고 있는 사람',
      description:
        '당신은 회식 자리에서 말수는 적지만 관찰력은 최고예요. 누가 무슨 얘기를 하는지, 분위기가 어떻게 흘러가는지 조용히 다 파악하고 있어요. 시끌벅적한 분위기보다 한 걸음 떨어져서 지켜보는 게 더 편한 타입이에요.',
      strengths: ['상황과 사람을 파악하는 눈이 예리해요', '조용히 있어도 필요한 순간엔 핵심을 짚어줘요'],
      cautions: ['속마음을 잘 표현하지 않아 오해를 살 수도 있어요', '관찰만 하다가 대화에 낄 타이밍을 놓칠 수 있어요'],
      recommendations: ['눈치챈 걸 한 번쯤은 소리 내어 말해보세요', '구경만 하지 말고 대화에 살짝 발을 담가보세요'],
      shareText: '나는 회식 자리의 진지한 관찰자형! 조용히 다 보고 있어요',
      color: '#fca5a5',
    },
  ],
}
