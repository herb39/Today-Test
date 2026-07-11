import { Link } from 'react-router-dom'
import { siteConfig } from '../config/site'

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-stone-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-md items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-1.5 text-lg font-bold text-stone-900">
          <span aria-hidden="true">🔮</span>
          <span>{siteConfig.name}</span>
        </Link>
      </div>
    </header>
  )
}
