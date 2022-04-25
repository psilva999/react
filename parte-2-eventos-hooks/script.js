//Podemos atribuir eventos diretamente nos elementos
const Produtos = () => {
  function handleClick(e) {
    console.log(`Comprou: ${e.target.innerText}`)
  }

  return (
    <div>
      <button onClick={ handleClick }>Camisa</button>
    </div>
  )
}

//Exemplo de uso simples do react
const Mat = () => {
  const random = Math.random() * 100

  return <p>O número é {random}</p>
}

ReactDOM.render(<Mat/>, document.querySelector('section'))

//Utilizamos o React pela facilidade de sincronização do estado. Antes dos Hooks, isso só era possível em componentes criados por meio de classes.
const Compras = () => {
  // useState é um Hook que define uma variável reativa
  const [count, setCount] = React.useState(0)

  function go() { setCount(count + 1) }

  return (
    <div>
      <button onClick={go}>BUY</button>

      <p>Total: {count}</p>
      <p>Price: ${count * 12}</p>
    </div>
  )
}

ReactDOM.render(<Compras/>, document.querySelector('article'))

//
