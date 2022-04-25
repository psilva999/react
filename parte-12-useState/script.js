const distanciaPadrao = '2rem'

//EX1
const Hooks = () => {
  const [ligado, setOn] = React.useState(true)

  return (
    <button onClick={() => setOn(!ligado)}>
      { ligado ? 'Botão ativo' : 'Botão inativo' }
    </button>
  )
}

ReactDOM.render(<Hooks/>, document.querySelector('section:first-child'))

//EX2
const ReactUseState = () => {
  const [ligado, setLigado] = React.useState(true)

  return (
    <button style={{ marginTop: distanciaPadrao }} onClick={ () => setLigado(!ligado) }>
      { ligado ? 'Botão ligado' : 'Botão desligado' }
    </button>
  )
}

ReactDOM.render(<ReactUseState/>, document.querySelector('section:nth-child(2)'))

//EX3 
const MultiState = () => {
  const [contar, parar] = React.useState(0),
        [andar, correr] = React.useState(0),
        [dado, setDado] = React.useState({ nome: '', idade: '' })
}

//EX4
const Props = () => {
  const [modal, setModal] = React.useState(false)

  return (
    <>
      <div>
        { modal }
      </div>

      <div>
        { setModal }
      </div>
    </>
  )
}

//EX5
const Callback = () => {
  const [ativo, setAtivo] = React.useState(true)

  function handleClick() {
    setAtivo(anterior => !anterior)
  }

  return (
    <button style={{ marginTop: distanciaPadrao }} onClick={ handleClick }>
      { ativo ? 'ATIVADO' : 'DESATIVADO' }
    </button>
  )
}

ReactDOM.render(<Callback/>, document.querySelector('section:nth-child(3)'))

//EX6
const Count = () => {
  const [contar, setContar] = React.useState(1),
        [item, setItems] = React.useState(['Item 1'])

  function handleClick() {
    setContar(contar => {
      setItems(item => [...item, `Item ${contar + 1}`])

      return contar + 1
    })
  }

  return (
    <>
      { item.map(i => (
        <li key={ i }>{ i }</li>
      )) }

      <button onClick={ handleClick }>
        { contar }
      </button>
    </>
  )
}

ReactDOM.render(<Count/>, document.querySelector('section:nth-child(4)'))

//EXERCICIO
// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado
const Produto = ({ data }) => {
  return (
    <div> <h1>{ data.nome }</h1>
      <p>R${ data.preco }</p>
      <p>{ data.descricao }</p>

      <img src={ data.fotos[0].src } alt={ data.fotos[0].titulo }/>
    </div>
  )
}

const Interface = () => {
  const [data, setData] = React.useState(0),
        [loading, setLoading] = React.useState(0)

  async function handleClick(e) {
    setLoading(true)

    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${e.target.innerText}`
    ),
          json = await response.json()

    setData(json)
    setLoading(false)
  }

  return (
    <div style={{ display: 'grid' }}>
      <button style={{ marginTop: distanciaPadrao, justifySelf: 'center' }} onClick={ handleClick }> Tablet </button>

      <button style={{ marginTop: distanciaPadrao, justifySelf: 'center' }} onClick={ handleClick }> Smartphone </button>

      <button style={{ marginTop: distanciaPadrao, justifySelf: 'center' }} onClick={ handleClick }>
        Notebook </button>

      { loading && <span>Loading...</span> }
      { !loading && data && <Produto data={ data }/> }
    </div>
  )
}

ReactDOM.render(<Interface/>, document.querySelector('section:nth-child(5)'))
