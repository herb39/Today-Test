import { Link } from 'react-router-dom'
import { siteConfig } from '../config/site'

export function Footer() {
  return (
    <footer className="mt-auto border-t border-stone-200 bg-stone-50">
      <div className="mx-auto max-w-md px-4 py-8 text-sm text-stone-500">
        <nav className="mb-4 flex flex-wrap gap-x-4 gap-y-2">
          <Link to="/about" className="hover:text-stone-800">
            소개
          </Link>
          <Link to="/privacy" className="hover:text-stone-800">
            개인정보처리방침
          </Link>
          <Link to="/terms" className="hover:text-stone-800">
            이용약관
          </Link>
          <Link to="/contact" className="hover:text-stone-800">
            문의
          </Link>
        </nav>
        <p className="leading-relaxed">
          {siteConfig.name}의 모든 콘텐츠는 재미와 자기이해를 위한 것으로, 의학적·심리학적 진단이
          아닙니다. 결과는 참고용으로만 활용해주세요.
        </p>
        <p className="mt-3">
          © {new Date().getFullYear()} {siteConfig.name} ({siteConfig.nameEn})
        </p>
      </div>
    </footer>
  )
}
