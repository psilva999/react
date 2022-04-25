//Todo elemento React é criado com a função createElement. O babel é responsável por transformar o elemento criado com JSX (que se parece com HTML) em funções de React
function App() {

  //NÃO é recomendado criar dessa forma
  return React.createElement('h1', { id: 'title' }, 'My App world')
}

ReactDOM.render(<App/>, document.querySelector('section'))

//Componentes
//Permitem você dividir a sua interface em pequenos elementos

//function Component
const Button = () => {

  //O Babel ficará responsável pela transformação
  return <button id='teste'>SELL</button>
}

ReactDOM.render(<Button/>, document.querySelector("div"))

//class component
class Buttons extends React.Component {
  render() {
    return <button id='lado'>BUY</button>
  }
}

ReactDOM.render(<Buttons/>, document.querySelector('article'))

//Link para testes: https://babeljs.io/repl

//Composição: permite a reutilização de elementos presentes na página
const Gladiator = () => {
  return <button>WATCH</button>
}

const MainTitle = () => {
  return (
    <nav>
      <a href="#">Link 1</a>
      <Button />
    </nav>
  )
}

const Ending = () => {
  return (
    <section>
      <Gladiator/>

      <MainTitle/>
    </section>
  )
}
