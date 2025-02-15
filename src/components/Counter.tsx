import { Button } from 'antd'
import { useEffect, useState } from 'react'
import gong from '../assets/gong.mp3'
import tick from '../assets/tick.mp3'

const flexWrapper: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2em',
  height: '4em',
}

export const Counter = ({
  onCountEnd,
}: {
  onCountEnd: (state: boolean) => void
}) => {
  const [count, setCount] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const audioTick = new Audio(tick)
  const audioGong = new Audio(gong)

  const handleStart = () => {
    setCount(5)
    setIsRunning(true)
  }

  useEffect(() => {
    if (isRunning && count > 0) {
      const timer = setTimeout(() => setCount((v) => v - 1), 1000)
      audioTick.play()
      return () => clearTimeout(timer)
    }
    if (isRunning && count === 0) {
      audioGong.play()
      onCountEnd(true)
    }
  }, [isRunning, count])

  return (
    <>
      <div style={flexWrapper}>
        {isRunning ? (
          <div key={count} className="timer-number">
            {count > 0 && count}
          </div>
        ) : (
          <Button type="primary" onClick={handleStart} disabled={count !== 0}>
            Start Training
          </Button>
        )}
      </div>
    </>
  )
}
