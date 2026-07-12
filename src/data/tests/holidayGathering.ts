import type { TestDefinition } from '../../types/test'

export const holidayGatheringTest: TestDefinition = {
  slug: 'holiday-gathering',
  title: '나의 명절 캐릭터 테스트',
  shortTitle: '명절 캐릭터',
  description:
    '이번 명절, 나는 가족들 사이에서 어떤 역할을 맡고 있을까? 11가지 질문으로 알아보는 나만의 명절 캐릭터를 확인해보세요.',
  intro:
    '오랜만에 온 가족이 모이는 명절, 그 안에서 나는 늘 비슷한 역할을 맡고 있지 않나요? 누구는 주방에서 든든하게 손을 보태고, 누구는 예상 질문 리스트를 미리 준비해두고, 누구는 조카들과 온몸으로 놀아주고, 누구는 눈치껏 딱 적당한 타이밍에 자리를 정리하고, 누구는 분위기를 웃음바다로 만들죠. 이 테스트는 명절 갈등이나 고민을 파헤치려는 게 아니라, 그 시끌벅적한 하루 안에서 내가 자연스럽게 맡고 있는 유쾌한 역할이 무엇인지 가볍게 확인해보는 자리예요. 11개의 질문에 솔직하게 답하고, 나와 우리 가족들의 명절 캐릭터를 비교해보세요.',
  category: '관계',
  emoji: '🎊',
  estimatedMinutes: 3,
  theme: { color: '#e11d48', gradientFrom: '#fb7185', gradientTo: '#be123c' },
  isPublished: true,
  isNew: true,
  relatedTestSlugs: ['pet-care-style', 'season-type'],
  seo: {
    title: '나의 명절 캐릭터 테스트 - 명절에 나는 어떤 역할? | 오늘의 테스트',
    description:
      '명절 모임에서 나는 주방 지원군일까, 분위기 메이커일까? 11가지 질문으로 3분 만에 알아보는 나의 명절 캐릭터 테스트.',
    faq: [
      {
        question: '명절 모임에서 내가 맡고 있는 역할은 어떻게 알 수 있나요?',
        answer:
          '큰집에 도착해서 처음 하는 행동, 어른들 질문에 대처하는 방식, 조카들과 시간을 보내는 태도 등 11가지 질문에 답하면 주방 지원군형, 잔소리 방어형, 조카 놀이 담당형, 눈치껏 일찍 가는형, 분위기 메이커형 중 나의 명절 캐릭터를 찾을 수 있어요.',
      },
      {
        question: '테스트는 얼마나 걸리나요?',
        answer: '질문은 총 11개이고, 평균 3분 정도면 가볍게 끝낼 수 있어요.',
      },
      {
        question: '결과가 우리 가족 안에서의 내 모습을 정확히 진단하는 건가요?',
        answer:
          '진지한 분석이 아니라 명절이라는 특별한 하루를 재미있게 돌아보기 위한 콘텐츠예요. 그날 상황이나 함께한 가족에 따라 결과가 달라질 수 있으니 가볍게 즐겨주세요.',
      },
    ],
  },
  questions: [
    {
      id: 'q1',
      question: '명절 전날, 가족 단체 카톡방에 "내일 몇 시까지 올 수 있어?"라는 메시지가 올라왔어요. 나는?',
      choices: [
        {
          id: 'q1a',
          label: '이따가 어색한 질문이 들어오면 뭐라고 받아칠지부터 미리 시뮬레이션 해봐요',
          effects: { 'counter-guard': 2, 'kitchen-support': 1 },
        },
        {
          id: 'q1b',
          label: '조카들 줄 선물이나 간식부터 먼저 챙길 생각이 나요',
          effects: { 'kids-entertainer': 2 },
        },
        {
          id: 'q1c',
          label: '몇 시에 가면 적당히 있다가 눈치껏 빠질 수 있을지 계산해봐요',
          effects: { 'early-leaver': 2 },
        },
        {
          id: 'q1d',
          label: '가서 무슨 얘기로 분위기를 띄울지 벌써부터 신나요',
          effects: { 'mood-maker': 2 },
        },
      ],
    },
    {
      id: 'q2',
      question: '큰집에 도착해서 제일 먼저 하는 행동은?',
      choices: [
        {
          id: 'q2a',
          label: '도착하자마자 앞치마부터 찾아 입어요',
          effects: { 'kitchen-support': 2 },
        },
        {
          id: 'q2b',
          label: '조카들 이름 부르며 인사부터 하고 놀아줄 준비를 해요',
          effects: { 'kids-entertainer': 2 },
        },
        {
          id: 'q2c',
          label: '자리에 앉아서 언제쯤 인사치레가 끝날지 가늠해봐요',
          effects: { 'early-leaver': 2, 'counter-guard': 1 },
        },
        {
          id: 'q2d',
          label: '다 같이 모인 자리에서 재밌는 얘깃거리부터 꺼내요',
          effects: { 'mood-maker': 2 },
        },
      ],
    },
    {
      id: 'q3',
      question: '어른들이 "취업은 했니", "결혼은 언제 하니" 같은 질문을 던지기 시작하면?',
      choices: [
        {
          id: 'q3a',
          label: '그 얘기 그만하고 다 같이 전이나 부치자며 슬쩍 화제를 돌려요',
          effects: { 'kitchen-support': 2, 'kids-entertainer': 1 },
        },
        {
          id: 'q3b',
          label: '예상 질문 리스트를 미리 준비해둔 덕에 여유 있게 받아쳐요',
          effects: { 'counter-guard': 2 },
        },
        {
          id: 'q3c',
          label: '대충 웃으면서 넘기고 최대한 빨리 자리를 옮겨요',
          effects: { 'early-leaver': 2 },
        },
        {
          id: 'q3d',
          label: '오히려 그 틈을 타서 웃긴 이야기로 분위기를 뒤집어요',
          effects: { 'mood-maker': 2 },
        },
      ],
    },
    {
      id: 'q4',
      question: '명절 음식 준비, 나의 포지션은?',
      choices: [
        {
          id: 'q4a',
          label: '전 부치기, 나물 무치기 등 주방 라인에 자연스럽게 합류해요',
          effects: { 'kitchen-support': 2 },
        },
        {
          id: 'q4b',
          label: '누가 무리한 부탁을 하면 적당히 선을 그으며 조율해요',
          effects: { 'counter-guard': 2, 'early-leaver': 1 },
        },
        {
          id: 'q4c',
          label: '조카들을 데리고 나가서 놀아주면서 자연스럽게 자리를 비켜요',
          effects: { 'kids-entertainer': 2 },
        },
        {
          id: 'q4d',
          label: '다 같이 요리하면서 노래도 틀고 흥을 돋워요',
          effects: { 'mood-maker': 2 },
        },
      ],
    },
    {
      id: 'q5',
      question: '식사가 끝나고 다들 거실에 모여 쉬는 시간, 나는?',
      choices: [
        {
          id: 'q5a',
          label: '과일이나 커피를 챙기며 은근히 다음 할 일을 찾아요',
          effects: { 'kitchen-support': 2, 'mood-maker': 1 },
        },
        {
          id: 'q5b',
          label: '누가 예민한 얘기를 꺼내면 자연스럽게 화제를 전환해요',
          effects: { 'counter-guard': 2 },
        },
        {
          id: 'q5c',
          label: '조카들이랑 바닥에 앉아서 게임하거나 만화를 봐요',
          effects: { 'kids-entertainer': 2 },
        },
        {
          id: 'q5d',
          label: '이 타이밍에 슬쩍 일어나서 집에 갈 채비를 시작해요',
          effects: { 'early-leaver': 2 },
        },
      ],
    },
    {
      id: 'q6',
      question: '어린 조카들이 우르르 몰려와서 놀아달라고 하면?',
      choices: [
        {
          id: 'q6a',
          label: '적당히 놀아주다가 어른들 질문 방패막이 역할로 돌아가요',
          effects: { 'counter-guard': 2 },
        },
        {
          id: 'q6b',
          label: '제일 신나서 조카들이랑 뒹굴며 놀아요',
          effects: { 'kids-entertainer': 2 },
        },
        {
          id: 'q6c',
          label: '살짝 힘에 부쳐서 다른 핑계를 대고 빠져나와요',
          effects: { 'early-leaver': 2 },
        },
        {
          id: 'q6d',
          label: '다 같이 할 수 있는 놀이를 제안해서 다 함께 신나게 놀아요',
          effects: { 'mood-maker': 2, 'kitchen-support': 1 },
        },
      ],
    },
    {
      id: 'q7',
      question: '명절 하루 중 내가 가장 좋아하는 순간은?',
      choices: [
        {
          id: 'q7a',
          label: '다 같이 모여 음식을 먹을 때가 제일 좋아요',
          effects: { 'kitchen-support': 2, 'counter-guard': 1 },
        },
        {
          id: 'q7b',
          label: '조카들이랑 놀아줄 때가 제일 재밌어요',
          effects: { 'kids-entertainer': 2 },
        },
        {
          id: 'q7c',
          label: '집에 갈 시간이 다가올 때가 제일 마음이 편해요',
          effects: { 'early-leaver': 2 },
        },
        {
          id: 'q7d',
          label: '다 같이 웃고 떠들 때가 제일 신나요',
          effects: { 'mood-maker': 2 },
        },
      ],
    },
    {
      id: 'q8',
      question: '설거지나 뒷정리가 필요한 순간, 나는?',
      choices: [
        {
          id: 'q8a',
          label: '누가 시키기 전에 먼저 나서서 설거지를 시작해요',
          effects: { 'kitchen-support': 2 },
        },
        {
          id: 'q8b',
          label: '적당히 돕는 척하면서 눈치껏 강도를 조절해요',
          effects: { 'counter-guard': 2 },
        },
        {
          id: 'q8c',
          label: '설거지 타이밍에 맞춰 조용히 짐을 정리하고 갈 준비를 해요',
          effects: { 'early-leaver': 2 },
        },
        {
          id: 'q8d',
          label: '설거지하면서도 노래 부르고 농담하며 분위기를 띄워요',
          effects: { 'mood-maker': 2, 'kids-entertainer': 1 },
        },
      ],
    },
    {
      id: 'q9',
      question: '친척들 사이에서 은근한 비교(사촌은 이랬다더라)가 시작되면?',
      choices: [
        {
          id: 'q9a',
          label: '그 얘기는 조용히 넘기고 음식 그릇 채우는 데 집중해요',
          effects: { 'kitchen-support': 2 },
        },
        {
          id: 'q9b',
          label: '비교하는 말이 나오면 재치 있게 화제를 돌려요',
          effects: { 'counter-guard': 2 },
        },
        {
          id: 'q9c',
          label: '그 틈에 조카들을 데리고 다른 방으로 가서 놀아요',
          effects: { 'kids-entertainer': 2, 'early-leaver': 1 },
        },
        {
          id: 'q9d',
          label: '오히려 그 얘기를 유쾌한 농담으로 받아쳐서 웃겨버려요',
          effects: { 'mood-maker': 2 },
        },
      ],
    },
    {
      id: 'q10',
      question: '슬슬 집에 갈 시간이 다가올 때, 나의 타이밍은?',
      choices: [
        {
          id: 'q10a',
          label: '마지막까지 남아서 뒷정리를 도와주고 나가요',
          effects: { 'kitchen-support': 2 },
        },
        {
          id: 'q10b',
          label: '적당한 타이밍에 자연스러운 핑계를 대고 일어나요',
          effects: { 'counter-guard': 2, 'mood-maker': 1 },
        },
        {
          id: 'q10c',
          label: '조카들과 인사하고 아쉬워하며 천천히 나가요',
          effects: { 'kids-entertainer': 2 },
        },
        {
          id: 'q10d',
          label: '이미 마음속으로 정해둔 시간에 딱 맞춰 일어나요',
          effects: { 'early-leaver': 2 },
        },
      ],
    },
    {
      id: 'q11',
      question: '명절이 끝나고 집에 돌아오는 길, 나의 소감은?',
      choices: [
        {
          id: 'q11a',
          label: '오늘도 무사히 다 챙겼다는 뿌듯함이 들어요',
          effects: { 'kitchen-support': 2, 'mood-maker': 1 },
        },
        {
          id: 'q11b',
          label: '이번엔 그럭저럭 잘 넘겼다는 안도감이 들어요',
          effects: { 'counter-guard': 2 },
        },
        {
          id: 'q11c',
          label: '조카들 보느라 정신없었지만 즐거웠다는 생각이 들어요',
          effects: { 'kids-entertainer': 2 },
        },
        {
          id: 'q11d',
          label: '적당한 타이밍에 잘 빠져나왔다는 만족감이 들어요',
          effects: { 'early-leaver': 2 },
        },
      ],
    },
  ],
  results: [
    {
      id: 'kitchen-support',
      title: '주방 지원군형',
      shortTitle: '주방 지원군',
      emoji: '🥘',
      summary: '명절 자리에서 없어서는 안 될 든든한 일꾼, 당신',
      description:
        '명절 준비가 시작되는 순간부터 자연스럽게 손이 움직이는 타입이에요. 전을 부치든 나물을 무치든, 누가 시키지 않아도 먼저 나서서 자리를 채우고, 그 과정에서 묘한 뿌듯함을 느끼죠. 함께 몸을 움직이며 이야기 나누는 시간 자체를 좋아하는 편이라, 명절이 힘든 일이라기보다는 하나의 "함께하는 프로젝트"처럼 느껴질 때가 많아요. 다만 너무 많은 걸 혼자 떠안지 않도록, 가끔은 손을 놓고 쉬는 것도 잊지 마세요.',
      strengths: [
        '눈치 빠르게 필요한 일을 먼저 찾아서 해요',
        '함께 움직이며 대화 나누는 걸 좋아해요',
        '가족들 사이에서 든든하다는 말을 자주 들어요',
      ],
      cautions: [
        '혼자 너무 많은 일을 떠안다가 정작 쉬지 못할 수 있어요',
        '다른 사람 몫까지 챙기다 보면 은근히 지칠 수 있어요',
      ],
      recommendations: [
        '한 가지 일은 다른 가족에게 슬쩍 넘겨보세요',
        '중간에 잠깐이라도 앉아서 쉬는 시간을 스스로에게 허락해주세요',
      ],
      shareText: '나는 명절 자리 든든하게 책임지는 주방 지원군형!',
      color: '#fb7185',
    },
    {
      id: 'counter-guard',
      title: '잔소리 방어형',
      shortTitle: '잔소리 방어',
      emoji: '🛡️',
      summary: '예상 질문 리스트를 미리 준비해두는 센스쟁이, 당신',
      description:
        '"취업은 언제", "결혼은 안 하니" 같은 질문이 나올 걸 미리 예상하고, 자연스럽게 화제를 돌리거나 재치 있게 받아치는 데 능한 편이에요. 당황하지 않고 여유 있게 넘기는 모습 덕분에 주변에서도 은근히 의지하는 사람이 많죠. 갈등을 만들기보다는 부드럽게 상황을 정리하는 쪽을 택하는 평화주의자이기도 해요. 다만 매번 방패 역할만 하다 보면 정작 자기 얘기는 못 하고 넘어갈 때가 많으니, 가끔은 내 이야기도 슬쩍 꺼내보세요.',
      strengths: [
        '어색한 순간을 재치 있게 넘기는 순발력이 있어요',
        '갈등 없이 분위기를 부드럽게 정리할 줄 알아요',
        '주변 사람들이 편하게 기댈 수 있는 존재예요',
      ],
      cautions: [
        '매번 방어만 하다 보면 정작 내 얘기는 못 할 수 있어요',
        '분위기 맞추는 데 신경 쓰다 은근히 진이 빠질 수 있어요',
      ],
      recommendations: [
        '방어만 하지 말고 가끔은 내 근황도 먼저 꺼내보세요',
        '모든 질문에 완벽하게 답하지 않아도 괜찮다는 걸 기억하세요',
      ],
      shareText: '나는 예상 질문지 미리 준비해두는 잔소리 방어형!',
      color: '#e11d48',
    },
    {
      id: 'kids-entertainer',
      title: '조카 놀이 담당형',
      shortTitle: '조카 놀이 담당',
      emoji: '🧸',
      summary: '도착하자마자 조카들에게 인기 만점인 당신',
      description:
        '명절만 되면 자동으로 조카들의 놀이 상대가 되는 타입이에요. 바닥에 같이 앉아 게임을 하거나 술래잡기를 하다 보면 시간 가는 줄 모르고, 정신없이 놀아주면서도 은근히 그 시간이 제일 즐겁게 느껴지죠. 덕분에 어른들 사이의 어색한 대화를 자연스럽게 피할 수 있다는 부수 효과도 있어요. 다만 체력 소모가 만만치 않으니, 중간중간 숨 돌릴 타이밍도 챙기는 게 좋아요.',
      strengths: [
        '아이들과 눈높이를 맞추는 데 타고났어요',
        '어색한 자리를 놀이로 자연스럽게 풀어내요',
        '순수하게 즐거워하는 모습이 주변을 훈훈하게 만들어요',
      ],
      cautions: [
        '체력 소모가 커서 명절이 끝나면 유독 피곤할 수 있어요',
        '놀아주는 데 집중하다 정작 내 끼니는 놓칠 수 있어요',
      ],
      recommendations: [
        '중간에 잠깐이라도 앉아서 물 한 잔 마시는 여유를 가져보세요',
        '다른 어른에게 배턴 터치를 요청하는 것도 좋은 방법이에요',
      ],
      shareText: '나는 조카들 사이에서 인기 폭발인 조카 놀이 담당형!',
      color: '#fda4af',
    },
    {
      id: 'early-leaver',
      title: '눈치껏 일찍 가는형',
      shortTitle: '눈치껏 조기 퇴장',
      emoji: '🚪',
      summary: '이미 마음속으로 귀가 시간을 정해둔 당신',
      description:
        '명절 자리에 도착하는 순간부터 은근히 다음 일정을 계산하는 타입이에요. 예의는 다 지키면서도, 적당한 타이밍을 정확히 캐치해서 자연스럽게 자리를 정리하고 나오는 데 능숙하죠. 오래 머물기보다는 짧고 굵게, 필요한 만큼만 함께하는 걸 선호해요. 이런 효율적인 스타일 덕분에 명절 피로도가 상대적으로 적은 편이지만, 가끔은 조금 더 머물러도 좋을 순간을 놓치는 건 아닌지 돌아봐도 좋아요.',
      strengths: [
        '상황 파악이 빠르고 타이밍을 잘 잡아요',
        '무리하지 않고 나만의 페이스를 지킬 줄 알아요',
        '명절 피로를 최소화하는 효율적인 감각이 있어요',
      ],
      cautions: [
        '너무 일찍 빠지려다 서운해하는 가족이 있을 수 있어요',
        '깊은 대화를 나눌 기회를 놓칠 때가 있어요',
      ],
      recommendations: [
        '가끔은 예정보다 조금만 더 머물러보는 것도 괜찮아요',
        '떠나기 전에 한 사람과는 진심 어린 대화를 나눠보세요',
      ],
      shareText: '나는 눈치껏 딱 필요한 만큼만 있다 가는 조기 퇴장형!',
      color: '#be123c',
    },
    {
      id: 'mood-maker',
      title: '분위기 메이커형',
      shortTitle: '분위기 메이커',
      emoji: '🎤',
      summary: '명절 자리를 웃음바다로 만드는 흥 부자, 당신',
      description:
        '어색한 침묵이 흐르려는 순간, 자연스럽게 재밌는 이야기나 농담을 꺼내 분위기를 살리는 타입이에요. 다 같이 웃고 떠드는 시간을 만드는 데 진심이고, 그 덕분에 명절 자리가 한결 화기애애해지죠. 사람들 사이에서 에너지를 얻는 편이라, 명절 모임 자체를 은근히 기다리기도 해요. 다만 늘 분위기를 책임지려다 보면 정작 본인의 감정은 뒷전이 될 수 있으니, 가끔은 그냥 편하게 있어도 괜찮아요.',
      strengths: [
        '어색한 분위기를 순식간에 풀어내는 재주가 있어요',
        '사람들과 함께하는 시간에서 에너지를 얻어요',
        '모두를 웃게 만드는 긍정 에너지가 넘쳐요',
      ],
      cautions: [
        '분위기를 책임지려다 정작 내 기분은 못 챙길 수 있어요',
        '텐션을 계속 유지하다 보면 은근히 방전될 수 있어요',
      ],
      recommendations: [
        '가끔은 분위기 메이커 역할을 내려놓고 편하게 있어보세요',
        '나를 웃게 해주는 사람 옆에서 잠깐 쉬어가도 좋아요',
      ],
      shareText: '나는 명절 자리를 웃음바다로 만드는 분위기 메이커형!',
      color: '#f43f5e',
    },
  ],
}
