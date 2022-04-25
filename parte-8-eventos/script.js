//Podemos atribuir eventos diretamente aos elementos JSX como um atributo
//Os eventos são criados pelo próprio React, seguindo as especificações do W3C
const Ano = () => {
  function click(e) {
    console.log(`Tem ${e.target.innerText}`)
  } 

  return (
    <>
      <button onClick={ click }>2022</button>
      <button onClick={ click }>2023</button>
    </>
  )
}

//Função anônima

const Mes = () => {
  return (
    <button onClick={ ({ target }) => target.classList.toggle('ativa') }>
      Ativa
    </button>
  )
}

//Eventos no window/document ou qualquer elemento fora do React, devem ser adicionados com JavaScript normalmente, usando o addEventListener.
const Scroll = () => {
  function handle(e) {
    console.log(e)
  }
  
  window.addEventListener('scroll', handle)

  return <div style={ { height: '200vh' } }>
    Container
  </div>
}
