import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RootLayout } from './layouts/RootLayout'
import { HomePage } from './pages/HomePage'
import { TestIntroPage } from './pages/TestIntroPage'
import { TestQuestionPage } from './pages/TestQuestionPage'
import { TestResultPage } from './pages/TestResultPage'
import { CompareInvitePage } from './pages/CompareInvitePage'
import { CompareResultPage } from './pages/CompareResultPage'
import { AboutPage } from './pages/AboutPage'
import { PrivacyPage } from './pages/PrivacyPage'
import { TermsPage } from './pages/TermsPage'
import { ContactPage } from './pages/ContactPage'
import { NotFoundPage } from './pages/NotFoundPage'

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  )
}

export default App
