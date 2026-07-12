import type { TestDefinition } from '../../types/test'

export const gameStyleTest: TestDefinition = {
  slug: 'game-style',
  title: '나의 게임 플레이 성향 테스트',
  shortTitle: '게임 성향',
  description: '전략 짜는 편이야, 몸으로 부딪히는 편이야? 11문항으로 알아보는 나의 게임 플레이 성향.',
  intro:
    '누구랑 같이 게임을 해봐도 은근히 티가 나는 게 있다. 시작하자마자 공략부터 훑는 사람, 팀원 컨디션부터 챙기는 사람, 순위표 1등에 목숨 거는 사람, 그냥 재밌으면 그만인 사람, 도전과제 100%를 봐야 잠이 오는 사람까지. 게임 안에서의 선택 하나하나에는 생각보다 나의 성향이 그대로 묻어난다. 이 테스트는 승패보다 "나는 어떤 플레이어인가"에 초점을 맞춘 11개의 가벼운 질문으로 나만의 "게임 플레이 성향"을 찾아준다. 정답도 우열도 없으니, 같이 게임하는 친구랑 비교해보면서 가볍게 즐겨보자.',
  category: '성격',
  emoji: '🎮',
  estimatedMinutes: 3,
  theme: { color: '#9333ea', gradientFrom: '#c084fc', gradientTo: '#6b21a8' },
  isPublished: true,
  isNew: true,
  relatedTestSlugs: ['solo-living', 'holiday-gathering'],
  seo: {
    title: '나의 게임 플레이 성향 테스트 | 오늘의 테스트',
    description:
      '전략가, 힐러·서포터, 딜러, 캐주얼 플레이어, 완주 마스터까지. 게임할 때 드러나는 나의 진짜 성향을 알아보는 심리테스트. 3분이면 끝, 무료로 바로 확인해보세요.',
    faq: [
      {
        question: '나의 게임 플레이 성향은 어떻게 확인할 수 있나요?',
        answer:
          '새 게임을 시작할 때의 태도, 위기 상황에서의 대처법, 랭킹전을 대하는 마음가짐 등 11가지 질문에 답하면 전략가형, 힐러·서포터형, 딜러형, 캐주얼 플레이형, 완주 마스터형 중 나의 진짜 플레이 스타일을 찾을 수 있어요.',
      },
      {
        question: '테스트는 얼마나 걸리나요?',
        answer: '총 11개의 질문으로 구성되어 있어서 평균 3분이면 가볍게 끝낼 수 있어요.',
      },
      {
        question: '결과가 내 게임 실력을 판단하는 건가요?',
        answer:
          '실력이나 등급을 평가하는 게 아니라, 재미로 즐기는 성향 파악용 콘텐츠예요. 어떤 게임을 하느냐나 그날 컨디션에 따라 답이 달라질 수 있으니 부담 없이 즐겨주세요.',
      },
    ],
  },
  questions: [
    {
      id: 'q1',
      question: '새로운 게임을 시작할 때 나는?',
      choices: [
        { id: 'q1a', label: '공략부터 훑어보고 최적 루트부터 짠다', effects: { strategist: 2 } },
        { id: 'q1b', label: '같이 할 사람 컨디션부터 물어본다', effects: { healer: 2 } },
        { id: 'q1c', label: '제일 센 스킬부터 눌러보고 본다', effects: { dealer: 2 } },
        { id: 'q1d', label: '아무 생각 없이 이것저것 눌러본다', effects: { casual: 2 } },
      ],
    },
    {
      id: 'q2',
      question: '게임 중 캐릭터 체력이 위험해지면 나는?',
      choices: [
        { id: 'q2a', label: '상황을 분석해서 최적의 다음 수를 계산한다', effects: { strategist: 2 } },
        { id: 'q2b', label: '내 캐릭터보다 팀원 회복부터 챙긴다', effects: { healer: 2 } },
        { id: 'q2c', label: '위험해도 공격 기회면 일단 밀어붙인다', effects: { dealer: 2, completionist: 1 } },
        { id: 'q2d', label: '여기서 못 깨면 밤새서라도 깬다', effects: { completionist: 2 } },
      ],
    },
    {
      id: 'q3',
      question: '처음 만난 사람과 파티를 짜야 한다면?',
      choices: [
        { id: 'q3a', label: '역할 분담부터 정리해서 효율을 짠다', effects: { strategist: 2 } },
        { id: 'q3b', label: '초보인 것 같으면 먼저 챙겨준다', effects: { healer: 2, casual: 1 } },
        { id: 'q3c', label: '캐리해서 스코어보드 1등을 찍고 싶다', effects: { dealer: 2 } },
        { id: 'q3d', label: '그냥 편하게 아무 역할이나 맡는다', effects: { casual: 2 } },
      ],
    },
    {
      id: 'q4',
      question: '게임 전 캐릭터 세팅(장비, 커스터마이징) 시간에?',
      choices: [
        { id: 'q4a', label: '스탯표까지 뜯어보며 최적 조합을 짠다', effects: { strategist: 2 } },
        { id: 'q4b', label: '팀에 부족한 역할이 뭔지부터 살핀다', effects: { healer: 2 } },
        { id: 'q4c', label: '그냥 멋있어 보이는 걸로 대충 고른다', effects: { casual: 2 } },
        { id: 'q4d', label: '모든 옵션을 다 눌러보고 나서야 정한다', effects: { completionist: 2, strategist: 1 } },
      ],
    },
    {
      id: 'q5',
      question: '한 판을 지고 나면 나는?',
      choices: [
        { id: 'q5a', label: '리플레이를 돌려보며 원인부터 분석한다', effects: { strategist: 2 } },
        { id: 'q5b', label: '팀원들한테 괜찮다고 먼저 다독인다', effects: { healer: 2 } },
        { id: 'q5c', label: '분해서 다음 판엔 더 세게 밀어붙인다', effects: { dealer: 2 } },
        { id: 'q5d', label: '"그럴 수도 있지" 하고 바로 잊는다', effects: { casual: 2 } },
      ],
    },
    {
      id: 'q6',
      question: '게임 속 숨은 요소(히든 루트, 이스터에그)를 발견하면?',
      choices: [
        { id: 'q6a', label: '이걸 전략적으로 써먹을 수 있는지부터 따져본다', effects: { strategist: 2 } },
        { id: 'q6b', label: '발견 기념으로 그 자리에서 세게 한판 붙어본다', effects: { dealer: 2 } },
        { id: 'q6c', label: '"오 신기하다" 구경만 하고 넘어간다', effects: { casual: 2 } },
        { id: 'q6d', label: '놓치면 찜찜해서 구석구석 다 찾아야 한다', effects: { completionist: 2 } },
      ],
    },
    {
      id: 'q7',
      question: '공략을 보다가 나와 다른 방식이 더 낫다는 걸 알게 되면?',
      choices: [
        { id: 'q7a', label: '바로 내 플랜을 수정해서 더 효율적으로 바꾼다', effects: { strategist: 2 } },
        { id: 'q7b', label: '그 방법을 팀원들한테도 알려준다', effects: { healer: 2 } },
        { id: 'q7c', label: '그 방식대로 다시 붙어서 확실하게 눌러버린다', effects: { dealer: 2 } },
        { id: 'q7d', label: '두 방법 다 익혀서 결국 다 마스터한다', effects: { completionist: 2, strategist: 1 } },
      ],
    },
    {
      id: 'q8',
      question: '랭킹전이나 경쟁 모드에 대한 내 생각은?',
      choices: [
        { id: 'q8a', label: '팀 분위기 좋으면 순위는 크게 신경 안 쓴다', effects: { healer: 2 } },
        { id: 'q8b', label: '순위표 맨 위에 내 이름 박아야 직성이 풀린다', effects: { dealer: 2 } },
        { id: 'q8c', label: '랭킹보다 그냥 재밌으면 그만이다', effects: { casual: 2 } },
        { id: 'q8d', label: '최고 등급 찍을 때까지 절대 못 놓는다', effects: { completionist: 2, dealer: 1 } },
      ],
    },
    {
      id: 'q9',
      question: '게임 하다가 막히는 구간이 나오면?',
      choices: [
        { id: 'q9a', label: '패턴을 분석해서 나만의 공략법을 짜본다', effects: { strategist: 2 } },
        { id: 'q9b', label: '같이 하는 사람이 있으면 먼저 도와준다', effects: { healer: 2 } },
        { id: 'q9c', label: '안 되면 그냥 다음에 하지 뭐 한다', effects: { casual: 2 } },
        { id: 'q9d', label: '클리어할 때까지 몇 시간이고 붙잡고 있는다', effects: { completionist: 2 } },
      ],
    },
    {
      id: 'q10',
      question: '친구가 같이 게임하다가 실수를 연발하면?',
      choices: [
        { id: 'q10a', label: '원인을 짚어주고 대응법을 알려준다', effects: { strategist: 2 } },
        { id: 'q10b', label: '"내가 캐리할게" 하고 더 세게 밀어붙인다', effects: { dealer: 2 } },
        { id: 'q10c', label: '"그럴 수도 있지" 하고 웃어넘긴다', effects: { casual: 2 } },
        { id: 'q10d', label: '같이 붙잡고 끝까지 파고들어서 해결한다', effects: { completionist: 2, strategist: 1 } },
      ],
    },
    {
      id: 'q11',
      question: '게임을 끝내고(엔딩을 보고) 난 뒤 나는?',
      choices: [
        { id: 'q11a', label: '팀원들에게 같이 해줘서 고맙다고 인사한다', effects: { healer: 2 } },
        { id: 'q11b', label: '최종 보스전 풀영상을 다시 보며 짜릿함을 곱씹는다', effects: { dealer: 2 } },
        { id: 'q11c', label: '"재밌었다" 하고 바로 다른 걸로 넘어간다', effects: { casual: 2 } },
        { id: 'q11d', label: '도전과제·업적 100%까지 채우고서야 만족한다', effects: { completionist: 2 } },
      ],
    },
  ],
  results: [
    {
      id: 'strategist',
      title: '판을 읽는 전략가형',
      shortTitle: '전략가형',
      emoji: '🧠',
      summary: '움직이기 전에 이미 세 수 앞을 보는 당신',
      description:
        '게임을 켜자마자 공략부터 훑고, 최적 루트와 효율적인 조합부터 계산하는 타입. 감보다는 데이터와 패턴을 믿고, 실패하면 감정보다 원인 분석이 먼저 나온다. 판이 복잡해질수록 오히려 눈이 빛나고, 팀 전체의 동선까지 그려보는 걸 즐긴다. 몸으로 부딪히기보다 머리로 이기는 쾌감을 아는 사람.',
      strengths: ['상황을 빠르게 분석하는 판단력', '효율적인 루트와 조합을 짜는 기획력', '흔들리지 않는 침착한 대응'],
      cautions: ['계산하다 타이밍을 놓칠 때가 있음', '즉흥적으로 노는 재미를 놓칠 수 있음'],
      recommendations: [
        '가끔은 공략 없이 바로 부딪혀보는 판도 즐겨보기',
        '팀원들에게 내 계획을 미리 공유해서 합을 맞춰보기',
        '분석 시간에 제한을 두고 그 안에서 결정하는 연습해보기',
      ],
      shareText: '나는 판을 읽는 전략가형 🧠 이길 방법은 이미 계산 끝났다!',
      color: '#6d28d9',
    },
    {
      id: 'healer',
      title: '팀을 살리는 힐러·서포터형',
      shortTitle: '힐러·서포터형',
      emoji: '💚',
      summary: '내 스코어보다 팀 전체가 잘되길 바라는 당신',
      description:
        '캐릭터를 고를 때부터 팀에 부족한 역할이 뭔지부터 살핀다. 내가 튀는 것보다 팀원이 안전하게 살아남는 게 더 뿌듯한 타입. 위기 상황에서도 본인 안위보다 동료 회복과 지원을 먼저 챙긴다. 함께한 사람들이 "덕분에 편했다"고 말해줄 때 제일 즐겁다.',
      strengths: ['든든한 팀워크와 배려심', '상황 파악 후 지원하는 센스', '분위기를 부드럽게 만드는 친화력'],
      cautions: ['내 캐릭터 성장이나 스코어는 뒷전이 될 때가 있음', '너무 맞춰주다 정작 하고 싶은 플레이를 못 할 수 있음'],
      recommendations: [
        '가끔은 나만을 위한 플레이 타임도 확보해보기',
        '내가 원하는 역할도 팀원에게 솔직하게 말해보기',
        '서포트 실력을 인정받는 순간을 스스로 기록해두기',
      ],
      shareText: '나는 팀을 살리는 힐러·서포터형 💚 우리 팀 생존은 내가 책임진다!',
      color: '#8b5cf6',
    },
    {
      id: 'dealer',
      title: '한방을 노리는 딜러형',
      shortTitle: '딜러형',
      emoji: '⚔️',
      summary: '스코어보드 맨 위에 내 이름이 있어야 직성이 풀리는 당신',
      description:
        '위험해도 공격 기회다 싶으면 일단 밀어붙이고 본다. 순위표, 킬 수, 데미지 지표처럼 눈에 보이는 숫자에 유독 예민하다. 지고 나면 분한 만큼 다음 판에서 더 세게 몰아붙이는 승부욕의 소유자. 화려한 한 방으로 판을 뒤집는 순간을 위해 게임을 켠다.',
      strengths: ['과감한 승부수와 실행력', '압도적인 집중력과 승부욕', '위기를 기회로 바꾸는 공격성'],
      cautions: ['무리하게 밀어붙이다 팀 전체가 위험해질 수 있음', '숫자에 집착하다 게임 자체의 재미를 놓칠 수 있음'],
      recommendations: [
        '한 판 정도는 순위 신경 안 쓰고 즐겨보기',
        '무리한 시도 전에 팀원과 타이밍 한 번만 맞춰보기',
        '진 판도 리플레이로 돌아보며 다음 한 방을 준비하기',
      ],
      shareText: '나는 한방을 노리는 딜러형 ⚔️ 스코어보드 1등은 내 자리!',
      color: '#a21caf',
    },
    {
      id: 'casual',
      title: '즐기면 그만인 캐주얼 플레이형',
      shortTitle: '캐주얼 플레이형',
      emoji: '🍿',
      summary: '이기든 지든 일단 재밌으면 장땡인 당신',
      description:
        '순위나 완벽한 공략보다 지금 이 순간 즐거운지가 훨씬 중요하다. 캐릭터도 대충 멋있어 보이는 걸로 고르고, 지면 "그럴 수도 있지" 하고 바로 다음으로 넘어간다. 숨은 요소를 발견해도 구경만 하고 가볍게 지나치는 여유파. 게임을 스트레스 없이, 취미답게 즐길 줄 아는 사람.',
      strengths: ['부담 없이 즐기는 여유', '결과에 크게 흔들리지 않는 멘탈', '누구와 해도 편안한 분위기 메이커'],
      cautions: ['대충 하다 보니 실력이 잘 안 늘 수 있음', '진지하게 임하는 팀원과 온도차가 생길 수 있음'],
      recommendations: [
        '가끔은 딱 한 판만 진지하게 몰입해보기',
        '내가 편한 만큼 팀원 페이스도 한 번씩 물어봐 주기',
        '재밌었던 순간을 짧게라도 기록해서 즐거움을 오래 남기기',
      ],
      shareText: '나는 즐기면 그만인 캐주얼 플레이형 🍿 이기고 지고는 안 중요해!',
      color: '#c026d3',
    },
    {
      id: 'completionist',
      title: '끝까지 간다, 완주 마스터형',
      shortTitle: '완주 마스터형',
      emoji: '🏆',
      summary: '도전과제 100%를 봐야 잠이 오는 당신',
      description:
        '숨은 요소, 히든 루트 하나라도 놓치면 찜찜해서 구석구석 다 뒤진다. 막히는 구간이 나오면 몇 시간이고 붙잡고 늘어지는 끈기의 소유자. 엔딩을 봐도 도전과제와 업적을 다 채워야 진짜 끝났다고 느낀다. 남들이 다음 게임으로 넘어갈 때도 혼자 마무리를 짓고 있는 타입.',
      strengths: ['포기하지 않는 끈기와 집중력', '디테일을 놓치지 않는 꼼꼼함', '한 번 시작한 건 끝까지 완수하는 책임감'],
      cautions: ['하나에 너무 오래 붙잡혀 시간이 많이 들 수 있음', '완벽하게 안 끝나면 다음으로 못 넘어갈 때가 있음'],
      recommendations: [
        '오늘은 여기까지, 하고 멈추는 나만의 기준선 정해두기',
        '완벽하지 않아도 충분하다는 판단을 가끔 내려보기',
        '완주한 목록을 기록해서 성취감을 눈으로 확인해보기',
      ],
      shareText: '나는 끝까지 간다, 완주 마스터형 🏆 도전과제 100%는 기본!',
      color: '#581c87',
    },
  ],
}
