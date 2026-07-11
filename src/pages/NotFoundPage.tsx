import { Link } from 'react-router-dom'
import { useSeo } from '../utils/useSeo'

export function NotFoundPage() {
  useSeo({
    title: '페이지를 찾을 수 없어요',
    description: '요청하신 페이지를 찾을 수 없습니다.',
    path: '/404',
  })

  return (
    <div className="flex flex-col items-center gap-4 py-16 text-center">
      <span className="text-6xl" aria-hidden="true">
        🧭
      </span>
      <h1 className="text-xl font-bold text-stone-900">페이지를 찾을 수 없어요</h1>
      <p className="text-sm text-stone-500">
        주소가 잘못되었거나 삭제된 페이지일 수 있어요.
      </p>
      <Link
        to="/"
        className="mt-2 rounded-xl bg-stone-900 px-5 py-3 text-sm font-bold text-white"
      >
        메인으로 이동
      </Link>
    </div>
  )
}
