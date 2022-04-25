//EX1
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={ <p>oi</p> }/>
        <Route path='link' element={ <p>tchau</p> }/>
      </Routes>

    </BrowserRouter>
  )
}

//EX2
import Pagina404 from './Pagina404'

const Mobile = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={ <p>Error 404</p> }/>

      </Routes>
    </BrowserRouter>
  )
}
