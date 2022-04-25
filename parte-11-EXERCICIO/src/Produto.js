import React from 'react'

const Produto = ({ nome, propriedades }) => {
  return (
    <section> <p>{ nome }</p>
      <ul>
        { propriedades.map(propriedade => (
          <li>{ propriedade }</li>        
        )) }
      </ul>
    </section>
  )
}

export default Produto
