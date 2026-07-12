import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RootLayout } from './layouts/RootLayout'
import { ScrollToTop } from './components/ScrollToTop'
// 홈은 가장 흔한 진입 경로라 정적으로 import한다 — lazy로 두면 index.html이 파싱된
// 뒤에야 청크 요청이 시작되는 워터폴이 생겨 첫 화면 표시가 오히려 느려진다
// (Lighthouse로 실측: LCP 5.8s/score 0.15). 정적 import면 Vite가 이 청크들을
// index.html에 modulepreload로 미리 선언해 워터폴 없이 병렬로 받아온다.
import { HomePage } from './pages/HomePage'

const TestIntroPage = lazy(() => import('./pages/TestIntroPage').then((m) => ({ default: m.TestIntroPage })))
const TestQuestionPage = lazy(() =>
  import('./pages/TestQuestionPage').then((m) => ({ default: m.TestQuestionPage })),
)
const TestResultPage = lazy(() => import('./pages/TestResultPage').then((m) => ({ default: m.TestResultPage })))
const CompareInvitePage = lazy(() =>
  import('./pages/CompareInvitePage').then((m) => ({ default: m.CompareInvitePage })),
)
const CompareResultPage = lazy(() =>
  import('./pages/CompareResultPage').then((m) => ({ default: m.CompareResultPage })),
)
const AboutPage = lazy(() => import('./pages/AboutPage').then((m) => ({ default: m.AboutPage })))
const PrivacyPage = lazy(() => import('./pages/PrivacyPage').then((m) => ({ default: m.PrivacyPage })))
const TermsPage = lazy(() => import('./pages/TermsPage').then((m) => ({ default: m.TermsPage })))
const ContactPage = lazy(() => import('./pages/ContactPage').then((m) => ({ default: m.ContactPage })))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })))

function PageFallback() {
  return <div className="py-24 text-center text-sm text-stone-500">불러오는 중...</div>
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path="tests/:slug" element={<TestIntroPage />} />
            <Route path="tests/:slug/play" element={<TestQuestionPage />} />
            <Route path="tests/:slug/result/:resultId" element={<TestResultPage />} />
            <Route path="tests/:slug/compare/:tokenA" element={<CompareInvitePage />} />
            <Route path="tests/:slug/compare/:tokenA/:tokenB" element={<CompareResultPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="privacy" element={<PrivacyPage />} />
            <Route path="terms" element={<TermsPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="404" element={<NotFoundPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
