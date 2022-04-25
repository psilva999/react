const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
]

const Radio = ({ pergunta, options, onChange, value, id, active }) => {
  if (active === false) return null

  return (
    <fieldset>
      <legend>{ pergunta }</legend>

      { options.map(option => (
        <label key={ option }>
          
          <input
            type='radio'
            id={ id }
            checked={ value === option }
            value={ option }
            onChange={ onChange }
          />
        </label>
      ))}
    </fieldset>
  )
}

const Form = () => {
  const [escolhas, setEscolha] = React.useState({
    p1: '',
    p2: '',

    p3: '',
    p4: '',
  })

  const [slide, setSlide] = React.useState(0),
        [resultado, setResultado] = React.useState(null)

  function change({ target }) {
    setResultado({ ...escolhas, [target.id]: target.value })
  }

  function resultadoFinal() {
    const corretas = perguntas.filter(({ id, escolha }) => escolhas[id] === escolha)

    setResultado(`Você acertou: ${corretas.length} de ${perguntas.length}`)
  }

  function click() {
    if (slide < perguntas.length - 1) setSlide(slide + 1)

    else { 
      setSlide(slide + 1) 
      resultadoFinal() 
    }
  }

  return (
    <form onSubmit={ e => e.preventDefault() }>
      { perguntas.map((pergunta, index) => (
        <Radio
          active={ slide === index }
          key={ pergunta.id }
          value={ escolhas[pergunta.id] }
          onChange={ change }
          {...pergunta}
        />
      )) }

      { resultado ? (
        <p>{ resultado }</p>
      ) : (
        <button onClick={ click }>Próxima</button>
      )}
    </form>
  )
}

ReactDOM.render(<Form/>, document.body)
