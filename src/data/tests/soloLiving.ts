import type { TestDefinition } from '../../types/test'

export const soloLivingTest: TestDefinition = {
  slug: 'solo-living',
  title: '나의 자취 생활 스타일 테스트',
  shortTitle: '자취 스타일',
  description: '냉장고부터 청소, 저녁 메뉴까지 - 내 자취 생활은 어떤 스타일일까요?',
  intro:
    '자취를 시작하면 누구나 자기만의 생활 방식이 생기기 마련이에요. 누군가는 각 잡고 정리하는 데서 안정감을 느끼고, 누군가는 배달 앱 메뉴판을 줄줄 꿰고 있고, 또 누군가는 직접 만들어 먹는 데서 뿌듯함을 느끼죠. 정답은 없어요, 그저 나답게 사는 방식이 다를 뿐이에요. 11개의 질문에 솔직하게 답하고 나의 자취 생활 스타일에 이름을 붙여보세요.',
  category: '라이프스타일',
  emoji: '🏠',
  estimatedMinutes: 3,
  theme: { color: '#16a34a', gradientFrom: '#4ade80', gradientTo: '#15803d' },
  isPublished: true,
  isNew: true,
  relatedTestSlugs: ['holiday-gathering', 'pet-care-style'],
  seo: {
    title: '나의 자취 생활 스타일 테스트 - 정리왕부터 홈카페형까지 | 오늘의 테스트',
    description:
      '냉장고 속부터 저녁 메뉴, 청소 습관까지! 3분이면 알 수 있는 자취 생활 스타일 테스트로 나만의 독립생활 캐릭터를 확인해보세요.',
  },
  questions: [
    {
      id: 'q1',
      question: '냉장고 문을 열었을 때 내 모습은?',
      choices: [
        {
          id: 'q1a',
          label: '유통기한 순서대로 칸칸이 정리돼 있어서 볼 때마다 뿌듯해요',
          effects: { 'tidy-master': 2 },
        },
        {
          id: 'q1b',
          label: '텅 비어있어도 걱정 없어요, 오늘 저녁도 배달 시키면 그만이거든요',
          effects: { 'delivery-gourmet': 2 },
        },
        {
          id: 'q1c',
          label: '미리 손질해둔 재료랑 밑반찬으로 알차게 채워져 있어요',
          effects: { 'self-sufficient-chef': 2 },
        },
        {
          id: 'q1d',
          label: '생수랑 계란, 그리고 아끼는 원두 한 봉지 정도만 있어요',
          effects: { 'minimal-survivor': 2, 'home-cafe': 1 },
        },
      ],
    },
    {
      id: 'q2',
      question: '저녁 메뉴를 정할 때 나는?',
      choices: [
        {
          id: 'q2a',
          label: '오늘 할 일부터 정리하고, 그 사이 짬을 내서 메뉴를 정해요',
          effects: { 'tidy-master': 2 },
        },
        {
          id: 'q2b',
          label: '고민 없이 바로 배달 앱부터 켜요',
          effects: { 'delivery-gourmet': 2 },
        },
        {
          id: 'q2c',
          label: '냉장고 속 재료로 뭘 만들 수 있을지부터 생각해요',
          effects: { 'self-sufficient-chef': 2 },
        },
        {
          id: 'q2d',
          label: '일단 커피나 차부터 내리고, 간단한 걸로 편하게 정해요',
          effects: { 'home-cafe': 2, 'minimal-survivor': 1 },
        },
      ],
    },
    {
      id: 'q3',
      question: '갑자기 친구가 놀러 온다고 하면?',
      choices: [
        {
          id: 'q3a',
          label: '며칠 전부터 구역별로 계획 세워서 순서대로 싹 치워요',
          effects: { 'tidy-master': 2 },
        },
        {
          id: 'q3b',
          label: '메뉴 고민 없이 맛있는 걸로 몇 가지 시켜서 차려요',
          effects: { 'delivery-gourmet': 2 },
        },
        {
          id: 'q3c',
          label: '눈에 보이는 것만 정리하고 최소한으로 준비해요',
          effects: { 'minimal-survivor': 2 },
        },
        {
          id: 'q3d',
          label: '직접 만든 간단한 요리랑 내린 커피로 소소하게 대접해요',
          effects: { 'home-cafe': 2, 'self-sufficient-chef': 1 },
        },
      ],
    },
    {
      id: 'q4',
      question: '설거지거리가 쌓였을 때 나는?',
      choices: [
        {
          id: 'q4a',
          label: '먹고 나면 바로바로 해서 쌓일 일이 별로 없어요',
          effects: { 'tidy-master': 2 },
        },
        {
          id: 'q4b',
          label: '요리하다 보니 그릇이 많이 나오지만 그때그때 정리해요',
          effects: { 'self-sufficient-chef': 2 },
        },
        {
          id: 'q4c',
          label: '그릇 개수를 최소한으로 써서 설거지 자체를 줄여요',
          effects: { 'minimal-survivor': 2 },
        },
        {
          id: 'q4d',
          label: '예쁜 머그컵 보이면 커피 한 잔 내려 마시고, 저녁은 어차피 시켜 먹을 거라 크게 신경 안 써요',
          effects: { 'home-cafe': 2, 'delivery-gourmet': 1 },
        },
      ],
    },
    {
      id: 'q5',
      question: '주말 하루가 통째로 비었을 때 나는?',
      choices: [
        {
          id: 'q5a',
          label: '배달 앱 켜놓고 먹고 싶었던 메뉴를 하나씩 다 시켜봐요',
          effects: { 'delivery-gourmet': 2 },
        },
        {
          id: 'q5b',
          label: '밀린 반찬을 왕창 만들어서 한 주 치를 채워둬요',
          effects: { 'self-sufficient-chef': 2 },
        },
        {
          id: 'q5c',
          label: '그냥 최소한의 끼니만 때우고 종일 뒹굴거려요',
          effects: { 'minimal-survivor': 2 },
        },
        {
          id: 'q5d',
          label: '원두를 갈아서 나만의 카페를 열고, 그 김에 주변 정리도 깔끔하게 해요',
          effects: { 'home-cafe': 2, 'tidy-master': 1 },
        },
      ],
    },
    {
      id: 'q6',
      question: '장을 보러 갈 때 나의 모습은?',
      choices: [
        {
          id: 'q6a',
          label: '필요한 것만 리스트로 정리해서 딱 정해진 만큼만 사요',
          effects: { 'tidy-master': 2 },
        },
        {
          id: 'q6b',
          label: '장보기 자체가 귀찮아서 필요할 때마다 그냥 시켜 먹어요',
          effects: { 'delivery-gourmet': 2 },
        },
        {
          id: 'q6c',
          label: '일주일 치 재료를 넉넉히 사서 미리 손질해둬요',
          effects: { 'self-sufficient-chef': 2 },
        },
        {
          id: 'q6d',
          label: '귀찮아서 생필품만 후딱 사는데, 좋아하는 커피만은 꼭 챙겨요',
          effects: { 'minimal-survivor': 2, 'home-cafe': 1 },
        },
      ],
    },
    {
      id: 'q7',
      question: '방 청소는 보통 어떻게 하나요?',
      choices: [
        {
          id: 'q7a',
          label: '요일별로 청소 루틴이 정해져 있어서 그대로 실천해요',
          effects: { 'tidy-master': 2 },
        },
        {
          id: 'q7b',
          label: '청소는 미루다가 배달 그릇 쌓일 때쯤 한 번에 몰아서 해요',
          effects: { 'delivery-gourmet': 2 },
        },
        {
          id: 'q7c',
          label: '요리하다 어질러진 부엌만큼은 바로바로 치워요',
          effects: { 'self-sufficient-chef': 2 },
        },
        {
          id: 'q7d',
          label: '청소보다 물건 줄이고 소품 배치로 카페 분위기 내는 데 더 신경 써요',
          effects: { 'home-cafe': 2, 'minimal-survivor': 1 },
        },
      ],
    },
    {
      id: 'q8',
      question: '야식이 당기는 밤, 나는?',
      choices: [
        {
          id: 'q8a',
          label: '정리해둔 냉동실에서 얼려둔 간식을 꺼내 먹어요',
          effects: { 'tidy-master': 2 },
        },
        {
          id: 'q8b',
          label: '고민 없이 바로 배달 앱을 켜요',
          effects: { 'delivery-gourmet': 2 },
        },
        {
          id: 'q8c',
          label: '그냥 물 한 잔 마시고 가볍게 넘겨요',
          effects: { 'minimal-survivor': 2 },
        },
        {
          id: 'q8d',
          label: '따뜻한 차 한 잔이랑 냉장고에 있던 밑반찬을 살짝 곁들여요',
          effects: { 'home-cafe': 2, 'self-sufficient-chef': 1 },
        },
      ],
    },
    {
      id: 'q9',
      question: '빨래가 잔뜩 밀렸을 때 나는?',
      choices: [
        {
          id: 'q9a',
          label: '빨래 요일을 정해놔서 밀릴 일이 별로 없어요',
          effects: { 'tidy-master': 2 },
        },
        {
          id: 'q9b',
          label: '요리하다 보니 앞치마랑 행주 빨래가 자주 나와서 자주 돌려요',
          effects: { 'self-sufficient-chef': 2 },
        },
        {
          id: 'q9c',
          label: '입을 옷이 없어질 때까지 버티다 한 번에 몰아서 해요',
          effects: { 'minimal-survivor': 2 },
        },
        {
          id: 'q9d',
          label: '빨래방 가는 김에 좋아하는 음료 한 잔 사서 여유를 즐기고, 그날 저녁은 배달로 편하게 때워요',
          effects: { 'home-cafe': 2, 'delivery-gourmet': 1 },
        },
      ],
    },
    {
      id: 'q10',
      question: '자취 n년차, 나의 살림 내공은?',
      choices: [
        {
          id: 'q10a',
          label: '단골 메뉴들이 다 꿰어져서 고민 없이 바로 주문해요',
          effects: { 'delivery-gourmet': 2 },
        },
        {
          id: 'q10b',
          label: '손 안 대고도 뚝딱 만들어내는 나만의 레시피가 꽤 많아요',
          effects: { 'self-sufficient-chef': 2 },
        },
        {
          id: 'q10c',
          label: '짐이 계속 줄어서 이제 살림이 거의 없다시피 해요',
          effects: { 'minimal-survivor': 2 },
        },
        {
          id: 'q10d',
          label: '커피 머신에 원두까지 갖추고, 도구들도 라벨링해서 깔끔하게 정리해뒀어요',
          effects: { 'home-cafe': 2, 'tidy-master': 1 },
        },
      ],
    },
    {
      id: 'q11',
      question: '친구들을 초대해서 집들이를 한다면?',
      choices: [
        {
          id: 'q11a',
          label: '며칠 전부터 청소 계획 세워서 구석구석 완벽하게 정리해요',
          effects: { 'tidy-master': 2 },
        },
        {
          id: 'q11b',
          label: '메뉴는 고민 없이 맛있는 걸로 여러 개 시켜서 차려요',
          effects: { 'delivery-gourmet': 2 },
        },
        {
          id: 'q11c',
          label: '손수 몇 가지 요리를 정성껏 만들어서 대접해요',
          effects: { 'self-sufficient-chef': 2 },
        },
        {
          id: 'q11d',
          label: '거창하게 안 하고 편하게 먹을 거 몇 개만 딱 준비하고, 마지막엔 직접 내린 커피로 마무리해요',
          effects: { 'minimal-survivor': 2, 'home-cafe': 1 },
        },
      ],
    },
  ],
  results: [
    {
      id: 'tidy-master',
      title: '자취방 정리왕형',
      shortTitle: '정리왕',
      emoji: '🧹',
      summary: '작은 공간도 각 잡힌 질서로 채우는 당신',
      description:
        '당신에게 자취방은 작지만 완벽하게 통제된 나만의 왕국이에요. 청소 요일이 정해져 있고, 냉장고 속 반찬통 하나까지 자리가 있죠. 어질러진 걸 그냥 못 넘기는 성격 덕분에 방은 늘 손님 맞을 준비가 되어 있고, 그 자체가 은근한 자부심이기도 해요. 다만 완벽하게 정리된 공간을 유지하려다 보니 가끔은 스스로에게 너무 엄격한 기준을 들이대고 있진 않은지 살펴볼 필요도 있어요.',
      strengths: [
        '작은 공간도 효율적으로 활용하는 감각이 뛰어나요',
        '루틴을 꾸준히 지켜내는 실행력이 있어요',
        '언제 누가 와도 자신 있게 문을 열어줄 수 있어요',
      ],
      cautions: [
        '완벽한 정리 기준 때문에 스스로를 몰아붙일 수 있어요',
        '가끔은 어지러운 하루도 괜찮다는 걸 잊기 쉬워요',
      ],
      recommendations: [
        '오늘 하루는 정리 목록에서 한 가지를 과감히 빼보세요',
        '완벽함보다 편안함에 점수를 더 줘보는 날을 만들어보세요',
      ],
      shareText: '나는 작은 방도 각 잡고 사는, 자취방 정리왕형!',
      color: '#16a34a',
    },
    {
      id: 'delivery-gourmet',
      title: '배달음식 마스터형',
      shortTitle: '배달 마스터',
      emoji: '🛵',
      summary: '메뉴판을 이미 다 꿰고 있는 배달 고수',
      description:
        '당신에게 저녁 메뉴 고민은 5분이면 끝나는 일이에요. 어떤 날엔 뭐가 당기는지, 어떤 조합이 실패 없는지 이미 다 알고 있으니까요. 요리 시간을 아껴서 다른 데 쓰는 실속파이자, 바쁜 하루 끝에 나를 위한 작은 보상을 잘 챙길 줄 아는 사람이기도 해요. 다만 매번 같은 방식에만 의존하다 보면 가끔은 내 손으로 뭔가 만들어보는 재미를 놓치고 있을 수도 있어요.',
      strengths: [
        '결정을 빠르고 효율적으로 내리는 편이에요',
        '바쁜 하루 속에서도 나를 위한 보상을 잘 챙겨요',
        '새로운 메뉴에 도전하는 걸 두려워하지 않아요',
      ],
      cautions: [
        '늘 같은 방식에 의존하다 보면 선택의 즐거움이 줄어들 수 있어요',
        '가끔은 직접 만들어보는 재미를 놓치고 있을 수 있어요',
      ],
      recommendations: [
        '한 달에 한 번은 직접 재료를 사서 요리에 도전해보세요',
        '자주 시키는 메뉴 대신 안 먹어본 걸 골라보는 것도 즐거워요',
      ],
      shareText: '나는 메뉴판을 이미 다 꿰고 있는, 배달음식 마스터형!',
      color: '#22c55e',
    },
    {
      id: 'self-sufficient-chef',
      title: '자급자족 요리형',
      shortTitle: '자급자족 셰프',
      emoji: '🍳',
      summary: '직접 만들어 먹는 데서 뿌듯함을 느끼는 당신',
      description:
        '당신은 장을 보고, 재료를 손질하고, 완성된 한 끼를 마주하는 그 과정 자체를 즐기는 사람이에요. 냉장고를 열면 언제나 밑반찬 몇 가지가 든든하게 채워져 있고, 그게 하루를 살아가는 작은 자신감이 되어주기도 해요. 손이 많이 가는 만큼 시간과 정성도 그만큼 들어가니, 가끔은 스스로에게 요리 안 하는 날의 자유도 허락해주는 게 좋아요.',
      strengths: [
        '내 손으로 직접 챙기는 실력과 정성이 있어요',
        '재료 관리와 계획적인 식습관에 능숙해요',
        '만든 음식을 나누는 데서 기쁨을 느껴요',
      ],
      cautions: [
        '요리에 들어가는 시간과 품을 과소평가하기 쉬워요',
        '가끔은 요리 안 하는 날의 홀가분함도 필요해요',
      ],
      recommendations: [
        '일주일에 하루쯤은 아무것도 안 만드는 날로 정해보세요',
        '만든 요리 사진을 기록해두면 나만의 성취 앨범이 돼요',
      ],
      shareText: '나는 내 손으로 뚝딱 만들어 먹는, 자급자족 요리형!',
      color: '#15803d',
    },
    {
      id: 'minimal-survivor',
      title: '미니멀 생존형',
      shortTitle: '미니멀 생존',
      emoji: '🎒',
      summary: '군더더기 없이 딱 필요한 만큼만 사는 당신',
      description:
        '당신에게 자취 생활은 최소한의 것들로도 충분히 잘 굴러가는 삶이에요. 짐도, 살림살이도, 고민의 시간도 되도록 줄이고 그 대신 남는 에너지는 정말 중요한 곳에 쓰죠. 복잡하게 챙기지 않아도 하루하루 잘 버텨내는 나만의 생존력이 은근한 매력이에요. 다만 편리함만 좇다 보면 가끔은 스스로를 돌보는 작은 즐거움까지 함께 생략해버리진 않는지 점검해보면 좋아요.',
      strengths: [
        '불필요한 것에 시간과 에너지를 쓰지 않아요',
        '어떤 환경에서도 빠르게 적응하는 융통성이 있어요',
        '결정과 정리에 군더더기가 없어요',
      ],
      cautions: [
        '편리함만 좇다 보면 소소한 즐거움까지 생략하기 쉬워요',
        '가끔은 최소한 이상의 여유를 스스로에게 허락할 필요가 있어요',
      ],
      recommendations: [
        '이번 주엔 딱 하나, 나를 위한 작은 사치를 허락해보세요',
        '효율만큼 기분 좋은 순간도 챙기는 하루를 만들어보세요',
      ],
      shareText: '나는 군더더기 없이 딱 필요한 만큼만 사는, 미니멀 생존형!',
      color: '#4ade80',
    },
    {
      id: 'home-cafe',
      title: '홈카페 감성형',
      shortTitle: '홈카페',
      emoji: '☕',
      summary: '집 안에 나만의 작은 카페를 차려둔 당신',
      description:
        '당신에게 자취방은 그저 사는 공간이 아니라 하루의 분위기를 스스로 만드는 곳이에요. 원두를 갈고, 좋아하는 컵에 커피를 따르는 그 짧은 순간이 하루 중 가장 여유로운 시간이죠. 정리나 요리에 열심인 편은 아니어도, 공간의 분위기와 기분을 챙기는 감각만큼은 확실해요. 다만 분위기에 신경 쓰다 정작 실속 있는 살림은 조금 뒷전이 되진 않는지 가끔 챙겨보면 좋아요.',
      strengths: [
        '작은 순간에서도 여유와 분위기를 만들어낼 줄 알아요',
        '나만의 취향을 공간에 담아내는 감각이 있어요',
        '바쁜 하루 속에서도 나를 위한 시간을 확보해요',
      ],
      cautions: [
        '분위기에 신경 쓰다 실속 있는 살림은 뒷전이 되기 쉬워요',
        '가끔은 감성보다 효율이 필요한 순간도 있어요',
      ],
      recommendations: [
        '좋아하는 공간 감성에 실용적인 정리 습관 하나만 더해보세요',
        '카페 같은 분위기를 즐기되, 기본 살림도 잊지 말고 챙겨보세요',
      ],
      shareText: '나는 집 안에 작은 카페를 차려둔, 홈카페 감성형!',
      color: '#059669',
    },
  ],
}
