import React from 'react'

const Produto = ({ nome, propriedades }) => {
  return (
    <div style={{ 
        background:'orange', 
        border:'.1rem solid gray' }}>
        
      <p>{nome}</p>
      <ul>
        {propriedades.map((propriedade) => (
          <li key={ propriedade }>{ propriedade }</li>
        ))}
      </ul>
    </div>
  )
}

export default Produto