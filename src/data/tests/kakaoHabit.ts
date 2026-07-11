import type { TestDefinition } from '../../types/test'

export const kakaoHabitTest: TestDefinition = {
  slug: 'kakao-habit',
  title: '나의 카톡 습관 테스트',
  shortTitle: '카톡 습관',
  description: '나는 칼답형일까, 읽씹 마이페이스형일까?',
  intro:
    '카톡 하나에도 사람마다 스타일이 다 달라요. 누군가는 알림이 뜨자마자 칼답을 하고, 누군가는 읽씹을 밥 먹듯이 하죠. 또 누군가는 이모티콘부터 먼저 던지고, 누군가는 그냥 전화가 편하다고 말해요. 11개의 질문으로 나는 어떤 카톡 습관과 텐션을 가졌는지, 친구들과 비교하며 알아봐요.',
  category: '관계',
  emoji: '💬',
  estimatedMinutes: 3,
  theme: { color: '#f59e0b', gradientFrom: '#fbbf24', gradientTo: '#d97706' },
  isPublished: true,
  isNew: true,
  relatedTestSlugs: ['work-dinner', 'spending-style'],
  seo: {
    title: '나의 카톡 습관 테스트 | 오늘의 테스트',
    description:
      '칼답 속사포형, 읽씹 마이페이스형, 이모티콘 폭격형, 통화 선호형, 밀당 텐션형. 11가지 질문으로 나의 카톡 대화 습관과 텐션을 알아보세요.',
  },
  questions: [
    {
      id: 'q1',
      question: '카톡 알림이 울리면 나는?',
      choices: [
        { id: 'q1a', label: '알림 뜨자마자 확인부터 해요, 안 보면 찝찝해서 못 참겠어요', effects: { 'instant-reply': 2 } },
        { id: 'q1b', label: '일단 확인은 하는데 답장은 제 타이밍에 해요', effects: { 'mypace-read': 2 } },
        { id: 'q1c', label: '이모티콘 하나 던지고 뜸 좀 들이다 답장해요', effects: { 'emoji-bomber': 2, 'tension-player': 1 } },
        { id: 'q1d', label: '메시지보다 그냥 전화가 편해서 바로 전화 걸어요', effects: { 'call-preferrer': 2 } },
      ],
    },
    {
      id: 'q2',
      question: '친구가 "읽씹했다"고 서운해하면?',
      choices: [
        { id: 'q2a', label: '서운해할 새도 없이 바로 전화 걸어서 해명해요', effects: { 'instant-reply': 2, 'call-preferrer': 1 } },
        { id: 'q2b', label: '그냥 그러려니 해요, 저도 원래 답장이 늦은 편이라', effects: { 'mypace-read': 2 } },
        { id: 'q2c', label: '미안한 마음을 이모티콘 폭탄으로 표현해요', effects: { 'emoji-bomber': 2 } },
        { id: 'q2e', label: '사실 약간의 밀당이었다고 능청스럽게 넘겨요', effects: { 'tension-player': 2 } },
      ],
    },
    {
      id: 'q3',
      question: '단체 카톡방에서 나는?',
      choices: [
        { id: 'q3a', label: '알림이 뜨면 이모티콘 하나 던지고 바로바로 대답하는 편이에요', effects: { 'instant-reply': 2, 'emoji-bomber': 1 } },
        { id: 'q3b', label: '대화가 많이 쌓여 있으면 나중에 몰아서 읽어요', effects: { 'mypace-read': 2 } },
        { id: 'q3c', label: '다 같이 있는 얘기도 굳이 카톡보다 전화나 만나서 하는 게 편해요', effects: { 'call-preferrer': 2 } },
        { id: 'q3e', label: '단체방 텐션을 은근히 주도하면서 분위기를 조율해요', effects: { 'tension-player': 2 } },
      ],
    },
    {
      id: 'q4',
      question: '답장이 길어질 것 같은 대화는?',
      choices: [
        { id: 'q4a', label: '오히려 더 빨리 답해서 대화를 끊기지 않게 이어가요', effects: { 'instant-reply': 2 } },
        { id: 'q4c', label: '말이 길어질 것 같으면 이모티콘으로 먼저 분위기를 풀어요', effects: { 'emoji-bomber': 2 } },
        { id: 'q4d', label: '그럴 땐 그냥 전화하는 게 훨씬 빨라요, 길게 쓰는 거 자체가 귀찮아요', effects: { 'call-preferrer': 2, 'mypace-read': 1 } },
        { id: 'q4e', label: '일부러 조금 여유를 두고 답하면서 분위기를 즐겨요', effects: { 'tension-player': 2 } },
      ],
    },
    {
      id: 'q5',
      question: '이모티콘을 고를 때 나는?',
      choices: [
        { id: 'q5b', label: '이모티콘 고르다가 정작 답장 타이밍을 놓쳐요', effects: { 'mypace-read': 2 } },
        { id: 'q5c', label: '상황에 딱 맞는 걸 찾느라 시간 가는 줄 모르지만, 찾자마자 바로 보내요', effects: { 'emoji-bomber': 2, 'instant-reply': 1 } },
        { id: 'q5d', label: '이모티콘보다 그냥 전화로 웃으면서 말하는 게 편해요', effects: { 'call-preferrer': 2 } },
        { id: 'q5e', label: '일부러 썸타는 이모티콘으로 살짝 텐션을 줘요', effects: { 'tension-player': 2 } },
      ],
    },
    {
      id: 'q6',
      question: '상대가 답장이 늦으면?',
      choices: [
        { id: 'q6a', label: '늦으면 괜히 조바심 나서 한 번 더 보내요', effects: { 'instant-reply': 2 } },
        { id: 'q6b', label: '늦나 보다 하고 저도 제 할 일 해요', effects: { 'mypace-read': 2 } },
        { id: 'q6c', label: '기다리는 동안 이모티콘 짤이나 찾아봐요', effects: { 'emoji-bomber': 2 } },
        { id: 'q6d', label: '너무 안 오면 그냥 전화해버려요, 튕기는 것도 알아서 눈치껏 받아줘요', effects: { 'call-preferrer': 2, 'tension-player': 1 } },
      ],
    },
    {
      id: 'q7',
      question: '중요한 얘기를 해야 할 때 나는?',
      choices: [
        { id: 'q7a', label: '중요한 얘기일수록 길게 쓰기보다 전화로 빨리 정리해서 말해버려요', effects: { 'instant-reply': 2, 'call-preferrer': 1 } },
        { id: 'q7b', label: '생각을 정리한 다음 제 타이밍에 얘기를 꺼내요', effects: { 'mypace-read': 2 } },
        { id: 'q7c', label: '무거운 얘기 전에 이모티콘으로 분위기부터 풀어요', effects: { 'emoji-bomber': 2 } },
        { id: 'q7e', label: '진지한 얘기일수록 살짝 뜸 들이면서 타이밍을 재요', effects: { 'tension-player': 2 } },
      ],
    },
    {
      id: 'q8',
      question: '카톡 프로필 사진이나 상태메시지는?',
      choices: [
        { id: 'q8a', label: '상태메시지도 그때그때 기분 따라 바로바로 바꿔요', effects: { 'instant-reply': 2 } },
        { id: 'q8b', label: '프로필 바꾼 지 꽤 됐어요, 딱히 신경 안 써요', effects: { 'mypace-read': 2 } },
        { id: 'q8d', label: '프로필보다는 직접 만나거나 통화로 근황 나누는 게 좋아요', effects: { 'call-preferrer': 2 } },
        { id: 'q8e', label: '상태메시지에 은근히 의미심장한 이모지랑 문구를 걸어둬요', effects: { 'tension-player': 2, 'emoji-bomber': 1 } },
      ],
    },
    {
      id: 'q9',
      question: '"ㅇㅇ" 한 글자로 답장이 오면?',
      choices: [
        { id: 'q9a', label: '답답해서 바로 더 물어봐요, 짧은 답장은 못 참겠어요', effects: { 'instant-reply': 2 } },
        { id: 'q9c', label: '굳이 캐묻지 않고 이모티콘으로 가볍게 맞장구쳐줘요', effects: { 'emoji-bomber': 2, 'mypace-read': 1 } },
        { id: 'q9d', label: '그럴 땐 그냥 전화해서 물어보는 게 빨라요', effects: { 'call-preferrer': 2 } },
        { id: 'q9e', label: '괜히 의미 부여하며 답장을 살짝 늦춰요', effects: { 'tension-player': 2 } },
      ],
    },
    {
      id: 'q10',
      question: '연인이나 썸 상대와 카톡할 때 나는?',
      choices: [
        { id: 'q10b', label: '썸 상대에게도 제 페이스대로 답장해요, 급할 거 없죠', effects: { 'mypace-read': 2 } },
        { id: 'q10c', label: '귀여운 이모티콘으로 마음을 표현하는 편이에요', effects: { 'emoji-bomber': 2 } },
        { id: 'q10d', label: '목소리 듣는 게 더 설레서 전화를 자주 걸고, 그마저도 못 참고 바로 걸어요', effects: { 'call-preferrer': 2, 'instant-reply': 1 } },
        { id: 'q10e', label: '일부러 조금 늦게 답장하면서 밀당을 즐겨요', effects: { 'tension-player': 2 } },
      ],
    },
    {
      id: 'q11',
      question: '카톡을 몇 시간째 안 봤다는 걸 깨달으면?',
      choices: [
        { id: 'q11a', label: '화들짝 놀라서 바로 확인부터 해요', effects: { 'instant-reply': 2 } },
        { id: 'q11b', label: '그런 날도 있죠, 딱히 놀라지 않아요', effects: { 'mypace-read': 2 } },
        { id: 'q11c', label: '밀린 카톡에 이모티콘으로 답장을 몰아서 보내면서 은근히 텐션을 살짝 올려요', effects: { 'emoji-bomber': 2, 'tension-player': 1 } },
        { id: 'q11d', label: '카톡 대신 전화로 한 번에 밀린 얘기를 풀어요', effects: { 'call-preferrer': 2 } },
      ],
    },
  ],
  results: [
    {
      id: 'instant-reply',
      title: '칼답 속사포형',
      shortTitle: '칼답 속사포',
      emoji: '⚡',
      summary: '카톡이 오면 0.1초 만에 답장 버튼을 누르는 당신',
      description:
        '알림이 뜨는 순간 이미 손가락이 움직이고 있어요. 읽씹은 상상도 못 하고, 답장이 늦어지면 오히려 내가 더 불안해지는 타입이에요. 대화의 흐름이 끊기는 걸 못 참는, 그야말로 카톡계의 스프린터예요.',
      strengths: ['대화가 끊기지 않아 상대방이 편하게 느껴요', '궁금한 건 바로바로 확인해서 오해가 쌓일 일이 적어요'],
      cautions: ['상대방의 답장 속도에 너무 신경 쓰다 보면 혼자 마음 졸일 수 있어요', '즉각 반응하다 보니 정작 내 할 일에 집중이 흐트러질 때가 있어요'],
      recommendations: ['가끔은 알림을 몰아서 확인하는 여유도 연습해보세요', '답장이 늦다고 초조해하지 말고 5분만 기다려보는 습관을 들여보세요'],
      shareText: '나는 카톡 오면 0.1초 만에 답장하는 칼답 속사포형!',
      color: '#f59e0b',
    },
    {
      id: 'mypace-read',
      title: '읽씹 마이페이스형',
      shortTitle: '읽씹 마이페이스',
      emoji: '😌',
      summary: '내 페이스가 우선, 답장은 마음이 내킬 때 하는 당신',
      description:
        '읽었다고 바로 답해야 한다는 법은 없다고 생각해요. 급할 것 없이 내 할 일 먼저 하고, 여유가 생기면 그때 찬찬히 답장을 보내는 스타일이에요. 무심해 보여도 사실은 누구보다 자기 리듬을 잘 지키는 사람이에요.',
      strengths: ['카톡에 휘둘리지 않고 자기 할 일에 집중할 수 있어요', '급하게 답장하다 실수하는 일이 적어요'],
      cautions: ['상대방은 읽씹당했다고 서운해할 수 있어요', '중요한 연락도 늦게 확인해서 타이밍을 놓칠 수 있어요'],
      recommendations: ['적어도 "지금 바빠서 이따 답할게요" 한 마디는 남겨보세요', '정말 중요한 카톡방은 알림을 따로 설정해두세요'],
      shareText: '나는 내 페이스대로 답장하는 읽씹 마이페이스형!',
      color: '#d97706',
    },
    {
      id: 'emoji-bomber',
      title: '이모티콘 폭격형',
      shortTitle: '이모티콘 폭격',
      emoji: '🎉',
      summary: '말보다 이모티콘이 먼저 나가는 당신',
      description:
        '한 문장을 쓰는 것보다 딱 맞는 이모티콘 하나를 찾는 데 더 진심인 사람이에요. 대화창이 알록달록한 짤과 이모티콘으로 가득 차야 카톡을 제대로 한 것 같은 기분이 들어요. 텍스트보다 표정과 리액션으로 마음을 전하는 타입이에요.',
      strengths: ['대화 분위기를 밝고 유쾌하게 만드는 재주가 있어요', '말로 하기 애매한 감정도 이모티콘으로 센스 있게 전달해요'],
      cautions: ['정작 중요한 내용은 이모티콘에 가려 흐릿해질 수 있어요', '이모티콘 없이 진지하게 얘기해야 할 때 어색함을 느낄 수 있어요'],
      recommendations: ['중요한 얘기는 이모티콘 없이 담백한 문장으로 한 번 더 정리해보세요', '유료 이모티콘 지출은 가끔 점검해보는 것도 좋아요'],
      shareText: '나는 말보다 이모티콘이 먼저 나가는 이모티콘 폭격형!',
      color: '#fbbf24',
    },
    {
      id: 'call-preferrer',
      title: '통화 선호형',
      shortTitle: '통화 선호',
      emoji: '📞',
      summary: '글자보다 목소리가 편한 당신',
      description:
        '카톡으로 길게 설명하느니 그냥 전화 한 통이 훨씬 빠르고 편하다고 생각해요. 오해의 여지가 있는 텍스트보다 목소리 톤과 뉘앙스로 대화하는 걸 좋아하는 사람이에요. 어쩌면 요즘 보기 드문, 통화가 편한 타입이에요.',
      strengths: ['오해 없이 빠르고 정확하게 의사소통할 수 있어요', '목소리를 통해 감정과 진심이 잘 전달돼요'],
      cautions: ['상대방이 통화보다 문자를 편하게 느낀다면 부담스러워할 수 있어요', '갑작스러운 전화가 상대의 상황을 방해할 수도 있어요'],
      recommendations: ['전화 걸기 전에 "통화 가능해?" 한 마디만 먼저 물어보세요', '가벼운 얘기는 문자로도 충분하다는 걸 가끔 떠올려보세요'],
      shareText: '나는 글자보다 목소리가 편한 통화 선호형!',
      color: '#ea580c',
    },
    {
      id: 'tension-player',
      title: '밀당 텐션형',
      shortTitle: '밀당 텐션',
      emoji: '😏',
      summary: '답장 타이밍 하나로 분위기를 쥐락펴락하는 당신',
      description:
        '너무 빠른 답장은 매력이 없다고 생각해요. 적당히 뜸 들이고, 적당히 의미심장하게, 대화의 텐션을 조절하는 데 능한 사람이에요. 본인도 모르게 은근한 밀당의 고수가 되어 있는 타입이에요.',
      strengths: ['대화에 긴장감과 재미를 더할 줄 알아요', '상황에 따라 분위기를 유연하게 조율하는 감각이 있어요'],
      cautions: ['의도치 않게 상대방을 애타게 만들어 오해를 살 수 있어요', '진심을 전해야 할 순간까지 밀당 습관이 나올 수 있어요'],
      recommendations: ['정말 중요한 순간에는 밀당 대신 솔직한 답장을 보내보세요', '상대방이 서운해하지 않는지 가끔 살펴보세요'],
      shareText: '나는 답장 타이밍으로 분위기를 쥐락펴락하는 밀당 텐션형!',
      color: '#c2410c',
    },
  ],
}
