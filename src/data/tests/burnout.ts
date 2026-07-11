import type { TestDefinition } from '../../types/test'

export const burnoutTest: TestDefinition = {
  slug: 'burnout',
  title: '직장인 번아웃 유형 테스트',
  shortTitle: '번아웃 유형',
  description: '요즘 유독 지친 것 같다면, 지금 내 에너지가 어디쯤 있는지 다정하게 확인해보세요.',
  intro:
    '요즘 부쩍 피곤하고, 예전만큼 의욕이 안 난다고 느껴진 적 있나요? 이 테스트는 지금 당신의 에너지가 어떤 상태인지, 그리고 어떤 방식으로 일하고 쉬고 있는지를 다정하게 짚어보는 자가 점검이에요. 무리 없이 자기 속도로 달리는 안정형부터, 괜찮은 척 조용히 지쳐가는 유형, 열정이 너무 뜨거워 과열된 유형, 연료가 거의 바닥난 방전 직전형, 그리고 이미 나만의 방식으로 충전을 시작한 유형까지 - 11개의 질문에 솔직하게 답하고 지금 내 마음 상태에 이름을 붙여보세요.',
  category: '직장생활',
  emoji: '🔥',
  estimatedMinutes: 3,
  theme: { color: '#f97316', gradientFrom: '#fb923c', gradientTo: '#f97316' },
  isPublished: true,
  isNew: true,
  relatedTestSlugs: ['focus', 'ai-survival'],
  // 순환 추천 구조: burnout → focus → ai-survival → love-style → animal-type → kakao-habit
  // → work-dinner → spending-style → travel-style → sns-character → insa-type
  // → relationship-distance → decision-style → conflict-style → burnout (반복)
  seo: {
    title: '직장인 번아웃 유형 테스트 - 내 에너지 상태 확인 | 오늘의 테스트',
    description:
      '지금 내 에너지는 어떤 상태일까? 3분이면 알 수 있는 직장인 번아웃 유형 테스트로 오늘의 나를 다정하게 점검해보세요.',
  },
  questions: [
    {
      id: 'q1',
      question: '월요일 아침, 알람이 울릴 때 나는?',
      choices: [
        {
          id: 'q1a',
          label: '몸은 일어났는데 마음은 아직 이불 속이에요',
          effects: { 'quiet-fatigue': 2, 'empty-tank': 1 },
        },
        {
          id: 'q1b',
          label: '이미 머릿속으로 오늘 할 일을 다 그려놨어요, 빨리 시작하고 싶어요',
          effects: { 'overheated-passion': 2 },
        },
        {
          id: 'q1c',
          label: '알람을 몇 번이나 미뤘는지 모르겠어요, 도저히 못 일어나겠어요',
          effects: { 'empty-tank': 2, 'quiet-fatigue': 1 },
        },
        {
          id: 'q1d',
          label: '주말 동안 푹 쉬어서 그런지 오늘은 몸이 가벼워요',
          effects: { 'recharge-mode': 2 },
        },
      ],
    },
    {
      id: 'q2',
      question: '퇴근 후 나의 모습은?',
      choices: [
        {
          id: 'q2a',
          label: '가벼운 운동이나 취미 활동으로 하루를 마무리해요',
          effects: { 'steady-pacer': 2 },
        },
        {
          id: 'q2b',
          label: '그래도 밀린 업무나 공부를 좀 더 붙잡고 있어요',
          effects: { 'overheated-passion': 2 },
        },
        {
          id: 'q2c',
          label: '씻지도 못하고 그대로 소파에 널브러져요',
          effects: { 'empty-tank': 2 },
        },
        {
          id: 'q2d',
          label: '좋아하는 걸 하며 의식적으로 마음을 비워내요',
          effects: { 'recharge-mode': 2, 'steady-pacer': 1 },
        },
      ],
    },
    {
      id: 'q3',
      question: '회의 중 나의 태도는?',
      choices: [
        {
          id: 'q3a',
          label: '내 할 말은 하되 무리해서 나서지는 않아요',
          effects: { 'steady-pacer': 2 },
        },
        {
          id: 'q3b',
          label: '속으론 딴생각이 많은데 티 안 내고 고개는 끄덕여요',
          effects: { 'quiet-fatigue': 2 },
        },
        {
          id: 'q3c',
          label: '집중이 안 돼서 무슨 말이 오가는지도 잘 안 들어와요',
          effects: { 'empty-tank': 2, 'quiet-fatigue': 1 },
        },
        {
          id: 'q3d',
          label: '필요한 말만 담백하게 하고 여유 있게 듣는 편이에요',
          effects: { 'recharge-mode': 2 },
        },
      ],
    },
    {
      id: 'q4',
      question: '일이 한꺼번에 몰릴 때 나는?',
      choices: [
        {
          id: 'q4a',
          label: '우선순위를 정해 하나씩 차근차근 쳐내요',
          effects: { 'steady-pacer': 2 },
        },
        {
          id: 'q4b',
          label: '속으로는 벅찬데 내색 안 하고 계속 떠안아요',
          effects: { 'quiet-fatigue': 2 },
        },
        {
          id: 'q4c',
          label: '오히려 승부욕이 불타서 밤을 새워서라도 끝내려 해요',
          effects: { 'overheated-passion': 2 },
        },
        {
          id: 'q4d',
          label: '일단 급한 것만 처리하고 나머지는 과감히 미뤄요',
          effects: { 'recharge-mode': 2, 'steady-pacer': 1 },
        },
      ],
    },
    {
      id: 'q5',
      question: '동료가 급하게 도움을 요청할 때 나는?',
      choices: [
        {
          id: 'q5a',
          label: '가능한 선에서 흔쾌히 도와줘요',
          effects: { 'steady-pacer': 2 },
        },
        {
          id: 'q5b',
          label: '내키지 않아도 거절 못 하고 일단 받아들여요',
          effects: { 'quiet-fatigue': 2 },
        },
        {
          id: 'q5c',
          label: '내 일처럼 발 벗고 나서서 더 잘해주려고 해요',
          effects: { 'overheated-passion': 2 },
        },
        {
          id: 'q5d',
          label: '미안하지만 지금은 정말 여유가 없다고 솔직히 말해요',
          effects: { 'empty-tank': 2, 'quiet-fatigue': 1 },
        },
      ],
    },
    {
      id: 'q6',
      question: '주말을 보내는 나의 방식은?',
      choices: [
        {
          id: 'q6a',
          label: '쉬긴 쉬는데 뭔가 찜찜하고 완전히 편하진 않아요',
          effects: { 'quiet-fatigue': 2 },
        },
        {
          id: 'q6b',
          label: '밀린 자기계발이나 부업까지 알차게 채워요',
          effects: { 'overheated-passion': 2 },
        },
        {
          id: 'q6c',
          label: '거의 누워서만 보내요, 그래도 피로가 안 풀려요',
          effects: { 'empty-tank': 2, 'quiet-fatigue': 1 },
        },
        {
          id: 'q6d',
          label: '일 생각은 완전히 끄고 나만을 위한 시간을 보내요',
          effects: { 'recharge-mode': 2 },
        },
      ],
    },
    {
      id: 'q7',
      question: '일하다 실수했을 때 나는?',
      choices: [
        {
          id: 'q7a',
          label: '빨리 인정하고 수습 방법부터 차분히 찾아요',
          effects: { 'steady-pacer': 2 },
        },
        {
          id: 'q7b',
          label: '자책하면서 며칠 동안 계속 마음에 담아둬요',
          effects: { 'overheated-passion': 2, 'empty-tank': 1 },
        },
        {
          id: 'q7c',
          label: '그 실수 하나에 무너져서 아무것도 손에 안 잡혀요',
          effects: { 'empty-tank': 2 },
        },
        {
          id: 'q7d',
          label: '실수도 배움이라 생각하며 툭툭 털고 넘어가요',
          effects: { 'recharge-mode': 2, 'steady-pacer': 1 },
        },
      ],
    },
    {
      id: 'q8',
      question: '휴가를 쓰려고 할 때 내 마음은?',
      choices: [
        {
          id: 'q8a',
          label: '미리 계획 세워서 알차게 즐기고 와요',
          effects: { 'steady-pacer': 2 },
        },
        {
          id: 'q8b',
          label: '휴가 중에도 메신저 알림이 계속 신경 쓰여요',
          effects: { 'quiet-fatigue': 2 },
        },
        {
          id: 'q8c',
          label: '휴가라는 말만 들어도 눈물 날 것 같아요, 너무 절실해요',
          effects: { 'empty-tank': 2 },
        },
        {
          id: 'q8d',
          label: '아무 계획 없이 늘어지게 쉬는 게 최고의 휴가예요',
          effects: { 'recharge-mode': 2 },
        },
      ],
    },
    {
      id: 'q9',
      question: '이메일이나 메신저를 확인하는 습관은?',
      choices: [
        {
          id: 'q9a',
          label: '정해진 시간에만 확인하고 나머지는 알림을 꺼둬요',
          effects: { 'steady-pacer': 2 },
        },
        {
          id: 'q9b',
          label: '신경 쓰이니까 일단 계속 흘끗흘끗 확인은 해요',
          effects: { 'quiet-fatigue': 2 },
        },
        {
          id: 'q9c',
          label: '혹시 급한 일 있을까 봐 실시간으로 계속 체크해요',
          effects: { 'overheated-passion': 2 },
        },
        {
          id: 'q9d',
          label: '업무 시간이 끝나면 과감히 알림을 무음으로 돌려버려요',
          effects: { 'recharge-mode': 2, 'steady-pacer': 1 },
        },
      ],
    },
    {
      id: 'q10',
      question: '목표를 이루고 난 뒤 드는 감정은?',
      choices: [
        {
          id: 'q10a',
          label: '뿌듯하지만 담담하게, 바로 다음 목표를 생각해요',
          effects: { 'steady-pacer': 2 },
        },
        {
          id: 'q10b',
          label: '기쁜데 그 기쁨을 느낄 새도 없이 바로 다음 일로 넘어가요',
          effects: { 'quiet-fatigue': 2 },
        },
        {
          id: 'q10c',
          label: '짜릿한 성취감에 취해서 바로 더 큰 목표를 향해 달려요',
          effects: { 'overheated-passion': 2 },
        },
        {
          id: 'q10d',
          label: '기쁨보다 안도감이 먼저예요, 드디어 끝났다는 생각뿐이에요',
          effects: { 'empty-tank': 2, 'quiet-fatigue': 1 },
        },
      ],
    },
    {
      id: 'q11',
      question: '최근 한 달을 돌아보면 나는?',
      choices: [
        {
          id: 'q11a',
          label: '겉으론 별일 없었지만 돌아보니 나름 힘들었던 한 달이에요',
          effects: { 'quiet-fatigue': 2 },
        },
        {
          id: 'q11b',
          label: '바쁘게 몰아친 한 달이라 성취는 컸지만 지금은 좀 지쳐요',
          effects: { 'overheated-passion': 2, 'empty-tank': 1 },
        },
        {
          id: 'q11c',
          label: '솔직히 어떻게 버텼는지 기억도 잘 안 나는 한 달이었어요',
          effects: { 'empty-tank': 2 },
        },
        {
          id: 'q11d',
          label: '힘든 순간도 있었지만 스스로를 잘 돌보며 넘긴 한 달이에요',
          effects: { 'recharge-mode': 2 },
        },
      ],
    },
  ],
  results: [
    {
      id: 'steady-pacer',
      title: '꾸준한 페이스메이커형',
      shortTitle: '페이스메이커',
      emoji: '🏃',
      summary: '무리하지 않고 자기 속도로 잘 달리고 있는 당신',
      description:
        '당신은 일과 생활 사이에서 균형을 스스로 잘 조절하는 편이에요. 힘을 뺄 때와 줄 때를 아는 감각이 있어서, 큰 굴곡 없이 꾸준한 페이스를 유지하고 있죠. 지금 당장 위태로워 보이진 않지만, 그렇다고 완전히 안심할 필요는 없어요. 꾸준함이라는 자산을 오래 지키려면 가끔은 의도적으로 숨을 고르는 시간도 필요하답니다.',
      strengths: [
        '일과 생활의 균형을 스스로 잘 조절해요',
        '무리다 싶으면 스스로 브레이크를 걸 줄 알아요',
        '꾸준함으로 주변의 신뢰를 쌓아가는 타입이에요',
      ],
      cautions: [
        '익숙해진 페이스에 안주하다 보면 어느 순간 정체감을 느낄 수 있어요',
        '늘 괜찮다 보니 정작 작은 피로 신호는 지나치기 쉬워요',
      ],
      recommendations: [
        '지금의 루틴에 작은 즐거움 하나만 더 얹어보세요',
        '가끔은 계획 없이 늘어지는 하루도 스스로에게 허락해주세요',
      ],
      shareText: '나는 흔들림 없이 내 속도로 달리는 페이스메이커형!',
      color: '#f97316',
    },
    {
      id: 'quiet-fatigue',
      title: '괜찮은 척 지쳐가는형',
      shortTitle: '조용한 방전',
      emoji: '🫠',
      summary: '겉으론 웃고 있지만 속은 조금씩 지쳐가는 당신',
      description:
        '누가 봐도 씩씩하고 별문제 없어 보이지만, 사실 마음속에서는 작은 피로가 차곡차곡 쌓이고 있는 상태예요. "괜찮아요"라는 말이 어느새 입버릇이 되어버려서, 정작 자기 자신에게도 힘들다는 신호를 잘 안 보내주고 있는 건 아닐까요. 지금은 크게 티가 안 나지만, 이 상태가 오래가면 어느 순간 훅 지칠 수 있으니 미리 알아채는 게 중요해요.',
      strengths: [
        '책임감이 강해서 힘든 티를 잘 안 내요',
        '주변 사람을 먼저 챙기는 배려심이 있어요',
        '웬만한 건 혼자 조용히 해결해내는 힘이 있어요',
      ],
      cautions: [
        '괜찮다는 말이 습관이 되어 정작 자신의 신호를 놓칠 수 있어요',
        '티 안 내고 버티다 어느 순간 갑자기 훅 지칠 수 있어요',
      ],
      recommendations: [
        '오늘 하루 딱 한 가지만 "사실 좀 안 괜찮다"고 말해보세요',
        '퇴근 후 30분은 아무 목적 없이 멍때리는 시간으로 남겨두세요',
      ],
      shareText: '나는 괜찮은 척하지만 사실 조금 지친, 조용한 방전형!',
      color: '#fb923c',
    },
    {
      id: 'overheated-passion',
      title: '열정 과열형',
      shortTitle: '열정 과열',
      emoji: '🔥',
      summary: '너무 열심히 달리다 보니 어느새 뜨거워진 당신',
      description:
        '일에 진심인 만큼 몰입도도 높고, 목표 앞에서는 누구보다 열정적인 사람이에요. 그 에너지 덕분에 주변에도 좋은 자극을 주지만, 문제는 브레이크 없이 계속 액셀만 밟고 있다는 거예요. 지금은 그 열기가 성과로 이어지고 있을지 몰라도, 속도 조절 없이 이 페이스가 계속되면 어느 순간 갑자기 방전될 위험이 있어요. 잘 달리는 사람일수록 잠깐 멈추는 연습도 필요해요.',
      strengths: [
        '하고자 하는 일에 온 에너지를 쏟는 몰입력이 있어요',
        '목표 앞에서는 누구보다 진심이고 열정적이에요',
        '주변에 좋은 자극과 동기를 주는 사람이에요',
      ],
      cautions: [
        '속도 조절 없이 계속 달리면 번아웃으로 이어지기 쉬워요',
        '완벽하게 해내야 한다는 압박이 스스로를 몰아붙일 수 있어요',
      ],
      recommendations: [
        '하루에 딱 한 타임은 "적당히"를 목표로 잡아보세요',
        '일정 사이사이에 숨 고르는 시간을 의도적으로 끼워 넣어보세요',
      ],
      shareText: '나는 너무 열심히 달리다 살짝 과열된, 열정 과열형!',
      color: '#ea580c',
    },
    {
      id: 'empty-tank',
      title: '방전 직전형',
      shortTitle: '방전 직전',
      emoji: '🪫',
      summary: '연료가 거의 바닥나, 재충전이 절실한 당신',
      description:
        '지금까지 정말 많은 걸 버텨내고 해내온 사람이에요. 그런데 지금은 연료 경고등이 켜진 지 이미 한참 된 것 같아요. 뭔가를 더 잘하려고 애쓰기보다, 지금은 잠깐 멈추고 숨을 돌리는 게 먼저인 시점이에요. 지친 걸 인정하는 건 약한 게 아니라, 스스로를 오래 지키기 위한 아주 현명한 선택이랍니다.',
      strengths: [
        '지금까지 정말 많은 걸 버텨내고 해내온 사람이에요',
        '힘든 와중에도 최소한의 몫은 묵묵히 해내고 있어요',
      ],
      cautions: [
        '지금은 뭔가를 더 잘하려 애쓰기보다 멈추는 게 우선이에요',
        '이 상태를 그냥 넘기면 몸도 마음도 티가 날 수 있어요',
      ],
      recommendations: [
        '오늘만큼은 할 일 목록에서 하나를 과감히 지워보세요',
        '가능하다면 짧게라도 휴가나 반차를 진지하게 고려해보세요',
        '주변 사람에게 "나 지금 좀 힘들다"고 솔직하게 말해보세요',
      ],
      shareText: '나는 연료 경고등 켜진 지 좀 된, 방전 직전형!',
      color: '#9a3412',
    },
    {
      id: 'recharge-mode',
      title: '재충전 모드 전환형',
      shortTitle: '재충전 모드',
      emoji: '🔋',
      summary: '지친 걸 알아채고 이미 나만의 방식으로 충전 중인 당신',
      description:
        '완전히 무너지기 전에 스스로의 상태를 알아채고, 이미 자기만의 방식으로 회복을 시작한 사람이에요. 쉴 때는 확실하게 쉬고, 일과 나 자신 사이에 적당한 거리를 두는 감각도 갖고 있죠. 지금처럼 자신을 돌보는 흐름을 잘 지켜간다면, 다시 페이스를 올릴 때도 훨씬 수월할 거예요. 스스로를 챙기는 지금의 선택은 정말 잘하고 있는 거예요.',
      strengths: [
        '자신의 상태를 알아채는 눈치가 빨라요',
        '쉴 때는 확실하게 쉬는 법을 알아요',
        '무너지기 전에 스스로를 돌보는 힘이 있어요',
      ],
      cautions: [
        '재충전에 몰두하다 해야 할 일을 자꾸 미루게 될 수 있어요',
        '쉬는 것도 계획처럼 빡빡해지면 오히려 피곤해질 수 있어요',
      ],
      recommendations: [
        '지금의 회복 루틴을 기록해두면 다음에 지칠 때 큰 힘이 돼요',
        '충분히 충전됐다 싶을 때 천천히 페이스를 올려보세요',
      ],
      shareText: '나는 지치기 전에 먼저 충전 버튼을 누른, 재충전 모드형!',
      color: '#fdba74',
    },
  ],
}
