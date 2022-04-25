//EX1
import styled from 'styled-components'

const Title = styled.h1`
  font-size:1.7rem;
  color:orangered;
  letter-spacing:.7rem;
`

const App = () => {
  return (
    <>
      <Title>Titulo do Site</Title>
    </>
  )
}

//EX2
function template(value, total) {
  console.log(value, total)
}

const total = 10
template`São ${total} no total`

//EX3
const Resultado = styled.p`
  background:${props => props.cor};
  border-radius:3rem;
  opacity:.5;

  &:hover {
    opacity:1;
    border-radius:10rem;
  }
`

const Exemplo = () => {
  function template(v, t) {
    console.log(v, t)
  }

  const t = 21
  template`${t} no total`

  return (
    <>
      <Resultado cor='green'>R$1220</Resultado>
      <Resultado cor='yellow'>R$3220</Resultado>
    </>
  )
}