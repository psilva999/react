import Produtos from "./Produtos"
import Years from "./Years"

function App() {
  const lojas = ['cosmeticos', 'roupas', 'comidas']

  return (
    <div className="App">
      { lojas.map(type => (
        <p key={ type }> { type } </p>
      )) }

      <Years/>
      <Produtos/>
    </div>
  )
}

export default App
