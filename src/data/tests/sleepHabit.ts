import type { TestDefinition } from '../../types/test'

export const sleepHabitTest: TestDefinition = {
  slug: 'sleep-habit',
  title: '나의 수면 습관 테스트',
  shortTitle: '수면 습관',
  description: '나는 언제 잠들고, 언제 눈을 뜰까? 나의 잠자리 패턴을 알아봐요.',
  intro: '누군가는 해가 지자마자 눈이 감기고, 누군가는 밤이 깊어야 정신이 맑아져요. 잠자는 시간도, 잠드는 방식도 사람마다 이렇게 다르답니다. 11개의 질문으로 나의 수면 습관이 어떤 스타일인지, 친구와 비교하며 재미있게 알아봐요.',
  category: '라이프스타일',
  emoji: '😴',
  estimatedMinutes: 3,
  theme: { color: '#1e40af', gradientFrom: '#3b82f6', gradientTo: '#1e3a8a' },
  isPublished: true,
  isNew: true,
  relatedTestSlugs: ['game-style', 'solo-living'],
  seo: {
    title: '나의 수면 습관 테스트 | 오늘의 테스트',
    description: '아침형 인간, 올빼미형, 잠은 짧고 굵게형, 늦잠 위기형, 규칙적인 루틴형. 11가지 질문으로 나의 수면 습관을 재미있게 알아보세요.',
    faq: [
      {
        question: '아침형인지 올빼미형인지 어떻게 알 수 있나요?',
        answer:
          '잠자리에 드는 시간, 알람에 반응하는 방식, 낮잠 습관, 주말 기상 패턴 등을 살펴보면 힌트가 보여요. 이 테스트는 11가지 질문으로 그 힌트들을 모아 아침형, 올빼미형, 짧고 굵게형, 늦잠 위기형, 루틴형 중 나와 가장 가까운 수면 스타일을 찾아드려요.',
      },
      {
        question: '테스트는 얼마나 걸리나요?',
        answer: '11개의 질문으로 이루어져 있고 평균 3분이면 부담 없이 마칠 수 있어요.',
      },
      {
        question: '결과가 매번 다르게 나올 수도 있나요?',
        answer:
          '재미로 보는 가벼운 자가 점검용 콘텐츠라 의학적인 진단은 아니에요. 요즘의 생활 패턴이나 컨디션에 따라 답이 조금씩 달라질 수 있으니 편하게 즐겨주세요.',
      },
    ],
  },
  questions: [
    {
      id: 'q1',
      question: '평소 나는 언제 잠자리에 드나요?',
      choices: [
        { id: 'q1a', label: '해가 지고 얼마 안 돼서 눈이 스르륵 감겨요, 일찍 자는 게 편해요', effects: { 'morning-lark': 2 } },
        { id: 'q1b', label: '다들 잠든 새벽에 오히려 정신이 맑아져요', effects: { 'night-owl': 2 } },
        { id: 'q1c', label: '잘 시간은 정해놨는데 그대로 지켜본 적이 거의 없어요', effects: { 'snooze-crisis': 2 } },
        { id: 'q1d', label: '긴 시간보다 짧고 깊게 자는 걸 선호해서 취침 시간은 그때그때 달라요', effects: { 'power-napper': 2, 'routine-keeper': 1 } },
      ],
    },
    {
      id: 'q2',
      question: '아침 알람이 울리면 나는?',
      choices: [
        { id: 'q2a', label: '알람 울리기 전에 이미 눈이 떠져 있어요', effects: { 'morning-lark': 2 } },
        { id: 'q2b', label: '일어나긴 하지만 정신 차리는 데 한참 걸려요, 몸이 아직 밤 모드예요', effects: { 'night-owl': 2 } },
        { id: 'q2c', label: '알람 한 번에 바로 일어나요, 매일 똑같은 루틴이라 익숙해요', effects: { 'routine-keeper': 2 } },
        { id: 'q2d', label: '알람은 여러 개 맞춰두지만 결국 마지막 것에 겨우 일어나요, 그래도 일어나면 바로 정신이 들어요', effects: { 'power-napper': 2, 'snooze-crisis': 1 } },
      ],
    },
    {
      id: 'q3',
      question: '주말 아침, 눈뜨는 시간은?',
      choices: [
        { id: 'q3a', label: '평일과 똑같이 일찍 눈이 떠져요, 늦잠은 저와 안 맞아요', effects: { 'morning-lark': 2 } },
        { id: 'q3b', label: '해가 중천에 뜰 때까지 자요, 주말이야말로 늦잠 타임이에요', effects: { 'night-owl': 2 } },
        { id: 'q3c', label: '일어나야지 하면서도 정신 차려보면 점심때가 다 됐어요', effects: { 'snooze-crisis': 2 } },
        { id: 'q3d', label: '평일보다 딱 한두 시간만 더 자고 일어나요, 리듬 깨지는 게 싫어서요', effects: { 'routine-keeper': 2, 'power-napper': 1 } },
      ],
    },
    {
      id: 'q4',
      question: '낮잠에 대한 나의 생각은?',
      choices: [
        { id: 'q4a', label: '낮잠은 거의 안 자요, 낮에 자면 밤에 못 잘까 봐 피해요', effects: { 'morning-lark': 2 } },
        { id: 'q4b', label: '20분만 자도 완전히 충전돼요, 낮잠이야말로 최고의 무기예요', effects: { 'power-napper': 2 } },
        { id: 'q4c', label: '잠깐만 눈 붙인다는 게 어느새 두 시간이 훌쩍 지나 있어요', effects: { 'snooze-crisis': 2 } },
        { id: 'q4d', label: '낮잠 시간도 정해놓고 자요, 딱 그만큼만 자고 알아서 깨요', effects: { 'routine-keeper': 2, 'night-owl': 1 } },
      ],
    },
    {
      id: 'q5',
      question: '잠들기 직전, 핸드폰은?',
      choices: [
        { id: 'q5a', label: '이거 하나만 더 보고 자야지 하다가 새벽을 맞이해요', effects: { 'night-owl': 2 } },
        { id: 'q5b', label: '잠깐 보다가 순식간에 잠들어요, 손에 쥔 채로 잠들 때도 있어요', effects: { 'power-napper': 2 } },
        { id: 'q5c', label: '보다가 잠든 건지 기절한 건지 기억이 잘 안 나요', effects: { 'snooze-crisis': 2 } },
        { id: 'q5d', label: '자기 30분 전엔 폰을 아예 다른 방에 두는 규칙이 있어요', effects: { 'routine-keeper': 2, 'morning-lark': 1 } },
      ],
    },
    {
      id: 'q6',
      question: '낯선 곳에서 자야 할 때 나는?',
      choices: [
        { id: 'q6a', label: '장소가 바뀌어도 눈뜨는 시간은 거의 그대로예요', effects: { 'morning-lark': 2 } },
        { id: 'q6b', label: '오히려 낯선 곳에서 더 늦게까지 안 자고 버텨요', effects: { 'night-owl': 2 } },
        { id: 'q6c', label: '낯선 잠자리라 밤새 뒤척이다 아침에야 겨우 잠들어요', effects: { 'snooze-crisis': 2 } },
        { id: 'q6d', label: '베개가 바뀌어도 눕기만 하면 금방 자요, 대신 짧게 끊어서 자요', effects: { 'power-napper': 2, 'routine-keeper': 1 } },
      ],
    },
    {
      id: 'q7',
      question: '잠자는 자세나 습관을 보면?',
      choices: [
        { id: 'q7a', label: '누우면 바로 자세를 잡고 뒤척임 없이 푹 자요', effects: { 'morning-lark': 2 } },
        { id: 'q7b', label: '이 자세 저 자세 뒤척이다가 한참 뒤에야 잠들어요', effects: { 'night-owl': 2 } },
        { id: 'q7c', label: '항상 같은 쪽으로 누워서 자요, 자세까지도 저만의 루틴이에요', effects: { 'routine-keeper': 2 } },
        { id: 'q7d', label: '아무 데서나 아무 자세로나 잘 자요, 대신 눈뜨면 바로 이불을 걷어차요', effects: { 'power-napper': 2, 'snooze-crisis': 1 } },
      ],
    },
    {
      id: 'q8',
      question: '잠들기 전 나만의 루틴이 있다면?',
      choices: [
        { id: 'q8a', label: '미리 씻고 정리까지 마치고 여유롭게 누워요', effects: { 'morning-lark': 2 } },
        { id: 'q8b', label: '딱히 정해진 루틴은 없고 눈이 감길 때까지 뭔가를 하다가 자요', effects: { 'night-owl': 2 } },
        { id: 'q8c', label: '매일 같은 순서로, 같은 시간에 하는 나만의 취침 루틴이 있어요', effects: { 'routine-keeper': 2 } },
        { id: 'q8d', label: '루틴을 지키려다가도 하루이틀 만에 흐트러져요, 대신 잠은 금방 들어요', effects: { 'snooze-crisis': 2, 'power-napper': 1 } },
      ],
    },
    {
      id: 'q9',
      question: '며칠 늦게 잔 다음 날, 나는?',
      choices: [
        { id: 'q9a', label: '그래도 평소 일어나는 시간엔 눈이 떠져요', effects: { 'morning-lark': 2 } },
        { id: 'q9b', label: '낮잠 한 번으로 싹 회복해요', effects: { 'power-napper': 2 } },
        { id: 'q9c', label: '며칠은 정신이 몽롱해요, 리듬이 완전히 무너져요', effects: { 'snooze-crisis': 2 } },
        { id: 'q9d', label: '다음 날 바로 원래 시간에 자면서 리듬을 되돌려놔요', effects: { 'routine-keeper': 2, 'night-owl': 1 } },
      ],
    },
    {
      id: 'q10',
      question: '스누즈 버튼, 나는?',
      choices: [
        { id: 'q10a', label: '스누즈를 몇 번을 눌러도 모자라요', effects: { 'night-owl': 2 } },
        { id: 'q10b', label: '스누즈 없이 한 번에 벌떡 일어나는 편이에요, 대신 자는 시간 자체가 짧아요', effects: { 'power-napper': 2 } },
        { id: 'q10c', label: '스누즈 누르다가 아예 알람을 못 듣고 늦은 적도 있어요', effects: { 'snooze-crisis': 2 } },
        { id: 'q10d', label: '스누즈 기능 자체를 안 써요, 처음 알람에 바로 일어나는 습관을 들였어요', effects: { 'routine-keeper': 2, 'morning-lark': 1 } },
      ],
    },
    {
      id: 'q11',
      question: '내 수면 습관을 한마디로 하면?',
      choices: [
        { id: 'q11a', label: '일찍 자고 일찍 일어나는 게 제일 자연스러워요', effects: { 'morning-lark': 2 } },
        { id: 'q11b', label: '밤에 살아나는 타입, 그게 바로 저예요', effects: { 'night-owl': 2 } },
        { id: 'q11c', label: '매번 다짐만 하고 패턴은 늘 제멋대로예요', effects: { 'snooze-crisis': 2 } },
        { id: 'q11d', label: '짧고 굵게, 효율적으로 자는 게 제 원칙이에요', effects: { 'power-napper': 2, 'routine-keeper': 1 } },
      ],
    },
  ],
  results: [
    {
      id: 'morning-lark',
      title: '아침형 인간',
      shortTitle: '아침형',
      emoji: '🌅',
      summary: '해가 뜨면 저절로 눈이 떠지는, 타고난 얼리버드예요.',
      description:
        '당신은 몸속에 정확한 시계가 있는 사람이에요. 밤이 깊어지면 자연스럽게 졸음이 오고, 아침이 되면 알람보다 먼저 눈이 떠지는 편이죠. 남들이 아직 이불 속에서 씨름할 때 이미 하루를 시작하고 있는 타입이에요.',
      strengths: ['아침 시간을 알차게 활용해요', '규칙적인 수면 덕분에 컨디션 기복이 적어요', '약속 시간에 늦을 걱정이 별로 없어요'],
      cautions: ['저녁 약속이나 밤 모임에서는 눈이 스르륵 감길 수 있어요', '일정이 늦게 끝나면 다음 날 리듬이 흔들릴 수 있어요'],
      recommendations: ['저녁 약속은 가능하면 이른 시간대로 잡아보세요', '이미 좋은 리듬을 갖고 있으니 지금 패턴을 잘 지켜보세요'],
      shareText: '나는 아침형 인간 - 해 뜨면 저절로 눈이 떠져요',
      color: '#2563eb',
    },
    {
      id: 'night-owl',
      title: '올빼미형',
      shortTitle: '올빼미형',
      emoji: '🦉',
      summary: '세상이 조용해지는 밤, 그때부터 진짜 하루가 시작돼요.',
      description:
        '당신에게 밤은 가장 편안하고 정신이 맑아지는 시간이에요. 다들 잠든 새벽에 오히려 머리가 또렷해지고, 이런저런 생각과 아이디어가 떠오르죠. 대신 아침은 늘 힘든 시간대라, 눈뜨는 데 남들보다 시간이 조금 더 필요해요.',
      strengths: ['밤 시간의 고요함 속에서 몰입도가 높아요', '여유롭게 하루를 마무리하는 힘이 있어요'],
      cautions: ['아침 일정이 있는 날엔 컨디션 관리가 필요해요', '평일과 주말의 리듬 차이가 크게 벌어질 수 있어요'],
      recommendations: ['다음 날 오전 일정이 있다면 취침 시간을 조금만 당겨보세요', '커튼을 살짝 열어두고 자면 아침에 일어나기가 한결 수월해져요'],
      shareText: '나는 올빼미형 - 밤에 진짜 내가 시작돼요',
      color: '#4f46e5',
    },
    {
      id: 'power-napper',
      title: '잠은 짧고 굵게형',
      shortTitle: '짧고 굵게형',
      emoji: '⚡',
      summary: '긴 시간보다 깊이가 중요해요, 짧게 자도 확실하게 충전해요.',
      description:
        '당신은 수면 시간보다 수면의 질을 중요하게 여기는 타입이에요. 눕기만 하면 금방 잠들고, 짧은 낮잠 한 번으로도 완전히 개운해지죠. 남들보다 적게 자는 것 같아도 나만의 효율적인 방식으로 컨디션을 잘 유지해요.',
      strengths: ['잠드는 속도가 빨라서 시간을 아낄 수 있어요', '짧은 낮잠만으로도 리프레시가 잘 돼요'],
      cautions: ['짧은 잠에 익숙해지다 보면 정작 깊이 쉬어야 할 때를 놓칠 수 있어요', '여기저기서 쪽잠을 자다 보면 밤잠의 질이 애매해질 수 있어요'],
      recommendations: ['가끔은 알람 없이 늘어지게 자는 날을 만들어보세요', '낮잠은 20~30분 이내로 짧게 유지하면 밤잠에 방해가 덜해요'],
      shareText: '나는 잠은 짧고 굵게형 - 눕자마자 자고 개운하게 일어나요',
      color: '#0ea5e9',
    },
    {
      id: 'snooze-crisis',
      title: '늦잠 위기형',
      shortTitle: '늦잠 위기형',
      emoji: '😵',
      summary: '자야지 결심은 늘 하는데, 패턴은 매번 제멋대로예요.',
      description:
        '당신의 수면 시간표는 그날그날 즉흥적으로 정해져요. 어제는 일찍 잤다가 오늘은 늦게 자고, 알람은 여러 개 맞춰도 결국 마지막 것에 겨우 눈을 뜨는 편이죠. 자유분방한 만큼 재미는 있지만, 리듬을 찾기가 쉽지 않은 타입이에요.',
      strengths: ['상황에 따라 유연하게 잠을 조절할 수 있어요', '틀에 얽매이지 않는 자유로운 스타일이에요'],
      cautions: ['패턴이 불규칙해서 컨디션 예측이 어려울 수 있어요', '늦잠으로 아침 일정을 놓칠 위험이 있어요'],
      recommendations: ['기상 시간만이라도 하나로 고정해보면 리듬 잡기가 훨씬 쉬워져요', '알람은 딱 하나만 정해두고 손 닿지 않는 곳에 두어보세요'],
      shareText: '나는 늦잠 위기형 - 결심은 매번 하는데 패턴은 늘 제멋대로예요',
      color: '#f97316',
    },
    {
      id: 'routine-keeper',
      title: '규칙적인 루틴형',
      shortTitle: '루틴형',
      emoji: '📅',
      summary: '언제 어디서든, 나만의 잠자리 루틴을 지켜요.',
      description:
        '당신은 수면에도 자기만의 규칙이 있는 사람이에요. 매일 비슷한 시간에 자고 일어나고, 잠들기 전 루틴까지 정해져 있어서 컨디션이 늘 안정적이죠. 여행지에서도 리듬이 잘 깨지지 않는, 흔들리지 않는 수면 습관의 소유자예요.',
      strengths: ['일정한 리듬 덕분에 컨디션 관리가 쉬워요', '환경이 바뀌어도 크게 흔들리지 않아요'],
      cautions: ['루틴이 깨지는 날엔 스트레스를 좀 더 느낄 수 있어요', '가끔은 계획에 없던 늦은 밤이 부담스럽게 느껴질 수 있어요'],
      recommendations: ['가끔은 루틴에서 벗어나는 하루도 괜찮다고 스스로에게 말해주세요', '지금의 규칙적인 습관은 충분히 좋은 자산이니 자신감을 가지세요'],
      shareText: '나는 규칙적인 루틴형 - 언제 어디서든 내 페이스를 지켜요',
      color: '#1e40af',
    },
  ],
}
