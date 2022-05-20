import React from 'react'
import { Header } from './components/Header'
import { GlobalStyle } from './GlobalStyle'
import { Home } from './Pages/Home'
import { RoutesConfig } from './RoutesConfig'

export const App = () => {
  return (
    <>
      <Header />
      <GlobalStyle />
      <RoutesConfig />
    </>
  )
}
