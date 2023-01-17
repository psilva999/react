import React from 'react'
import Header from './Components/Header'

import Home from './Components/Home'
import Produtos from './Components/Produtos'

const App = () => {
  const { pathname } = window.location
  let Component

  if (pathname === '/produtos')
    Component = Produtos

  else 
    Component = Home

  return (
    <main>
      <Header/>
      <Component/>
    </main>
  )
}

export default App
