import Children from './Children'
import Life from './Life'

function App() {
  const load = true

  if (load) 
    return (
      <>
        <h1>loading...</h1>
        <Life/>
        <Children id='paris' label='E-mail'/>
      </>
    )

  else 
    return (
      <h1>Emperor</h1>
    )
}

export default App
