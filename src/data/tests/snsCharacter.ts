import type { TestDefinition } from '../../types/test'

export const snsCharacterTest: TestDefinition = {
  slug: 'sns-character',
  title: '나의 SNS 캐릭터 테스트',
  shortTitle: 'SNS 캐릭터',
  description: '피드는 감성, 스토리는 매일, 아니면 그냥 눈팅만? 11문항으로 알아보는 나의 SNS 캐릭터.',
  intro:
    '누군가는 사진 한 장 올리는 데 필터를 열 개씩 돌려보고, 누군가는 하루에도 몇 번씩 스토리를 채우고, 또 누군가는 계정은 있는데 게시물이 거의 없다. SNS를 쓰는 방식만 봐도 그 사람의 성향이 은근히 드러난다. 이 테스트는 사진 올리기, 눈팅, 스토리, 유행 따라 하기까지 11개의 가벼운 질문으로 당신의 "SNS 캐릭터"를 찾아준다. 정답도 우열도 없으니, 친구랑 결과 비교하면서 가볍게 즐겨보자.',
  category: '관계',
  emoji: '📸',
  estimatedMinutes: 3,
  theme: { color: '#d946ef', gradientFrom: '#f0abfc', gradientTo: '#c026d3' },
  isPublished: true,
  isNew: true,
  relatedTestSlugs: ['insa-type', 'relationship-distance'],
  seo: {
    title: '나의 SNS 캐릭터 테스트 | 오늘의 테스트',
    description:
      '감성 큐레이터형, 일상 인증형, 조용한 눈팅러형, 스토리 중독형, 트렌드 리더형. SNS를 쓰는 습관으로 알아보는 나의 SNS 캐릭터 심리테스트, 3분이면 무료로 바로 확인해보세요.',
    faq: [
      {
        question: 'SNS 캐릭터 테스트는 어떤 걸 알려주나요?',
        answer:
          '평소 사진을 올리는 방식, 스토리 사용 습관, 눈팅 스타일 등을 바탕으로 감성 큐레이터형부터 트렌드 리더형까지 다섯 가지 SNS 캐릭터 중 나와 가장 가까운 유형을 알려드려요. 친구랑 결과를 비교해보는 재미도 쏠쏠해요.',
      },
      {
        question: '테스트는 얼마나 걸리나요?',
        answer: '총 11개의 질문으로 구성되어 있고, 평균적으로 3분이면 충분히 끝낼 수 있어요. 하나씩 직관적으로 고르기만 하면 되니 부담 없이 즐겨보세요.',
      },
      {
        question: '결과가 정확한가요?',
        answer:
          '이 테스트는 심리학적 진단이 아니라, 평소 SNS 습관을 재미있게 비춰보는 콘텐츠예요. 그날 기분이나 답변에 따라 결과가 조금씩 달라질 수 있으니 가볍게 즐겨주세요.',
      },
    ],
  },
  questions: [
    {
      id: 'q1',
      question: '여행지에서 사진을 찍을 때 나는?',
      choices: [
        { id: 'q1a', label: '인생샷 하나면 충분하다, 바로 인증샷을 남긴다', effects: { 'daily-logger': 2 } },
        { id: 'q1b', label: '사진만 찍어두고 굳이 안 올린다, 나중에 볼 사람만 본다', effects: { 'silent-lurker': 2 } },
        { id: 'q1c', label: '도착하자마자 실시간으로 중계하듯 올린다', effects: { 'story-addict': 2 } },
        { id: 'q1d', label: '요즘 뜨는 포즈나 앵글부터 찾아본다', effects: { 'trend-leader': 2, 'aesthetic-curator': 1 } },
      ],
    },
    {
      id: 'q2',
      question: '사진 한 장을 올리기 전, 나의 행동은?',
      choices: [
        { id: 'q2a', label: '색감이랑 구도가 맞을 때까지 보정 앱을 켠다', effects: { 'aesthetic-curator': 2 } },
        { id: 'q2b', label: '올릴까 말까 고민하다 결국 저장만 해둔다', effects: { 'silent-lurker': 2 } },
        { id: 'q2c', label: '일단 스토리에 먼저 슬쩍 흘려본다', effects: { 'story-addict': 2 } },
        { id: 'q2d', label: '요즘 유행하는 해시태그나 챌린지 형식부터 확인한다', effects: { 'trend-leader': 2, 'daily-logger': 1 } },
      ],
    },
    {
      id: 'q3',
      question: '알림이 울리면?',
      choices: [
        { id: 'q3a', label: '좋아요보다 댓글로 어떤 느낌인지 코멘트 남기는 걸 좋아한다', effects: { 'aesthetic-curator': 2 } },
        { id: 'q3b', label: '누가 봤는지 궁금해서 바로 확인한다', effects: { 'daily-logger': 2 } },
        { id: 'q3c', label: '내 스토리 조회수부터 확인한다', effects: { 'story-addict': 2 } },
        { id: 'q3d', label: '무슨 챌린지에 태그됐나 싶어서 열어본다', effects: { 'trend-leader': 2, 'silent-lurker': 1 } },
      ],
    },
    {
      id: 'q4',
      question: '팔로우한 사람들 게시물을 보다 보면?',
      choices: [
        { id: 'q4a', label: '감성 좋은 계정을 찾으면 저장부터 해둔다', effects: { 'aesthetic-curator': 2 } },
        { id: 'q4b', label: '다들 뭐 하고 사는지 일상 구경하는 게 낙이다', effects: { 'daily-logger': 2 } },
        { id: 'q4c', label: '댓글도 안 달고 그냥 눈으로만 스캔한다', effects: { 'silent-lurker': 2 } },
        { id: 'q4d', label: '요즘 다들 쓰는 포맷이 뭔지부터 체크한다', effects: { 'trend-leader': 2, 'story-addict': 1 } },
      ],
    },
    {
      id: 'q5',
      question: '유행하는 챌린지나 밈을 보면?',
      choices: [
        { id: 'q5a', label: '내 감성에 맞게 각색해서 해볼지 고민한다', effects: { 'aesthetic-curator': 2 } },
        { id: 'q5b', label: '재밌어 보이면 그냥 따라 해서 올린다', effects: { 'daily-logger': 2 } },
        { id: 'q5c', label: '구경만 하고 참여는 잘 안 한다', effects: { 'silent-lurker': 2 } },
        { id: 'q5d', label: '일단 스토리로 가볍게 따라 해본다', effects: { 'story-addict': 2, 'trend-leader': 1 } },
      ],
    },
    {
      id: 'q6',
      question: 'SNS 앱을 열었을 때 가장 먼저 하는 일은?',
      choices: [
        { id: 'q6a', label: '오늘 뭐 올릴 거 없나 사진첩부터 뒤진다', effects: { 'daily-logger': 2 } },
        { id: 'q6b', label: '피드부터 쭉 훑어보며 눈팅한다', effects: { 'silent-lurker': 2 } },
        { id: 'q6c', label: '친구들 스토리부터 하나씩 넘겨본다', effects: { 'story-addict': 2 } },
        { id: 'q6d', label: '탐색 탭에서 요즘 뜨는 콘텐츠부터 확인한다', effects: { 'trend-leader': 2, 'aesthetic-curator': 1 } },
      ],
    },
    {
      id: 'q7',
      question: '오늘 하루 특별한 일이 있었다면?',
      choices: [
        { id: 'q7a', label: '그 순간을 예쁘게 담을 각도부터 고민한다', effects: { 'aesthetic-curator': 2 } },
        { id: 'q7b', label: '굳이 안 올리고 나 혼자 간직한다', effects: { 'silent-lurker': 2 } },
        { id: 'q7c', label: '바로 스토리에 올려서 실시간으로 자랑한다', effects: { 'story-addict': 2 } },
        { id: 'q7d', label: '이거 트렌드 형식으로 만들면 재밌겠다 싶다', effects: { 'trend-leader': 2, 'daily-logger': 1 } },
      ],
    },
    {
      id: 'q8',
      question: '내 게시물에 좋아요나 댓글이 달리면?',
      choices: [
        { id: 'q8a', label: '반응보다 내가 담고 싶었던 느낌이 잘 나왔는지가 더 중요하다', effects: { 'aesthetic-curator': 2 } },
        { id: 'q8b', label: '누가 봤는지 하나하나 확인하며 뿌듯해한다', effects: { 'daily-logger': 2 } },
        { id: 'q8c', label: '스토리 반응이 더 궁금해서 그쪽부터 확인한다', effects: { 'story-addict': 2 } },
        { id: 'q8d', label: '이 반응이 다음 트렌드가 될지 궁금해진다', effects: { 'trend-leader': 2, 'silent-lurker': 1 } },
      ],
    },
    {
      id: 'q9',
      question: '24시간 뒤 사라지는 스토리 기능을 대하는 나의 태도는?',
      choices: [
        { id: 'q9a', label: '감성 사진 아카이브용으로 정성 들여 꾸민다', effects: { 'aesthetic-curator': 2 } },
        { id: 'q9b', label: '오늘 하루 기록 남기듯 편하게 올린다', effects: { 'daily-logger': 2 } },
        { id: 'q9c', label: '남들 스토리는 챙겨 보지만 내 스토리는 잘 안 올린다', effects: { 'silent-lurker': 2 } },
        { id: 'q9d', label: '요즘 유행하는 스티커나 필터부터 찾아 쓴다', effects: { 'trend-leader': 2, 'story-addict': 1 } },
      ],
    },
    {
      id: 'q10',
      question: '새로운 트렌드 포맷(짧은 영상, 새 필터 등)이 뜨면?',
      choices: [
        { id: 'q10a', label: '내 스타일에 맞게 다듬어서 써본다', effects: { 'aesthetic-curator': 2 } },
        { id: 'q10b', label: '다들 하니까 나도 한 번 따라 해본다', effects: { 'daily-logger': 2 } },
        { id: 'q10c', label: '남들 하는 거 구경만 하고 안 해본다', effects: { 'silent-lurker': 2 } },
        { id: 'q10d', label: '스토리에 가볍게 테스트해보고 반응을 살핀다', effects: { 'story-addict': 2, 'trend-leader': 1 } },
      ],
    },
    {
      id: 'q11',
      question: '친구가 내 SNS를 보면 뭐라고 할까?',
      choices: [
        { id: 'q11a', label: '일상을 진짜 자주 올린다고 할 것 같다', effects: { 'daily-logger': 2 } },
        { id: 'q11b', label: '게시물이 거의 없어서 살아있냐고 물어볼 것 같다', effects: { 'silent-lurker': 2 } },
        { id: 'q11c', label: '스토리로만 사는 애라고 할 것 같다', effects: { 'story-addict': 2 } },
        { id: 'q11d', label: '트렌드는 다 너한테 물어보면 된다고 할 것 같다', effects: { 'trend-leader': 2, 'aesthetic-curator': 1 } },
      ],
    },
  ],
  results: [
    {
      id: 'aesthetic-curator',
      title: '내 피드는 나의 갤러리, 감성 큐레이터형',
      shortTitle: '감성 큐레이터형',
      emoji: '🎨',
      summary: '색감 하나, 구도 하나에도 진심인 당신',
      description:
        '사진 한 장을 올리기 전에도 몇 번씩 자르고 보정하며 톤을 맞춘다. 남들 눈엔 그냥 사진이지만 당신 눈엔 완성도가 다 보인다. 피드 전체의 분위기가 하나로 이어지길 바라서, 아무 사진이나 툭 올리는 법이 없다. 자연스레 "이 계정 감성 좋다"는 소리를 자주 듣는 편이다.',
      strengths: ['일관된 분위기를 만드는 감각', '디테일을 놓치지 않는 꼼꼼함', '보는 사람에게 좋은 인상을 남기는 완성도'],
      cautions: ['완벽하게 안 나오면 아예 안 올리고 미루는 경우가 있음', '보정하고 고르는 데 생각보다 시간을 많이 씀'],
      recommendations: [
        '가끔은 보정 없이 날것 그대로도 올려보기',
        '완벽하지 않아도 기록하고 싶은 순간이면 일단 남겨두기',
        '내가 좋아하는 톤을 무드보드로 미리 정리해두면 고민 시간이 줄어듦',
      ],
      shareText: '나는 감성 큐레이터형 🎨 내 피드는 하나의 갤러리다!',
      color: '#e879f9',
    },
    {
      id: 'daily-logger',
      title: '오늘 하루도 기록 완료, 일상 인증형',
      shortTitle: '일상 인증형',
      emoji: '📷',
      summary: '거창하지 않아도 오늘을 남기고 싶은 당신',
      description:
        '특별한 날이 아니어도 밥 한 끼, 날씨 한 컷 정도는 가볍게 남긴다. 완벽한 구도보다 "오늘 이랬다"는 기록 자체가 더 중요하다. 꾸준히 쌓인 게시물을 보면 그 자체로 나만의 다이어리가 된다. 남들의 반응보다 스스로 기록을 남기는 재미로 SNS를 즐긴다.',
      strengths: ['꾸준함과 성실함', '소소한 순간도 놓치지 않는 관찰력', '기록이 자연스럽게 쌓이는 실행력'],
      cautions: ['너무 자주 올려서 피드가 산만해 보일 수 있음', '기록에 집중하다 그 순간 자체를 덜 즐길 때가 있음'],
      recommendations: [
        '하루에 한 번, 가장 마음에 든 순간 하나만 골라 올려보기',
        '가끔은 사진 없이 그냥 텍스트로만 기분을 남겨보기',
        '한 달치 기록을 모아 돌아보는 나만의 회고 루틴 만들어보기',
      ],
      shareText: '나는 일상 인증형 📷 오늘 하루도 기록 완료!',
      color: '#d946ef',
    },
    {
      id: 'silent-lurker',
      title: '존재감은 있지만 흔적은 없다, 조용한 눈팅러형',
      shortTitle: '조용한 눈팅러형',
      emoji: '👀',
      summary: '보긴 다 보는데, 남기는 건 거의 없는 당신',
      description:
        '피드는 매일 훑어보지만 정작 내 게시물은 손에 꼽는다. 다른 사람 소식은 궁금해도 내 소식을 알리는 데는 별 관심이 없다. 댓글이나 좋아요도 최소한만 남기는 조용한 관찰자 스타일이다. 그래도 필요한 정보나 소식은 다 챙기는, 은근히 빠삭한 눈팅러다.',
      strengths: ['불필요한 감정 소모가 적은 담담함', '정보는 놓치지 않는 꼼꼼한 관찰력', '남의 시선에 휘둘리지 않는 편안함'],
      cautions: ['오랜만에 연락하면 근황을 아예 모를 때가 있음', '지인들 사이에서 SNS 안 하는 사람으로 오해받기도 함'],
      recommendations: [
        '친한 사람 게시물엔 짧게라도 댓글 한 줄 남겨보기',
        '한 달에 한 번은 나도 소식 하나쯤 올려보기',
        '눈팅만 하지 말고 마음에 드는 계정은 팔로우로 표시해두기',
      ],
      shareText: '나는 조용한 눈팅러형 👀 보긴 다 보는데 흔적은 없다!',
      color: '#c026d3',
    },
    {
      id: 'story-addict',
      title: '24시간이 곧 나의 무대, 스토리 중독형',
      shortTitle: '스토리 중독형',
      emoji: '📱',
      summary: '사라지니까 오히려 더 편하게 올리는 당신',
      description:
        '피드에는 신중해도 스토리는 하루에 몇 번씩 편하게 채운다. 어차피 시간 지나면 사라진다는 가벼움이 오히려 부담을 덜어준다. 친구들 스토리도 빠짐없이 챙겨보며 실시간으로 소통하는 걸 즐긴다. 스티커, 필터, 투표 기능까지 알뜰하게 다 써보는 편이다.',
      strengths: ['가볍고 솔직한 소통 방식', '실시간으로 반응하고 공감하는 친화력', '새로운 기능을 부담 없이 시도하는 유연함'],
      cautions: ['하루 종일 스토리를 확인하느라 시간을 많이 씀', '순간적인 감정을 바로 올렸다가 민망해질 때가 있음'],
      recommendations: [
        '올리기 전 3초만 멈추고 다시 한번 확인하는 습관 들이기',
        '스토리 확인하는 시간을 하루 두세 번으로 정해두기',
        '기억하고 싶은 스토리는 하이라이트로 따로 모아두기',
      ],
      shareText: '나는 스토리 중독형 📱 24시간이 곧 나의 무대!',
      color: '#a21caf',
    },
    {
      id: 'trend-leader',
      title: '유행은 내가 먼저 접수한다, 트렌드 리더형',
      shortTitle: '트렌드 리더형',
      emoji: '🔥',
      summary: '남들이 시작하기 전에 이미 하고 있는 당신',
      description:
        '새로운 챌린지나 유행하는 포맷이 뜨면 누구보다 빠르게 반응한다. 남들이 "이거 뭐야?" 할 때 당신은 이미 시도해본 뒤다. 유행에 민감하고 감도 좋아서 주변 사람들이 트렌드를 물어보러 오는 편이다. 새로운 걸 시도하는 데 망설임이 없는 게 가장 큰 무기다.',
      strengths: ['빠른 트렌드 감지력과 실행력', '새로운 시도를 두려워하지 않는 도전정신', '주변에 자연스럽게 영향을 주는 흡인력'],
      cautions: ['유행을 좇다 정작 내 취향을 놓칠 때가 있음', '금방 질려서 꾸준히 이어가는 게 어려울 수 있음'],
      recommendations: [
        '따라 한 트렌드 중 진짜 내 취향인 것만 골라 남겨보기',
        '유행과 별개로 나만의 시그니처 콘텐츠 하나 만들어보기',
        '빠르게만 가지 말고 가끔은 완성도에도 시간을 써보기',
      ],
      shareText: '나는 트렌드 리더형 🔥 유행은 내가 먼저 접수한다!',
      color: '#86198f',
    },
  ],
}
