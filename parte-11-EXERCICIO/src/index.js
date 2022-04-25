import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'

import Home from './Home'
import Produtos from './Produtos'
import Footer from './Footer'

const Hello = () => {
  const { pathname } = window.location

  let Page
  
  if (pathname === '/produtos') Page = Produtos 

  else Page = Home 

  return (
    <section>
      <Header/>

      <Page/>

      <Footer/>
    </section>
  )
}

export default Hello

ReactDOM.render(<Hello/>, document.body)
