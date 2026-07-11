# 오늘의 테스트 (Today Test)

여러 종류의 심리·성향 테스트를 제공하는 모바일 우선 웹서비스입니다. 회원가입, 서버, 데이터베이스 없이 정적 파일만으로 동작하며 Cloudflare Pages에 배포합니다.

- 배포 주소: https://test.lib.lc
- 성격: 재미와 자기이해를 위한 콘텐츠이며 의학적·심리학적 진단이 아닙니다.

## 기술 스택

| 분류 | 선택 | 이유 |
| --- | --- | --- |
| 프레임워크 | React + TypeScript + Vite | 빠른 개발 경험, 정적 빌드 산출물만으로 배포 가능 |
| 스타일 | Tailwind CSS v4 (`@tailwindcss/vite`) | 별도 CSS 파일 관리 없이 유틸리티로 빠르게 UI 작성, 런타임 오버헤드 없음 |
| 라우팅 | react-router-dom | SPA 라우팅 표준 라이브러리, 가장 널리 쓰이고 가벼움 |
| 상태관리 | React 기본 state/hooks | 전역 상태관리 라이브러리가 필요 없을 만큼 단순한 데이터 흐름 |
| 린트 | oxlint | 설정 없이 바로 쓸 수 있는 초고속 린터, 별도 ESLint 설정 불필요 |
| 테스트 | vitest | Vite와 통합된 가벼운 테스트 러너, 별도 러너 설정 불필요 |
| 결과 이미지 저장 | html-to-image | DOM을 이미지로 캡처하는 가장 가벼운 라이브러리 중 하나, 필요 시점에만 동적 로드 |
| 정적 페이지 생성 | tsx (Node 스크립트) | 빌드 산출물(dist)에 테스트 데이터 기반 메타태그를 후처리로 주입, 별도 SSR 서버 불필요 |

## 로컬 실행

```bash
npm install
npm run dev
```

`http://localhost:5173` 에서 확인합니다.

## 환경변수

`.env.example`을 복사해 `.env`를 만들고 필요한 값만 채웁니다. 비워두면 해당 기능만 비활성화되고 나머지 서비스는 정상 동작합니다.

```bash
cp .env.example .env
```

| 변수 | 설명 | 비어있을 때 동작 |
| --- | --- | --- |
| `VITE_SITE_URL` | 배포 주소 (기본 `https://test.lib.lc`) | 기본값 사용 |
| `VITE_SITE_NAME` | 서비스명 (기본 `오늘의 테스트`) | 기본값 사용 |
| `VITE_CONTACT_EMAIL` | 문의 이메일 | 문의/정책 페이지에 이메일 대신 안내 문구 표시 |
| `VITE_KAKAO_JAVASCRIPT_KEY` | 카카오 JavaScript 키 | 카카오톡 공유 버튼이 숨겨짐 |
| `VITE_GA_MEASUREMENT_ID` | GA4 측정 ID | 분석 스크립트가 로드되지 않음 |
| `VITE_ADSENSE_ENABLED` | 광고 표시 여부 (`true`/`false`) | 기본 `false`, 광고 없음 |
| `VITE_ADSENSE_CLIENT` | AdSense 게시자 ID | 값이 없으면 `ENABLED`가 true여도 광고 비표시 |
| `VITE_ADSENSE_SLOT_HOME` / `_QUESTION` / `_RESULT` / `_RELATED` | 위치별 광고 슬롯 ID | 슬롯 ID가 없는 위치는 광고 미표시 |

개발 환경(`npm run dev`)에서는 GA4 이벤트가 전송되지 않습니다.

## 새 테스트 추가하기

1. `src/data/tests/` 아래에 새 파일을 만듭니다 (예: `src/data/tests/newTest.ts`).
2. `src/types/test.ts`의 `TestDefinition` 타입을 따라 작성합니다. 기존 파일(`burnout.ts` 등)을 참고하면 빠릅니다.
   - `slug`은 URL에 쓰이는 영문 kebab-case, 사이트 전체에서 유일해야 합니다.
   - `questions`는 10~12개, 각 질문의 `choices`는 결과 유형별 점수(`effects`)를 가집니다.
   - `results`는 4~6개, 각 결과는 `id`(kebab-case)가 그 테스트 안에서 유일해야 합니다.
3. `src/data/tests/index.ts`의 `allTests` 배열에 새로 만든 테스트를 추가합니다.
4. `npm run test`를 실행해 다음을 자동 검증합니다.
   - slug/질문 id/결과 id 중복 여부
   - 모든 선택지가 실제 존재하는 결과 id를 참조하는지
   - 무작위 답변 시뮬레이션으로 모든 결과가 실제로 나올 수 있고 한 결과로 쏠리지 않는지
5. `npm run build`를 실행하면 새 테스트의 소개/결과 페이지와 sitemap, OG 이미지가 자동으로 생성됩니다.

새 React 페이지나 컴포넌트를 추가로 만들 필요는 없습니다. 모든 테스트는 공통 엔진(`src/utils/scoring.ts`, `src/utils/useTestRunner.ts`)과 공통 페이지(`TestIntroPage`, `TestQuestionPage`, `TestResultPage`)를 공유합니다.

## 결과(이미지/그래픽) 추가하기

- 결과 화면의 카드(`ResultCard`)는 이모지 + 색상 테마로 구성되어 있어 별도 이미지 파일이 필요 없습니다. `result.emoji`와 `result.color`만 지정하면 됩니다.
- 카카오톡/SNS 공유 시 노출되는 미리보기 이미지는 `npm run build` 시 `scripts/generate-static-pages.ts`가 테스트별로 자동 생성합니다 (`public` 폴더에 직접 파일을 넣을 필요 없음). 현재는 SVG로 생성되며, `dist/og/{slug}.svg`에서 결과를 확인할 수 있습니다.
  - 참고: 일부 오래된 카카오톡 인앱 브라우저나 크롤러는 SVG 미리보기 이미지를 지원하지 않을 수 있습니다. 더 넓은 호환성이 필요해지면 `scripts/generate-static-pages.ts`의 `buildOgSvg` 결과를 PNG로 변환하는 단계(`sharp`, `@resvg/resvg-js` 등)를 빌드 스크립트에 추가하는 것을 검토하세요.

## 빌드

```bash
npm run lint
npm run test
npm run build
```

`npm run build`는 다음을 순서대로 실행합니다.

1. `tsc -b` — 타입 검사
2. `vite build` — `dist/`에 정적 파일 생성
3. `npm run generate:static` — 테스트 데이터를 기반으로 페이지별 정적 HTML(OG/Twitter/canonical/JSON-LD), OG 이미지, `sitemap.xml`을 `dist/`에 후처리로 생성

빌드 결과 미리보기: `npm run preview`

## Cloudflare Pages 배포

### 최초 연결 (사용자가 직접 해야 하는 작업)

1. https://dash.cloudflare.com 에 로그인합니다.
2. **Workers & Pages → Create → Pages → Connect to Git**을 선택하고, 이 프로젝트를 올려둔 개인 GitHub 저장소를 연결합니다. (GitHub 인증 및 저장소 생성은 사용자가 직접 진행해야 합니다.)
3. 빌드 설정을 다음과 같이 입력합니다.
   - **Production branch**: `main`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node version**: 환경변수 `NODE_VERSION`을 `22` 이상으로 설정 (또는 Cloudflare가 자동 감지하는 최신 LTS 사용)
4. **Environment variables**에 `.env.example`에 정의된 값 중 사용할 것만 등록합니다 (`VITE_` 접두사 그대로).
5. 배포를 실행합니다.

### SPA 라우팅 / 정적 페이지 공존

- `public/_redirects`에 `/* /index.html 200`이 설정되어 있어, 빌드 시 미리 생성되지 않은 경로로 직접 접근하거나 새로고침해도 React 앱이 정상적으로 라우팅을 이어받습니다.
- 반면 `/`, `/tests/:slug`, `/tests/:slug/result/:resultId`, 정책 페이지 등은 `generate-static-pages.ts`가 실제 정적 `index.html` 파일을 만들어두므로, Cloudflare Pages는 이 경로들에 대해 `_redirects`보다 우선하여 실제 파일을 그대로 서빙합니다 (크롤러가 메타태그를 즉시 읽을 수 있음). 두 방식은 서로 충돌하지 않습니다.

### 배포 후 확인 목록

- [ ] HTTPS로 접속되는지
- [ ] 메인 페이지, 테스트 시작, 질문 진행, 결과 화면이 정상 동작하는지
- [ ] 결과 직접 URL(`/tests/{slug}/result/{resultId}`)로 바로 접근되는지
- [ ] 링크 복사/기본 공유(그리고 키가 있다면 카카오 공유)가 동작하는지
- [ ] `/sitemap.xml`, `/robots.txt`, `/privacy` 등이 열리는지
- [ ] 존재하지 않는 경로에서 404 페이지가 뜨는지
- [ ] 모바일 화면에서 레이아웃이 깨지지 않는지
- [ ] 광고를 비활성 상태로 두었을 때 빈 공간이 남지 않는지
- [ ] 브라우저 콘솔/네트워크 탭에 에러가 없는지

### test.lib.lc 도메인 연결 (사용자가 직접 해야 하는 작업)

`lib.lc` 도메인이 **이미 해당 Cloudflare 계정에 등록되어 있는 경우**:

1. Cloudflare Pages 프로젝트 → **Custom domains → Set up a custom domain**에서 `test.lib.lc`를 입력합니다.
2. Cloudflare가 같은 계정 소유 도메인이므로 CNAME 레코드를 자동으로 추가해줍니다. 완료까지 몇 분 정도 걸릴 수 있습니다.

`lib.lc`가 **다른 DNS 업체(가비아, 카페24 등)에서 관리 중인 경우**:

1. Cloudflare Pages 프로젝트 → **Custom domains → Set up a custom domain**에서 `test.lib.lc` 입력 후 안내되는 CNAME 대상 값(예: `<project>.pages.dev`)을 확인합니다.
2. 기존 DNS 업체의 관리 콘솔에서 `test` 서브도메인에 대한 **CNAME 레코드**를 추가하고, 값으로 위에서 확인한 `*.pages.dev` 주소를 입력합니다.
3. DNS 전파 후 (보통 수 분~1시간) Cloudflare Pages 대시보드에서 도메인 상태가 "Active"로 바뀌는지 확인합니다.

정확한 레코드 값은 실제 Cloudflare Pages 프로젝트 화면에 표시되는 값을 그대로 사용하세요 (이 문서에서 임의로 추측한 값을 넣지 않았습니다).

### 장애 발생 시 롤백

Cloudflare Pages는 배포마다 스냅샷을 보관합니다. 문제가 생기면 **Workers & Pages → 프로젝트 → Deployments** 탭에서 정상 동작했던 이전 배포를 찾아 **"Rollback to this deployment"**를 선택하면 즉시 이전 상태로 되돌릴 수 있습니다. 코드 원인을 조사하는 동안 임시로 서비스를 안정화하는 용도로 먼저 사용하세요.

## 카카오톡 공유 설정 (선택 기능, 사용자가 직접 해야 하는 작업)

카카오 관련 설정과 절차는 별도 문서 [`docs/KAKAO_SHARE_SETUP.md`](docs/KAKAO_SHARE_SETUP.md)에 정리했습니다. 키를 등록하지 않아도 카카오 공유 버튼만 숨겨질 뿐 나머지 기능은 정상 동작합니다.

## GA4 설정 (선택 기능)

1. https://analytics.google.com 에서 새 GA4 속성과 웹 데이터 스트림을 만듭니다.
2. 스트림의 **측정 ID**(`G-XXXXXXX` 형식)를 확인합니다.
3. Cloudflare Pages 프로젝트의 환경변수에 `VITE_GA_MEASUREMENT_ID`로 등록하고 재배포합니다.
4. 실 사용자가 접속하면 GA4 **실시간** 보고서에서 이벤트(`view_home`, `start_test`, `complete_test` 등)가 잡히는지 확인합니다.

측정 ID를 등록하지 않으면 분석 스크립트 자체가 로드되지 않습니다.

## AdSense 적용 (선택 기능)

초기 배포에서는 광고를 끈 상태(`VITE_ADSENSE_ENABLED=false`)로 유지합니다. 승인 절차는 다음 순서를 권장합니다.

1. 테스트 4개와 정책 페이지(소개/개인정보처리방침/이용약관/문의)를 먼저 배포하고 실제 서비스로 안정화합니다.
2. 모바일 사용성과 공유 기능을 충분히 검증합니다.
3. https://www.google.com/adsense 에서 사이트를 추가하고 심사를 신청합니다.
4. 심사 승인 후 광고 단위를 만들고, 게시자 ID와 슬롯 ID를 확인합니다.
5. Cloudflare Pages 환경변수에 `VITE_ADSENSE_ENABLED=true`, `VITE_ADSENSE_CLIENT`, 위치별 `VITE_ADSENSE_SLOT_*` 값을 등록하고 재배포합니다.
6. `public/ads.txt` 파일을 추가합니다 (AdSense 계정 화면에 표시되는 내용 그대로 붙여넣기). 현재 저장소에는 아직 포함되어 있지 않으니, 승인 후 이 파일만 추가하고 재배포하면 됩니다.
7. 광고 활성화 후 모바일에서 실제 버튼과 광고가 혼동되지 않는지 다시 확인합니다.

승인 여부나 소요 기간은 Google이 결정하며 보장되지 않습니다.

## 개인정보 관련 주의사항

- 회원가입/로그인/서버 저장이 없습니다. 테스트 진행 상태만 사용자 브라우저의 `localStorage`에 임시 저장되고, 테스트 완료 시 자동 삭제됩니다.
- 분석(GA4)과 광고(AdSense)는 측정 ID/게시자 ID가 설정된 경우에만 동작하며, 둘 다 기본값은 비활성화입니다.
- 자세한 내용은 배포된 사이트의 `/privacy` 페이지를 참고하세요.

## 비용이 발생할 수 있는 기능과 현재 사용 여부

| 기능 | 현재 상태 | 비고 |
| --- | --- | --- |
| Cloudflare Pages 정적 호스팅 | 사용 중 | 무료 플랜으로 충분 |
| 커스텀 도메인(`test.lib.lc`) | 사용 중 | 이미 보유한 도메인, 추가 비용 없음 |
| Google Analytics 4 | 미사용(선택) | 무료. 측정 ID 등록 시에만 활성화 |
| Kakao JavaScript SDK | 미사용(선택) | 무료. JavaScript 키 등록 시에만 활성화 |
| Google AdSense | 미사용(선택, 기본 비활성화) | 무료로 게재하지만 심사 필요, 수익 발생 목적 |

## 프로젝트 구조

```
src/
  components/   재사용 UI 컴포넌트 (TestCard, ChoiceButton, ResultCard, ShareButtons, AdSlot 등)
  data/tests/   테스트 콘텐츠 데이터 파일 (테스트 추가 시 이 폴더만 건드리면 됨)
  layouts/      공통 레이아웃 (헤더/푸터 포함 RootLayout)
  pages/        라우트별 페이지
  utils/        점수 계산, 로컬 저장, 공유, 분석, SEO 등 공통 로직
  types/        TestDefinition 등 공통 타입
  config/       사이트 설정 (환경변수 기반)
public/         정적 자산 (favicon, robots.txt, manifest 등). og/ 폴더는 빌드 시 자동 생성됨
scripts/        빌드 후처리 스크립트 (정적 메타데이터/sitemap/OG 이미지 생성)
tests/          vitest 자동 테스트
```
