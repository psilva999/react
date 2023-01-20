import React from 'react'

const App = () => {
  const ativo = true

  return (
    <section>
      <button disabled={!ativo}>
        { ativo? 'Botão ativo' : 'inativo' }
      </button>
    </section>
  )
}

export default App
