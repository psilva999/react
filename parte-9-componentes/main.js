import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Mobile = () => {
  return (
    <section>
      <Header/>

      <p>Just exemplo</p>

      <Footer/>
    </section>
  )
}

export default Mobile

ReactDOM.render(<Mobile/>, document.querySelector('section'))