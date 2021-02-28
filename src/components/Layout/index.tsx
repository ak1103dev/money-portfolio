import React from 'react'
import styled from '@emotion/styled'
import Container from '../Container'

const Header = styled(Container)`
  display: flex;
  justify-content: space-between;
  background-color: #444;
  color: white;
  padding-top: 20px;
  padding-bottom: 20px;
`

const LanguageButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`

export interface Props {
  children: JSX.Element | JSX.Element[]
}

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <div>
      <Header>
        <div>Money Portfolio</div>
        <LanguageButtonGroup>
          <button>TH</button>
          <button>EN</button>
        </LanguageButtonGroup>
      </Header>
      <Container>
        {children}
      </Container>
    </div>
  )
}

export default Layout
