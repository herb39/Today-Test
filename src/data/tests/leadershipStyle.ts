import type { TestDefinition } from '../../types/test'

export const leadershipStyleTest: TestDefinition = {
  slug: 'leadership-style',
  title: '나의 팀플·리더십 스타일 테스트',
  shortTitle: '팀플 스타일',
  description:
    '팀 안에서 나는 어떤 역할을 자연스럽게 맡고 있을까? 11개 질문으로 알아보는 나의 팀플·리더십 스타일.',
  intro:
    '학교 팀플이든 회사 프로젝트든, 누군가와 함께 뭔가를 해내는 순간 우리는 자연스럽게 어떤 역할을 맡게 되죠. 이 테스트는 누가 리더인지를 가리는 테스트가 아니라, 팀 안에서 내가 가장 편하게 느끼는 자리가 어디인지를 다정하게 짚어보는 자가 점검이에요. 방향을 정하는 사람, 조용히 판을 짜는 사람, 마음을 챙기는 사람, 분위기를 살리는 사람, 묵묵히 완성해내는 사람까지 - 어느 쪽이든 팀에는 꼭 필요한 역할이랍니다. 11개의 질문에 솔직하게 답하고 나의 팀플·리더십 스타일을 확인해보세요.',
  category: '직장생활',
  emoji: '🧭',
  estimatedMinutes: 3,
  theme: { color: '#0f766e', gradientFrom: '#2dd4bf', gradientTo: '#0f766e' },
  isPublished: true,
  isNew: true,
  relatedTestSlugs: ['fashion-style', 'hidden-charm'],
  seo: {
    title: '나의 팀플·리더십 스타일 테스트 - 팀 안에서 내 역할은? | 오늘의 테스트',
    description:
      '지휘관형, 브레인형, 서포터형, 분위기메이커형, 묵묵한 실행형. 11가지 질문으로 학교 팀플이든 회사 프로젝트든 통하는 나의 팀플·리더십 스타일을 알아보세요.',
    faq: [
      {
        question: '리더 역할을 맡아본 적이 없어도 이 테스트가 맞을까요?',
        answer:
          '네, 상관없어요. 이 테스트는 누가 리더인지를 가리는 게 아니라 팀 안에서 내가 가장 편하게 느끼는 역할을 짚어보는 테스트라서, 학교 팀플이든 회사 프로젝트든 경험을 떠올리며 답하면 돼요.',
      },
      {
        question: '팀플·리더십 스타일 테스트는 얼마나 걸리나요?',
        answer: '질문은 총 11개이고, 하나씩 답하다 보면 3분 정도면 나의 팀 안 역할을 확인할 수 있어요.',
      },
      {
        question: '팀마다 결과가 다르게 나올 수도 있나요?',
        answer:
          '충분히 그럴 수 있어요. 이 테스트는 재미와 자기 이해를 위한 콘텐츠이지 고정된 진단은 아니라서, 함께하는 팀이나 상황에 따라 결과가 조금씩 다르게 나올 수 있어요.',
      },
    ],
  },
  questions: [
    {
      id: 'q1',
      question: '처음 팀이 꾸려지고 프로젝트가 시작될 때, 나는?',
      choices: [
        {
          id: 'q1a',
          label: '일단 전체 방향과 역할부터 정리해서 제안해요',
          effects: { commander: 2 },
        },
        {
          id: 'q1b',
          label: '어떤 방식으로 접근해야 효율적일지 먼저 머릿속으로 그려봐요',
          effects: { strategist: 2 },
        },
        {
          id: 'q1c',
          label: '다들 어색해하지 않게 분위기를 살피고 먼저 말을 걸어요',
          effects: { supporter: 2, 'mood-maker': 1 },
        },
        {
          id: 'q1d',
          label: '일단 내가 할 수 있는 부분부터 조용히 시작해요',
          effects: { 'quiet-doer': 2 },
        },
      ],
    },
    {
      id: 'q2',
      question: '팀 안에서 의견이 팽팽하게 갈릴 때 나는?',
      choices: [
        {
          id: 'q2a',
          label: '일단 내 생각을 명확히 밝히고 하나로 정리해보려 해요',
          effects: { commander: 2 },
        },
        {
          id: 'q2b',
          label: '감정은 빼고 각 의견의 장단점을 차분히 따져봐요',
          effects: { strategist: 2 },
        },
        {
          id: 'q2c',
          label: '일단 분위기가 무거워지지 않게 농담부터 던져요',
          effects: { 'mood-maker': 2, supporter: 1 },
        },
        {
          id: 'q2d',
          label: '굳이 목소리를 안 높이고 결정되면 그대로 따라가요',
          effects: { 'quiet-doer': 2 },
        },
      ],
    },
    {
      id: 'q3',
      question: '마감이 코앞인데 진행이 더딜 때 나는?',
      choices: [
        {
          id: 'q3a',
          label: '남은 일을 쪼개서 뭐부터 해야 할지 순서를 짜요',
          effects: { strategist: 2 },
        },
        {
          id: 'q3b',
          label: '다들 지쳐 보여서 괜찮은지 먼저 챙기고 다독여요',
          effects: { supporter: 2, commander: 1 },
        },
        {
          id: 'q3c',
          label: '농담 반 진담 반으로 다 함께 텐션을 끌어올리려 해요',
          effects: { 'mood-maker': 2 },
        },
        {
          id: 'q3d',
          label: '말은 안 해도 내 몫부터 빠르게 끝내놓아요',
          effects: { 'quiet-doer': 2 },
        },
      ],
    },
    {
      id: 'q4',
      question: '팀원이 실수를 해서 일이 꼬였을 때 나는?',
      choices: [
        {
          id: 'q4a',
          label: '일단 상황부터 정리하고 다음 대응을 제안해요',
          effects: { commander: 2 },
        },
        {
          id: 'q4b',
          label: '그 팀원이 위축되지 않게 먼저 괜찮다고 다독여요',
          effects: { supporter: 2 },
        },
        {
          id: 'q4c',
          label: '분위기가 가라앉지 않게 가볍게 넘기려고 해요',
          effects: { 'mood-maker': 2, strategist: 1 },
        },
        {
          id: 'q4d',
          label: '말없이 같이 수습할 방법부터 찾아 움직여요',
          effects: { 'quiet-doer': 2 },
        },
      ],
    },
    {
      id: 'q5',
      question: '아이디어 회의 시간, 나의 모습은?',
      choices: [
        {
          id: 'q5a',
          label: '여러 의견을 듣고 이거다 싶은 방향으로 정리해요',
          effects: { commander: 2 },
        },
        {
          id: 'q5b',
          label: '떠오른 아이디어들의 허점부터 논리적으로 점검해봐요',
          effects: { strategist: 2 },
        },
        {
          id: 'q5c',
          label: '말수 적은 팀원의 의견도 놓치지 않고 물어봐요',
          effects: { supporter: 2, 'quiet-doer': 1 },
        },
        {
          id: 'q5d',
          label: '엉뚱해 보이는 아이디어도 재미있게 띄워줘요',
          effects: { 'mood-maker': 2 },
        },
      ],
    },
    {
      id: 'q6',
      question: '팀 분위기가 축 가라앉아 있을 때 나는?',
      choices: [
        {
          id: 'q6a',
          label: '원인을 파악해서 해결할 방법부터 제시해요',
          effects: { commander: 2 },
        },
        {
          id: 'q6b',
          label: '왜 이렇게 됐는지 원인을 논리적으로 짚어봐요',
          effects: { strategist: 2 },
        },
        {
          id: 'q6c',
          label: '한 명씩 따로 안부를 물으며 마음을 살펴요',
          effects: { supporter: 2, 'mood-maker': 1 },
        },
        {
          id: 'q6d',
          label: '티 내지 않고 내 할 일을 묵묵히 이어가요',
          effects: { 'quiet-doer': 2 },
        },
      ],
    },
    {
      id: 'q7',
      question: '결과물 발표를 준비할 때 나는?',
      choices: [
        {
          id: 'q7a',
          label: '발표 흐름과 역할 분담을 주도적으로 짜요',
          effects: { commander: 2 },
        },
        {
          id: 'q7b',
          label: '논리적으로 빈틈없는 스토리라인을 짜는 데 집중해요',
          effects: { strategist: 2 },
        },
        {
          id: 'q7c',
          label: '긴장한 팀원들 텐션을 올려주려고 애써요',
          effects: { 'mood-maker': 2, supporter: 1 },
        },
        {
          id: 'q7d',
          label: '맡은 자료나 슬라이드를 꼼꼼히 완성해놔요',
          effects: { 'quiet-doer': 2 },
        },
      ],
    },
    {
      id: 'q8',
      question: '팀원 한 명이 갑자기 연락이 잘 안 될 때 나는?',
      choices: [
        {
          id: 'q8a',
          label: '그 사람 몫을 어떻게 재분배할지 계산부터 해봐요',
          effects: { strategist: 2 },
        },
        {
          id: 'q8b',
          label: '무슨 일 있는 건 아닌지 먼저 걱정되어 연락해봐요',
          effects: { supporter: 2, commander: 1 },
        },
        {
          id: 'q8c',
          label: '너무 무겁게 받아들이지 않으려고 분위기를 풀어요',
          effects: { 'mood-maker': 2 },
        },
        {
          id: 'q8d',
          label: '일단 내가 할 수 있는 만큼 몫을 채워놓아요',
          effects: { 'quiet-doer': 2 },
        },
      ],
    },
    {
      id: 'q9',
      question: '팀 성과를 인정받았을 때 나는?',
      choices: [
        {
          id: 'q9a',
          label: '다음엔 더 잘해보자며 다음 목표부터 그려봐요',
          effects: { commander: 2 },
        },
        {
          id: 'q9b',
          label: '다 같이 잘한 거라며 팀원들 공을 먼저 챙겨요',
          effects: { supporter: 2 },
        },
        {
          id: 'q9c',
          label: '다 같이 자축하는 자리부터 만들자고 해요',
          effects: { 'mood-maker': 2, strategist: 1 },
        },
        {
          id: 'q9d',
          label: '티는 안 내지만 속으로 뿌듯함을 느껴요',
          effects: { 'quiet-doer': 2 },
        },
      ],
    },
    {
      id: 'q10',
      question: '새로운 팀원이 합류했을 때 나는?',
      choices: [
        {
          id: 'q10a',
          label: '빠르게 적응하도록 역할과 상황부터 설명해줘요',
          effects: { commander: 2 },
        },
        {
          id: 'q10b',
          label: '지금까지의 진행 상황을 논리적으로 정리해서 알려줘요',
          effects: { strategist: 2 },
        },
        {
          id: 'q10c',
          label: '낯설어하지 않게 먼저 다가가서 챙겨줘요',
          effects: { supporter: 2, 'quiet-doer': 1 },
        },
        {
          id: 'q10d',
          label: '편하게 지낼 수 있게 농담을 건네며 친해져요',
          effects: { 'mood-maker': 2 },
        },
      ],
    },
    {
      id: 'q11',
      question: '프로젝트가 끝나고 다 같이 돌아볼 때 나는?',
      choices: [
        {
          id: 'q11a',
          label: '잘된 점과 아쉬운 점을 정리해서 먼저 꺼내놔요',
          effects: { commander: 2, 'quiet-doer': 1 },
        },
        {
          id: 'q11b',
          label: '결과와 과정을 바탕으로 원인을 분석해봐요',
          effects: { strategist: 2 },
        },
        {
          id: 'q11c',
          label: '다들 고생했다고 서로의 노력을 먼저 인정해줘요',
          effects: { supporter: 2 },
        },
        {
          id: 'q11d',
          label: '이번 프로젝트에서 있었던 재미있었던 순간들을 얘기해요',
          effects: { 'mood-maker': 2 },
        },
      ],
    },
  ],
  results: [
    {
      id: 'commander',
      title: '지휘관형',
      shortTitle: '지휘관',
      emoji: '🦁',
      summary: '방향을 정하고 앞장서서 이끄는 게 편한 당신',
      description:
        '팀에 새로운 일이 주어지면 자연스럽게 "그럼 이렇게 해볼까?"라며 방향을 제시하는 편이에요. 누가 시키지 않아도 전체 그림을 먼저 그리고, 팀원들이 각자 뭘 해야 할지 감이 안 잡힐 때 먼저 나서서 정리해주는 사람이죠. 강하게 밀어붙이는 것처럼 보여도 사실은 팀이 흔들리지 않고 목표에 잘 닿길 바라는 마음이 커요.',
      strengths: [
        '결정이 필요한 순간에 망설이지 않고 방향을 제시해요',
        '전체 일정과 그림을 한눈에 그리는 감각이 있어요',
        '팀이 갈팡질팡할 때 중심을 잡아줘요',
      ],
      cautions: [
        '너무 앞서 나가다 보면 다른 의견을 놓칠 수 있어요',
        '내 페이스에 팀원들을 맞추게 될 때가 있어요',
      ],
      recommendations: [
        '결정하기 전에 한 박자만 더 팀원들 의견을 물어보세요',
        '가끔은 방향 제시보다 그냥 들어주는 역할도 해보세요',
      ],
      shareText: '나는 방향을 정하고 앞장서서 이끄는, 지휘관형!',
      color: '#0f766e',
    },
    {
      id: 'strategist',
      title: '브레인형',
      shortTitle: '브레인',
      emoji: '🧠',
      summary: '말보다 생각으로 팀을 이끄는 전략가 타입인 당신',
      description:
        '회의에서 목소리를 크게 내는 편은 아니지만, 머릿속으로는 이미 문제의 구조를 파악하고 최선의 방법을 그리고 있어요. 팀이 방향을 잃고 헤맬 때 "이렇게 접근해보면 어때?"라며 핵심을 짚어주는 사람이 바로 당신이죠. 화려하게 나서기보다 결과로 존재감을 증명하는 스타일이에요.',
      strengths: [
        '복잡한 문제를 구조적으로 정리하는 힘이 있어요',
        '감정에 휩쓸리지 않고 냉정하게 상황을 판단해요',
        '꼼꼼한 분석으로 팀의 실수를 미리 막아줘요',
      ],
      cautions: [
        '생각을 다 말하지 않아서 오해를 살 때가 있어요',
        '완벽한 답을 찾느라 결정이 늦어질 수 있어요',
      ],
      recommendations: [
        '머릿속 생각을 조금 더 자주 소리 내어 공유해보세요',
        '때로는 80%의 답으로도 충분히 움직여도 괜찮아요',
      ],
      shareText: '나는 말보다 생각으로 팀을 이끄는, 브레인형!',
      color: '#0891b2',
    },
    {
      id: 'supporter',
      title: '서포터형',
      shortTitle: '서포터',
      emoji: '🤝',
      summary: '팀원들 사이를 잇고 챙기는 데 진심인 당신',
      description:
        '누가 힘들어하는지, 누가 말을 못 하고 있는지 가장 먼저 알아채는 사람이에요. 성과를 뽐내기보다 팀 전체가 잘 굴러가도록 뒤에서 조율하고 챙기는 역할을 자처하죠. 갈등이 생기면 중간에서 다리를 놓아주고, 누군가 지쳐 보이면 먼저 손을 내밀어주는 존재예요.',
      strengths: [
        '팀원들의 상태를 세심하게 살피고 챙겨요',
        '갈등이 생겼을 때 자연스럽게 중재자 역할을 해요',
        '묵묵히 뒤에서 팀을 받쳐주는 힘이 있어요',
      ],
      cautions: [
        '다른 사람을 챙기다 정작 내 몫은 뒷전이 될 수 있어요',
        '싫은 소리를 못 해서 손해를 감수할 때가 있어요',
      ],
      recommendations: [
        '가끔은 내 의견과 필요도 먼저 말해보세요',
        '도움을 주는 만큼 도움을 받는 것도 연습해보세요',
      ],
      shareText: '나는 팀원들 사이를 잇고 챙기는, 서포터형!',
      color: '#059669',
    },
    {
      id: 'mood-maker',
      title: '분위기메이커형',
      shortTitle: '분위기메이커',
      emoji: '🎉',
      summary: '팀의 텐션과 에너지를 끌어올리는 당신',
      description:
        '딱딱해질 수 있는 회의도 당신이 있으면 한결 가볍고 편안해져요. 농담 한마디, 리액션 한 번으로 얼어붙은 분위기를 풀어주고, 다들 지쳐갈 때쯤 "그래도 우리 잘하고 있어!"라며 텐션을 끌어올리는 사람이죠. 눈에 띄는 성과표에는 안 잡혀도, 팀의 사기를 지키는 숨은 공로자예요.',
      strengths: [
        '팀의 긴장을 풀어주고 분위기를 편안하게 만들어요',
        '지쳐 있는 팀원들에게 웃음과 에너지를 줘요',
        '새로운 사람과도 금방 친해지는 친화력이 있어요',
      ],
      cautions: [
        '진지해야 할 순간에도 장난스러워 보일 수 있어요',
        '분위기를 챙기느라 정작 내 할 일이 뒤로 밀릴 때가 있어요',
      ],
      recommendations: [
        '중요한 순간에는 텐션을 한 톤 낮춰보는 것도 좋아요',
        '분위기뿐 아니라 내 몫의 결과물도 함께 챙겨보세요',
      ],
      shareText: '나는 팀의 텐션을 끌어올리는, 분위기메이커형!',
      color: '#f59e0b',
    },
    {
      id: 'quiet-doer',
      title: '묵묵한 실행형',
      shortTitle: '묵묵한 실행러',
      emoji: '🛠️',
      summary: '말없이 자기 몫을 확실하게 해내는 당신',
      description:
        '회의에서 목소리를 크게 내는 편은 아니에요. 대신 맡은 일은 조용히, 그리고 확실하게 끝내놓는 사람이죠. 화려한 아이디어를 던지기보다 다른 사람의 아이디어를 실제로 돌아가게 만드는 게 당신의 특기예요. 눈에 띄지 않아도 팀이 실제로 굴러가는 데는 당신의 역할이 가장 크답니다.',
      strengths: [
        '맡은 일을 끝까지 책임지고 완수해요',
        '불필요한 소란 없이 묵묵히 결과로 보여줘요',
        '다른 사람의 아이디어를 실제로 완성시키는 힘이 있어요',
      ],
      cautions: [
        '조용히 해내다 보니 기여도가 잘 드러나지 않을 수 있어요',
        '힘들어도 티를 안 내서 혼자 부담을 떠안기 쉬워요',
      ],
      recommendations: [
        '내가 한 일은 스스로 한 번씩 짚어서 알려보세요',
        '부담이 클 땐 참지 말고 먼저 도움을 요청해보세요',
      ],
      shareText: '나는 말없이 내 몫을 확실히 해내는, 묵묵한 실행형!',
      color: '#475569',
    },
  ],
}
