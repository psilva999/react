//EX1
import './Style.css'

const App = () => {
  return (
    <div className='container'>
      <p className='text'>Site</p>
    </div>
  )
}

//EX2
import styles from './Produto.module.css'

const Produto = () => {
  return (
    <>
      <h1 className={ styles.preco }>Notebook</h1>
      <button className={ styles.comprar }>Comprar</button>
    </>
  )
}
