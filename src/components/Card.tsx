import { Card as AntCard } from 'antd'
import { ReactNode } from 'react'

interface CardProps {
  title?: string
  cardBody?: ReactNode
  actions?: ReactNode[]
}

export const Card = (props: CardProps) => {
  const { title = 'Prepare to repeat', actions, cardBody } = props
  return (
    <AntCard
      title={title}
      bordered={false}
      style={{ width: 400, minWidth: 200 }}
      actions={actions}
    >
      {cardBody && cardBody}
    </AntCard>
  )
}
