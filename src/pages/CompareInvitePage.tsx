import { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getTestBySlug } from '../data/tests'
import { getCompareService } from '../services/compareService'
import { resolveResult } from '../utils/scoring'
import { getViralTitle } from '../utils/resultDisplay'
import { useSeo } from '../utils/useSeo'
import { trackEvent } from '../utils/analytics'
import type { TestAnswer } from '../types/test'

export function CompareInvitePage() {
  const { slug = '', tokenA = '' } = useParams()
  const test = getTestBySlug(slug)
  // undefined: 확인 전, null: 잘못된 토큰, TestAnswer[]: 정상 복원됨
  const [answersA, setAnswersA] = useState<TestAnswer[] | null | undefined>(undefined)

  useEffect(() => {
    if (!test) return
    let cancelled = false
    getCompareService()
      .resolveInviteToken(test, tokenA)
      .then((result) => {
        if (!cancelled) setAnswersA(result)
      })
    return () => {
      cancelled = true
    }
  }, [test, tokenA])

  useSeo({
    title: test ? `${test.title} 궁합 비교 초대` : '테스트를 찾을 수 없어요',
    description: test ? `친구가 남긴 ${test.title} 결과와 내 궁합을 확인해보세요.` : '',
    path: `/tests/${slug}/compare/${tokenA}`,
    image: test ? `/og/${test.slug}.png` : undefined,
  })

  useEffect(() => {
    if (test && answersA) trackEvent('compare_invite_view', { slug: test.slug })
  }, [test, answersA])

  if (!test || !test.isPublished) return <Navigate to="/404" replace />
  if (answersA === undefined) return null
  if (answersA === null) return <Navigate to={`/tests/${slug}`} replace />

  const resultA = resolveResult(test, answersA)

  return (
    <div className="space-y-6 text-center">
      <div className="rounded-3xl px-6 py-10" style={{ backgroundColor: `${test.theme.color}14` }}>
        <p className="text-sm font-medium text-stone-500">{test.title}</p>
        <span className="mt-3 block text-6xl" aria-hidden="true">
          {resultA.emoji}
        </span>
        <h1 className="mt-4 text-xl font-bold leading-snug text-stone-900">
          친구의 결과는
          <br />"{getViralTitle(resultA)}"
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-stone-600">
          나는 얼마나 잘 맞을까요? 같은 테스트를 하고 바로 비교해보세요.
        </p>
      </div>

      <Link
        to={`/tests/${test.slug}/play?vs=${tokenA}`}
        onClick={() => trackEvent('compare_click', { slug: test.slug })}
        className="block w-full rounded-2xl bg-stone-900 py-4 text-center text-base font-bold text-white transition active:scale-[0.99]"
      >
        나도 해보고 비교하기
      </Link>
    </div>
  )
}
