import { useEffect } from 'react'
import { Navigate, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { getTestBySlug } from '../data/tests'
import { useTestRunner } from '../utils/useTestRunner'
import { ProgressBar } from '../components/ProgressBar'
import { ChoiceButton } from '../components/ChoiceButton'
import { AdSlot } from '../components/AdSlot'
import { useSeo } from '../utils/useSeo'
import { trackEvent } from '../utils/analytics'
import { getCompareService } from '../services/compareService'
import { getStatsService } from '../services/statsService'

export function TestQuestionPage() {
  const { slug = '' } = useParams()
  const test = getTestBySlug(slug)

  useSeo({
    title: test ? `${test.title} - 진행 중` : '테스트를 찾을 수 없어요',
    description: test?.description ?? '',
    path: `/tests/${slug}/play`,
  })

  if (!test || !test.isPublished) {
    return <Navigate to="/404" replace />
  }

  return <QuestionRunner slug={test.slug} />
}

function QuestionRunner({ slug }: { slug: string }) {
  const test = getTestBySlug(slug)!
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const vsToken = searchParams.get('vs')
  const runner = useTestRunner(test)
  const { currentQuestion, currentIndex, isLastQuestion, currentAnswer } = runner
  const adQuestionIndex = Math.floor(test.questions.length / 2)

  useEffect(() => {
    const handler = (e: BeforeUnloadEvent) => {
      if (runner.answeredCount > 0) {
        e.preventDefault()
        e.returnValue = ''
      }
    }
    window.addEventListener('beforeunload', handler)
    return () => window.removeEventListener('beforeunload', handler)
  }, [runner.answeredCount])

  if (!runner.restored) return null

  function handleSelect(choiceId: string) {
    runner.selectChoice(choiceId)
    trackEvent('answer_question', { slug, questionNumber: currentIndex + 1 })

    window.setTimeout(async () => {
      if (isLastQuestion) {
        const { result, answers: finalAnswers } = runner.finish({ questionId: currentQuestion.id, choiceId })
        trackEvent('complete_test', { slug, resultId: result.id })
        getStatsService().recordCompletion(slug, result.id)

        if (vsToken) {
          const myToken = await getCompareService().createInviteToken(test, finalAnswers)
          navigate(`/tests/${slug}/compare/${vsToken}/${myToken}`)
        } else {
          navigate(`/tests/${slug}/result/${result.id}`, { state: { answers: finalAnswers } })
        }
      } else {
        runner.goNext()
      }
    }, 200)
  }

  return (
    <div className="space-y-6">
      <ProgressBar current={currentIndex + 1} total={test.questions.length} />

      <h1 className="text-lg font-bold leading-snug text-stone-900">
        {currentQuestion.question}
      </h1>

      <div className="flex flex-col gap-3" role="group" aria-label="선택지">
        {currentQuestion.choices.map((choice) => (
          <ChoiceButton
            key={choice.id}
            label={choice.label}
            selected={currentAnswer?.choiceId === choice.id}
            onClick={() => handleSelect(choice.id)}
          />
        ))}
      </div>

      {currentIndex === adQuestionIndex && (
        <AdSlot slotId={import.meta.env.VITE_ADSENSE_SLOT_QUESTION} />
      )}

      {currentIndex > 0 && (
        <button
          type="button"
          onClick={runner.goPrevious}
          className="w-full rounded-xl py-3 text-sm font-medium text-stone-500 transition hover:text-stone-600"
        >
          이전 질문으로
        </button>
      )}
    </div>
  )
}
