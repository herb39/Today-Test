import { useCallback, useEffect, useMemo, useState } from 'react'
import type { TestAnswer, TestDefinition } from '../types/test'
import { clearProgress, loadProgress, saveProgress } from './storage'
import { resolveResult } from './scoring'

export function useTestRunner(test: TestDefinition) {
  const [answers, setAnswers] = useState<TestAnswer[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [restored, setRestored] = useState(false)

  useEffect(() => {
    const saved = loadProgress(test.slug)
    if (saved && saved.answers.length > 0 && saved.currentQuestionIndex < test.questions.length) {
      setAnswers(saved.answers)
      setCurrentIndex(saved.currentQuestionIndex)
    }
    setRestored(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [test.slug])

  useEffect(() => {
    if (!restored) return
    if (answers.length === 0) return
    saveProgress(test.slug, answers, currentIndex)
  }, [test.slug, answers, currentIndex, restored])

  const currentQuestion = test.questions[currentIndex]
  const isLastQuestion = currentIndex === test.questions.length - 1
  const progressRatio = (currentIndex + (answers.length > currentIndex ? 1 : 0)) / test.questions.length

  const selectChoice = useCallback(
    (choiceId: string) => {
      setAnswers((prev) => {
        const next = prev.filter((a) => a.questionId !== currentQuestion.id)
        next.push({ questionId: currentQuestion.id, choiceId })
        return next
      })
    },
    [currentQuestion],
  )

  const goNext = useCallback(() => {
    setCurrentIndex((i) => Math.min(i + 1, test.questions.length - 1))
  }, [test.questions.length])

  const goPrevious = useCallback(() => {
    setCurrentIndex((i) => Math.max(i - 1, 0))
  }, [])

  // handleSelect는 마지막 문항을 고른 직후 짧은 지연(setTimeout) 뒤에 finish()를
  // 부르는데, 그 콜백은 클릭 시점 렌더의 runner(= 이전 answers 상태)를 클로저로
  // 들고 있어 방금 고른 마지막 선택이 answers 상태에 반영되기 전일 수 있다.
  // latestAnswer로 마지막 선택을 명시적으로 넘겨 병합하면 이 타이밍 문제와 무관하게
  // 항상 정확한 답변 전체로 결과를 계산할 수 있다.
  const finish = useCallback(
    (latestAnswer?: TestAnswer) => {
      const finalAnswers = latestAnswer
        ? [...answers.filter((a) => a.questionId !== latestAnswer.questionId), latestAnswer]
        : answers
      const result = resolveResult(test, finalAnswers)
      clearProgress(test.slug)
      return { result, answers: finalAnswers }
    },
    [test, answers],
  )

  const currentAnswer = useMemo(
    () => answers.find((a) => a.questionId === currentQuestion?.id),
    [answers, currentQuestion],
  )

  return {
    restored,
    answers,
    currentQuestion,
    currentIndex,
    isLastQuestion,
    progressRatio,
    currentAnswer,
    answeredCount: answers.length,
    selectChoice,
    goNext,
    goPrevious,
    finish,
  }
}
