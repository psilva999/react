//Podemos passar argumentos nos componentes e passar quantas quisermos

const Berserk = (props) => {
  return <h1 style={{ fontSize: props.fontSize }}>{ props.texto }</h1>
}

//Podemos desestrutura-las se for preciso
const Blinders = (modo, slam) => {
  return (
    <p style={{ color: modo }}>{ slam }</p>
  )
}

const App = () => {
  return (
    <section>
      <Berserk texto='Last Man Standing' fontSize='6rem'/>

      <Blinders slam='Teste aqui' modo='orangered'/>
    </section>
  )
}

//Se utilizarmos o componente abrindo e fechando o mesmo, o conteúdo interno deste será acessado através da propriedade children.
const Pets = (props) => {
  return <h1>{ props.children }</h1>
}

const Way = () => {
  return (
    <section>
      <Pets>
        First Grand Slam
      </Pets>
    </section>
  )
}

//Usamos o rest e spread quando não sabemos todas as propriedades que um componente pode receber.
const input = ({ label, id, ...props }) => {
  return (
    <section>
      <label htmlFor={ id }>{ label }</label>
      <input type='text' id={ id } { ...props }/>
    </section>
  )
}
