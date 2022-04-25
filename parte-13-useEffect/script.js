//EX1
const UseEffect = () => {
  const [contar, setContar] = React.useState(0)

  React.useEffect(() => console.log('MAIS UM'))

  return (
    <button onClick={() => setContar((contar + 1) ** 2)}>
      { contar }
    </button>
  )
}

ReactDOM.render(<UseEffect/>, document.querySelector('section:first-child'))

//EX2
const Dependencias = () => {
  const [contar, setContar] = React.useState(0)

  // Uma Array vazia indica que o efeito não possui nenhuma dependência e que irá acontecer logo após a renderização
  React.useEffect(() => { console.log('Renderizado') }, [])

  //Antes de renderizar toda vez que atualizar
  console.log('Sempre ocorre')

  React.useEffect(() => { console.log('Toda vez que atualiza') }, [contar])

  return (
    <button style={{ marginTop: '2rem' }} onClick={ () => setContar(contar + 1) }>
      { contar }
    </button>
  )
}

ReactDOM.render(<Dependencias/>, document.querySelector('section:nth-child(2)'))


//EX3
const DependenciasObrigatorias = () => {
  const [count, setCount] = React.useState(0),
        titulo = 'Clicou'

  //O ESLint irá indicar que você possui uma dependência não declarada
  React.useEffect(() => document.title = titulo + count, [])

  return (
    <button style={{ marginTop: '2rem' }} onClick={ () => setCount(count + 1) }>
      { count }
    </button>
  )
}

ReactDOM.render(<DependenciasObrigatorias/>, document.querySelector('section:nth-child(3)'))

//EX4
const EffectSeparados = () => {
  const [contar, setContar] = React.useState(0),
        [modal, setModal] = React.useState(false)

  React.useEffect(() => document.title = 'Total ' + contar, [contar])

  React.useEffect(() => setContar[0], [modal])

  return (
    <div style={{ display: 'grid' }}>
      { modal && <p>Total</p> }
      <button style={{ marginTop: '2rem', justifySelf: 'center' }} onClick={ () => setModal(!modal)}>
        Modal</button>

      <button style={{ justifySelf: 'center' }} onClick={ () => setContar(contar + 1) }>
        { contar }
      </button>
    </div>
  )
}

ReactDOM.render(<EffectSeparados/>, document.querySelector('section:nth-child(4)'))

//EX5
const Produto = () => {
  React.useEffect(() => {
    function handleScroll(e) {
      console.log(e)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <p style={{ height:'200vh' }}>Produto</p>
  )
}

const App = () => {
  const [ativo, setAtivo] = React.useState(false)

  return (
    <button onClick={ () => setAtivo(!ativo) }> { ativo && <Produto/> } </button>
  )
}

ReactDOM.render(<App/>, document.querySelector('section:nth-child(5)'))

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

const Eletronico = ({ data }) => {
  const [dados, setDados] = React.useState(null)

  React.useEffect(() => {
    if (data !== null) {
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${data}`)
      .then(response => response.json())
      .then(json => setDados(json))
    }
  }, [data])

  if (dados === null) return null

  return (
    <>
      <h1>{ dados.nome }</h1>
      <p>R${ dados.preco }</p>
      <p>{ dados.descricao }</p>

      <img src={ dados.fotos[0].src } alt={ dados.fotos[0].titulo }/>
    </>
  )
}

const Exercicio = () => {
  const [data, setData] = React.useState(0)

  React.useEffect(() => {
    const produtoLocal = window.localStorage.getItem('produto')

    if (produtoLocal !== 'null') setData(produtoLocal)
  }, [])

  React.useEffect(() => {
    if (data !== null) window.localStorage.setItem('produto', data)
  }, [data])

  function handleClick({ target }) { setData(target.innerText) }

  return (
    <>
      <p>Preferência: { data }</p>

      <button onClick={ handleClick }>
        Notebook
      </button>

      <button onClick={ handleClick }>
        Smartphone
      </button>

      { data && <Eletronico data={ data }/> }
    </>
  )
}

ReactDOM.render(<Exercicio/>, document.querySelector('div'))
