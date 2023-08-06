import { useState } from 'react'

import Message from "./Message"
import Alert from "./components/Alert"

import Button from "./components/Button"
import List from "./components/List"
import AlertButton from './components/AlertButton'

const App = () => {
  const [handleAlert, setHandleAlert] = useState(false)
  const items = ['SP','RJ', 'MG']

  const handleSelectItem = (item: string) => {
    console.log(item)
  }

  return (
    <div>
      <Message/>

      <Alert>
        Wrong shore! World War!
        <strong> Berlin is burning!</strong>
      </Alert>

      <List 
        items={ items } 
        heading='Cities'
        onSelectItem={ handleSelectItem }/>

      <Button 
        colorOfButton='primary'
        onClick={ () => setHandleAlert(true) }>
        Mexicana
      </Button>

      <Button 
        colorOfButton='secondary'
        onClick={ () => setHandleAlert(true) }>
        Baiana
      </Button>

      <Button 
        colorOfButton="success"
        onClick={ () => setHandleAlert(true) }>
        Latina
      </Button>

      { 
        handleAlert &&
        <AlertButton onClose={ () => setHandleAlert(false) }>
        </AlertButton> 
      }
    </div>

  )
}

export default App