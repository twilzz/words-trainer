import { Card as AntCard, Button } from 'antd'
import { useEffect, useState } from 'react'
import { Dictionary } from '../utils/dictionanaryAPI'
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
  const [audioUrl, setAudioUrl] = useState<string | undefined>()
  const api = new Dictionary('https://api.dictionaryapi.dev/api/v2/entries/en/')

  const onKeydown = (e: KeyboardEvent) => {
    const validKeys = ['1', '2', '3', '4']
    if (validKeys.includes(e.key)) {
      setSelectedOption(Number(e.key) - 1)
      onSelectVariant(Number(e.key) - 1)
    }
  }

  useEffect(() => {
    api.get(word[0]).then((data) => setAudioUrl(data))
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', onKeydown)
    return () => {
      window.removeEventListener('keydown', onKeydown)
    }
  }, [])

  useEffect(() => {
    if (audioUrl) {
      const audio = new Audio(audioUrl)
      audio.play()
      return () => {
        audio.pause()
      }
    }
  }, [audioUrl])

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
