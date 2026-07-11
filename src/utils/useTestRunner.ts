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

  const finish = useCallback(() => {
    const result = resolveResult(test, answers)
    clearProgress(test.slug)
    return result
  }, [test, answers])

  const currentAnswer = useMemo(
    () => answers.find((a) => a.questionId === currentQuestion?.id),
    [answers, currentQuestion],
  )

  return {
    restored,
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
