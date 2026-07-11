# 카카오톡 공유 설정 안내

이 문서는 코드 구현이 끝난 뒤, 실제 카카오톡 공유 기능을 켜기 위해 **사용자가 직접** 해야 하는 절차입니다. 아래 절차를 진행하기 전까지는 카카오 공유 버튼이 자동으로 숨겨질 뿐, 링크 복사와 기본 공유(Web Share API)는 정상 동작합니다.

## 1. Kakao Developers 애플리케이션 생성

1. https://developers.kakao.com 에 로그인합니다.
2. **내 애플리케이션 → 애플리케이션 추가하기**를 선택하고 앱 이름(예: "오늘의 테스트")을 입력해 생성합니다.

## 2. JavaScript 키 확인

1. 생성한 앱 → **앱 설정 → 앱 키**로 이동합니다.
2. **JavaScript 키** 값을 복사해둡니다. (Admin 키는 서버 전용이므로 절대 프론트엔드 코드나 저장소에 넣지 않습니다.)

## 3. 플랫폼 등록

1. **앱 설정 → 플랫폼 → Web 플랫폼 등록**을 선택합니다.
2. 사이트 도메인에 다음 두 가지를 모두 등록합니다.
   - `https://test.lib.lc` (배포 주소)
   - `http://localhost:5173` (로컬 개발 중 카카오 공유를 테스트하려는 경우에만 추가)

## 4. 환경변수 설정

1. 로컬에서는 `.env` 파일에 다음을 추가합니다.
   ```
   VITE_KAKAO_JAVASCRIPT_KEY=발급받은_JavaScript_키
   ```
2. Cloudflare Pages 배포 환경에서는 프로젝트 **Settings → Environment variables**에 동일한 이름/값으로 등록합니다.

## 5. 재배포

환경변수를 등록/변경한 뒤에는 Cloudflare Pages에서 **재배포**해야 값이 반영됩니다 (기존 배포는 빌드 시점의 환경변수를 그대로 사용합니다).

## 6. 모바일 카카오톡 공유 테스트

1. 실제 모바일 기기의 카카오톡 앱에서 배포된 사이트(`https://test.lib.lc`)의 테스트를 완료합니다.
2. 결과 화면에서 **💬 카카오톡 공유** 버튼이 보이는지 확인합니다 (JavaScript 키가 정상 등록되어야 노출됩니다).
3. 버튼을 눌러 카카오톡 대화방으로 결과 카드가 정상 전송되는지, 그 안의 제목/설명/이미지/"나도 테스트하기" 버튼이 올바른지 확인합니다.
4. 공유된 메시지 안의 링크를 눌러 실제로 해당 결과 페이지(`/tests/{slug}/result/{resultId}`)로 이동하는지 확인합니다.

## 참고: 사용 중인 SDK 방식

이 프로젝트는 오래된 `Kakao.Link` API가 아니라, 카카오가 현재 권장하는 **`Kakao.Share.sendDefault()`** (Feed 템플릿) 방식을 사용합니다. SDK는 `https://t1.kakaocdn.net/kakao_js_sdk/{버전}/kakao.min.js`에서 로드되며, 관련 코드는 [`src/utils/kakaoShare.ts`](../src/utils/kakaoShare.ts)에 있습니다.

카카오가 SDK 버전을 올리며 이전 버전을 더 이상 서빙하지 않게 되는 경우, [Kakao Developers 다운로드 페이지](https://developers.kakao.com/docs/latest/ko/javascript/download)에서 최신 버전 번호를 확인해 `kakaoShare.ts`의 `KAKAO_SDK_URL` 상수만 업데이트하면 됩니다.
