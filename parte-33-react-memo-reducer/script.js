//EX1
const App = () => {
  const [teste, setTeste] = React.useState(0),
        Header = () => {
          return <>Header fixo</>
        }

  return (
    <>
      <Headers/>

      <button onClick={() => setTeste(teste + 1)}>
        { teste }
      </button>
    </>
  )
}

//Utilize import no header para funcionar o exports
export default React.memo(Header)

//EX2
function reducer(state, action) {
  switch (action) {
    case 'Aumentar':
      return state + 1

    case 'Reduzir':
      return state + 1

    default: 
      throw new Error()
  }
}

const Mobile = () => {
  const [state, dispatch] = React.useReducer(reducer, 0)

  return (
    <>
      <button onClick={() => dispatch('aumentar')}>+</button>
      <button onClick={() => dispatch('reduzir')}>-</button>
      <p>{ state }</p>
    </>
  )
}
