import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** BrowserRouter(비-데이터 라우터) 모드는 라우트 전환 시 스크롤 위치를 자동으로 복원해주지 않는다. */
export function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
