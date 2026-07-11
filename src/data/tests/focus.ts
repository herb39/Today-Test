import type { TestDefinition } from '../../types/test'

export const focusTest: TestDefinition = {
  slug: 'focus',
  title: '나의 집중 스타일 테스트',
  shortTitle: '집중 스타일',
  description: '언제, 어떤 조건에서 나는 가장 깊이 몰입할까?',
  intro:
    '누군가는 조용한 새벽에 가장 깊이 몰입하고, 누군가는 마감 5분 전에야 진짜 실력이 나온다. 집중력은 의지의 문제가 아니라 스타일의 문제다. 11개 질문으로 당신이 언제, 어떤 조건에서 몰입하는지, 그리고 무엇이 그 몰입을 방해하는지 확인해보자. 나에게 맞는 방식을 알면 애쓰지 않아도 자연스럽게 집중할 수 있다.',
  category: '집중력',
  emoji: '🎯',
  estimatedMinutes: 4,
  theme: { color: '#3b82f6', gradientFrom: '#60a5fa', gradientTo: '#3b82f6' },
  isPublished: true,
  isNew: true,
  relatedTestSlugs: ['ai-survival', 'love-style'],
  seo: {
    title: '나의 집중 스타일 테스트 | 오늘의 테스트',
    description:
      '깊은 몰입형, 짧은 스프린트형, 환경 반응형, 마감 점화형. 11가지 질문으로 나의 집중 스타일을 정확히 진단해보세요.',
  },
  questions: [
    {
      id: 'q1',
      question: '일할 때 배경음악이나 소음은?',
      choices: [
        { id: 'q1a', label: '완전한 무음이어야 몰입이 시작된다', effects: { 'deep-diver': 2 } },
        { id: 'q1b', label: '몰아칠 땐 시끄러워도 상관없다, 오히려 텐션이 오른다', effects: { 'sprint-runner': 2 } },
        { id: 'q1c', label: '카페 소음처럼 적당한 소리가 있어야 집중이 잘 된다', effects: { 'env-reactive': 2 } },
        { id: 'q1d', label: '음악 신경 쓸 겨를이 없다, 마감 앞두고서야 집중한다', effects: { 'deadline-igniter': 2 } },
      ],
    },
    {
      id: 'q2',
      question: '마감이 다가올 때 나는?',
      choices: [
        { id: 'q2a', label: '마감이 코앞이어야 비로소 엔진이 걸린다', effects: { 'deadline-igniter': 2 } },
        { id: 'q2b', label: '이미 예전에 몰입해서 끝내놨다, 미리 끝내야 마음이 편하다', effects: { 'deep-diver': 2 } },
        { id: 'q2c', label: '남은 시간을 잘게 쪼개 짧게 여러 번 몰아친다', effects: { 'sprint-runner': 2, 'deadline-igniter': 1 } },
        { id: 'q2d', label: '그날 컨디션과 장소에 따라 대응이 완전히 달라진다', effects: { 'env-reactive': 2 } },
      ],
    },
    {
      id: 'q3',
      question: '가장 집중이 잘 되는 작업 공간은?',
      choices: [
        { id: 'q3a', label: '늘 같은 자리, 같은 세팅이어야 편하다', effects: { 'deep-diver': 2 } },
        { id: 'q3b', label: '장소가 바뀌면 집중력도 확 달라진다, 분위기를 타는 편이다', effects: { 'env-reactive': 2 } },
        { id: 'q3c', label: '어디서든 짧게 몰아치면 그만이라 장소는 크게 안 가린다', effects: { 'sprint-runner': 2 } },
        { id: 'q3d', label: '사실 장소보다 마감까지 남은 시간이 더 중요하다', effects: { 'deadline-igniter': 2 } },
      ],
    },
    {
      id: 'q4',
      question: '하나의 작업을 얼마나 오래 붙잡고 있나?',
      choices: [
        { id: 'q4a', label: '짧게 끊어서 여러 개를 번갈아 처리하는 편이다', effects: { 'sprint-runner': 2 } },
        { id: 'q4b', label: '몇 시간이고 한 가지에 파고든다, 끊기면 오히려 아쉽다', effects: { 'deep-diver': 2 } },
        { id: 'q4c', label: '남은 시간이 줄어들수록 붙잡는 시간이 길어진다', effects: { 'deadline-igniter': 2, 'deep-diver': 1 } },
        { id: 'q4d', label: '오래 붙잡고 있다가도 주변이 바뀌면 리듬이 깨진다', effects: { 'env-reactive': 2 } },
      ],
    },
    {
      id: 'q5',
      question: '알림이나 메신저에 대한 태도는?',
      choices: [
        { id: 'q5a', label: '알림은 다 꺼두고 나만의 세계로 들어간다', effects: { 'deep-diver': 2 } },
        { id: 'q5b', label: '알림이 울리는 순간 집중이 와르르 무너진다', effects: { 'env-reactive': 2 } },
        { id: 'q5c', label: '잠깐 확인하고 바로 복귀, 리듬은 크게 안 깨진다', effects: { 'sprint-runner': 2 } },
        { id: 'q5d', label: '확인할 새도 없다, 마감이 코앞이라 눈에 안 들어온다', effects: { 'deadline-igniter': 2 } },
      ],
    },
    {
      id: 'q6',
      question: '하루 계획을 세우는 방식은?',
      choices: [
        { id: 'q6a', label: '주변 상황에 따라 계획이 그때그때 완전히 바뀐다', effects: { 'env-reactive': 2 } },
        { id: 'q6b', label: '할 일을 짧은 단위로 잘게 쪼개 순서대로 해치운다', effects: { 'sprint-runner': 2 } },
        { id: 'q6c', label: '큰 그림 하나 세워두고 끝까지 깊게 판다', effects: { 'deep-diver': 2 } },
        { id: 'q6d', label: '계획은 세워도 결국 마감 직전에야 실행된다', effects: { 'deadline-igniter': 2 } },
      ],
    },
    {
      id: 'q7',
      question: '몰입이 중간에 깨졌을 때 회복 방법은?',
      choices: [
        { id: 'q7a', label: '짧게 심호흡 한 번 하고 바로 다시 몰아친다', effects: { 'sprint-runner': 2 } },
        { id: 'q7b', label: '남은 시간이 줄었다는 걸 깨달으면 오히려 다시 불붙는다', effects: { 'deadline-igniter': 2, 'sprint-runner': 1 } },
        { id: 'q7c', label: '처음부터 차분히 맥락을 다시 잡아야 돌아온다', effects: { 'deep-diver': 2 } },
        { id: 'q7d', label: '장소를 바꾸거나 자세를 바꿔야 다시 집중이 된다', effects: { 'env-reactive': 2 } },
      ],
    },
    {
      id: 'q8',
      question: '하루 중 집중이 가장 잘 되는 시간대는?',
      choices: [
        { id: 'q8a', label: '주변 소음과 그날 컨디션에 따라 매번 달라진다', effects: { 'env-reactive': 2 } },
        { id: 'q8b', label: '마감 시간이 가까워지는 그 순간이 곧 골든타임이다', effects: { 'deadline-igniter': 2 } },
        { id: 'q8c', label: '시간대는 상관없다, 마음먹으면 짧고 굵게 끝낸다', effects: { 'sprint-runner': 2 } },
        { id: 'q8d', label: '새벽이나 밤, 아무도 없을 때 가장 깊이 들어간다', effects: { 'deep-diver': 2 } },
      ],
    },
    {
      id: 'q9',
      question: '여러 일을 동시에 처리해야 할 때는?',
      choices: [
        { id: 'q9a', label: '급한 것부터 마감 순서대로 처리한다', effects: { 'deadline-igniter': 2, 'sprint-runner': 1 } },
        { id: 'q9b', label: '주변이 산만하면 여러 일이 한꺼번에 엉킨다', effects: { 'env-reactive': 2 } },
        { id: 'q9c', label: '하나씩 순서대로, 끝을 봐야 다음으로 넘어간다', effects: { 'deep-diver': 2 } },
        { id: 'q9d', label: '여러 개를 짧게 번갈아 처리해도 크게 문제없다', effects: { 'sprint-runner': 2 } },
      ],
    },
    {
      id: 'q10',
      question: '작업을 완벽하게 끝내야 넘어가는 편인가, 대충 끝내고 넘어가는 편인가?',
      choices: [
        { id: 'q10a', label: '일단 빠르게 쳐내고 나중에 다시 다듬는 편이다', effects: { 'sprint-runner': 2 } },
        { id: 'q10b', label: '완벽하게 마무리 짓고 나서야 다음으로 넘어간다', effects: { 'deep-diver': 2 } },
        { id: 'q10c', label: '마감 안에만 들어오면 일단 완성이다', effects: { 'deadline-igniter': 2 } },
        { id: 'q10d', label: '그날 컨디션에 따라 완성도가 들쭉날쭉하다', effects: { 'env-reactive': 2 } },
      ],
    },
    {
      id: 'q11',
      question: '팀 작업과 혼자 작업, 어느 쪽이 더 잘 맞나?',
      choices: [
        { id: 'q11a', label: '마감을 같이 공유하는 사람이 있을 때 더 힘이 난다', effects: { 'deadline-igniter': 2, 'env-reactive': 1 } },
        { id: 'q11b', label: '함께든 혼자든 짧고 굵게 끝내면 그만이다', effects: { 'sprint-runner': 2 } },
        { id: 'q11c', label: '누구와 있느냐, 어디서 하느냐에 따라 결과가 크게 갈린다', effects: { 'env-reactive': 2 } },
        { id: 'q11d', label: '혼자 조용히 파고들 때 결과물이 가장 좋다', effects: { 'deep-diver': 2 } },
      ],
    },
  ],
  results: [
    {
      id: 'deep-diver',
      title: '깊은 몰입형',
      shortTitle: '몰입형',
      emoji: '🌊',
      summary: '한 번 스위치가 켜지면, 어지간해선 꺼지지 않는다.',
      description:
        '당신은 얕고 넓게보다 좁고 깊게 파는 유형이다. 몰입까지 걸리는 시간은 있지만, 일단 들어가면 몇 시간이 지나도 모른다. 방해만 없다면 결과물의 완성도는 이미 보장된 셈이다. 관건은 몰입에 들어가기 전과, 억지로 끊겼을 때다.',
      strengths: ['한 번 시작하면 밀도 높은 결과물을 만든다', '복잡하고 긴 호흡의 작업에 강하다'],
      cautions: ['몰입 진입까지 워밍업 시간이 필요하다', '중간에 끊기면 복귀에 시간이 걸린다'],
      recommendations: [
        '작업 전 30분은 워밍업 구간으로 따로 확보하라',
        '타임블록으로 최소 90분 단위를 비워둬라',
        '몰입 구간엔 알림을 물리적으로 차단하라',
      ],
      shareText: '나는 깊은 몰입형 - 한 번 빠지면 끝까지 간다',
      color: '#1e40af',
    },
    {
      id: 'sprint-runner',
      title: '짧은 스프린트형',
      shortTitle: '스프린트형',
      emoji: '⚡',
      summary: '길게 끌지 않는다. 짧고 굵게, 그리고 끝.',
      description:
        '당신은 긴 워밍업이 필요 없는 유형이다. 시작 버튼을 누르면 곧바로 속도가 붙는다. 대신 그 속도를 오래 유지하진 않는다. 짧은 구간을 여러 번 반복하는 편이 늘어지게 이어가는 것보다 훨씬 잘 맞는다.',
      strengths: ['시작이 빠르고 실행력이 좋다', '짧은 마감이나 잦은 전환에 강하다'],
      cautions: ['긴 호흡의 작업에서는 지구력이 떨어질 수 있다', '속도만 믿고 마무리를 서두르기 쉽다'],
      recommendations: [
        '포모도로 기법으로 25분 집중, 5분 휴식을 반복하라',
        '큰 작업은 미리 잘게 쪼개 스프린트 단위로 나눠라',
        '체크리스트로 완료 지점을 명확히 표시하라',
      ],
      shareText: '나는 짧은 스프린트형 - 짧고 굵게 끝낸다',
      color: '#0ea5e9',
    },
    {
      id: 'env-reactive',
      title: '환경 반응형',
      shortTitle: '환경 반응형',
      emoji: '🎧',
      summary: '집중력의 절반은 어디 있느냐, 누구와 있느냐에 달려 있다.',
      description:
        '당신의 몰입은 의지보다 환경의 영향을 크게 받는다. 소음, 공간, 옆 사람의 상태 하나로 그날의 집중력이 확 달라진다. 이건 약점이 아니라 데이터다. 어떤 조건에서 유독 잘 되는지 알면, 그 조건을 의도적으로 만들어내면 된다.',
      strengths: ['환경 변화에 민감하게 반응해 빠르게 적응한다', '잘 맞는 조건을 찾으면 몰입 전환이 빠르다'],
      cautions: ['산만한 환경에서는 집중력이 쉽게 흔들린다', '컨디션을 장소나 상황 탓으로 넘기기 쉽다'],
      recommendations: [
        '집중 잘 되는 장소와 시간대를 기록해 패턴을 찾아라',
        '화이트노이즈나 이어폰으로 청각 환경을 고정하라',
        '집중 전용 자리를 따로 정해 그 자리에서만 작업하라',
      ],
      shareText: '나는 환경 반응형 - 장소와 분위기가 곧 집중력이다',
      color: '#38bdf8',
    },
    {
      id: 'deadline-igniter',
      title: '마감 점화형',
      shortTitle: '마감 점화형',
      emoji: '🔥',
      summary: '엔진은 하나뿐이다. 마감이라는 열쇠가 있어야 돌아간다.',
      description:
        '당신은 여유가 있을 때보다 시간이 없을 때 오히려 진가를 발휘한다. 압박이 없으면 좀처럼 시동이 걸리지 않고, 마감이 코앞에 와야 몰입도가 치솟는다. 결과물의 질 자체는 나쁘지 않지만, 그 과정이 매번 아슬아슬하다는 게 진짜 변수다.',
      strengths: ['압박 속에서 순간적인 몰입도가 매우 높다', '짧은 시간 안에 결과물을 만들어내는 순발력이 있다'],
      cautions: ['여유 있는 일정에서는 오히려 늘어지기 쉽다', '막판 몰입에만 의존하면 예상 밖 변수에 취약하다'],
      recommendations: [
        '큰 마감 앞에 가짜 마감을 여러 개 만들어라',
        '데드라인을 잘게 쪼개 매번 작은 압박을 걸어라',
        '일정 앞부분에 짧은 마감을 배치해 점화 시점을 앞당겨라',
      ],
      shareText: '나는 마감 점화형 - 마감이 있어야 진짜 실력이 나온다',
      color: '#2563eb',
    },
  ],
}
