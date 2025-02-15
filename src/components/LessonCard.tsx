import { Card as AntCard, Button } from 'antd'
import { useEffect, useState } from 'react'
import { IContent } from '../utils/wordsData'

export const LessonCard = ({
  word,
  translations,
  step,
  onSelectVariant,
}: {
  word: [string, IContent]
  step: number
  translations: string[]
  onSelectVariant: (variant: number) => void
}) => {
  const [selectedOption, setSelectedOption] = useState<number>()

  const onKeydown = (e: KeyboardEvent) => {
    const validKeys = ['1', '2', '3', '4']
    if (validKeys.includes(e.key)) {
      setSelectedOption(Number(e.key) - 1)
      onSelectVariant(Number(e.key) - 1)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', onKeydown)
    return () => {
      window.removeEventListener('keydown', onKeydown)
    }
  }, [])

  return (
    <AntCard
      title={<div style={{ textAlign: 'left' }}>{`Step ${step}/10`}</div>}
      bordered={false}
      style={{ width: 400, minWidth: 200 }}
      actions={translations.map((translation, index) => {
        return (
          <Button
            color={
              selectedOption === index
                ? translations[index] === word[0]
                  ? 'blue'
                  : 'danger'
                : undefined
            }
            variant={selectedOption === index ? 'solid' : undefined}
            onClick={() => {
              setSelectedOption(index)
              onSelectVariant(index)
            }}
          >
            {index + 1}. {translation}
          </Button>
        )
      })}
    >
      {word[1].translation}
    </AntCard>
  )
}
