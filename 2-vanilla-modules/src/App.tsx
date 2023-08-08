import List from "./components/ListGroup"

import ButtonPerso from './components/Button/index'
import Heart from './components/Heart/index'

const App = () => {
  const items = ['SP','RJ', 'MG']

  const handleSelectItem = (item: string) => {
    console.log(item)
  }

  return (
    <div>

      <List 
        items={ items } 
        heading={ true }
        onSelectItem={ handleSelectItem }/>

      <ButtonPerso color={ 'primary' }/>

      <Heart onClick={ () => console.log("clicked") }/>
    </div>

  )
}

export default App