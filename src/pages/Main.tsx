import { Layout } from 'antd'
import { useState } from 'react'
import { Card } from '../components/Card'
import { Counter } from '../components/Counter'
import { LessonFindRightWord } from '../components/LessonFindRightWord'

const { Header, Footer, Content } = Layout

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#4096ff',
}

const contentStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  padding: '1em',
  color: '#fff',
  backgroundColor: '#0958d9',
}

const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: 'calc(100% - 8px)',
  maxWidth: 'calc(100% - 8px)',
  height: 'calc(100vh - 16px)',
}

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
}

export const Main = () => {
  const [lessonIsActive, setLessonIsActive] = useState(true)
  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>Header</Header>
      <Content style={contentStyle}>
        {lessonIsActive ? (
          <LessonFindRightWord />
        ) : (
          <Card
            title={lessonIsActive ? 'Lesson Started' : undefined}
            cardBody={<Counter onCountEnd={setLessonIsActive} />}
          />
        )}
      </Content>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  )
}
