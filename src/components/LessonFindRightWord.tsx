import { useState } from 'react'
import { getRandomTranslation } from '../utils/getRandomTranslation'
import { words } from '../utils/wordsData'
import { LessonCard } from './LessonCard'

export const LessonFindRightWord = () => {
  const [step, setStep] = useState(0)
  const wordsForLesson = Object.entries(words).slice(0, 10)

  const word = wordsForLesson[step]

  const variants = getRandomTranslation(
    wordsForLesson.filter((e) => e[0] !== word[0]).map((e) => e[0])
  )

  const translations = [word[0], ...variants].sort(() => Math.random() - 0.5)

  const handleSelectVariant = (variant: number) => {
    setTimeout(() => setStep((prev) => prev + 1), 1000)
  }

  return (
    <LessonCard
      key={step}
      step={step}
      word={word}
      translations={translations}
      onSelectVariant={handleSelectVariant}
    />
  )
}
