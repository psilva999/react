import Test from "./Test"

function App() {
  const active = true

  return (
    <div className="App">
      <h1 className={ active? 'mind' : 'norton' }>SABATON</h1>

      <Test/>
    </div>
  )
}

export default App
