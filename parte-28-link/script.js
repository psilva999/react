//EX1
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Link to='/'>Home</Link>
  )
}

//EX2 
import { NavLink } from 'react-router-dom'

const Link = () => {
  const activeStyle = {
    color: 'orangered'
  }

  return (
    <NavLink to='/' end activeStyle={ activeStyle }>
      Tal
    </NavLink>
  )
}

//EX3
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  function click() {
    navigate('/sobre')
  }

  return (
    <button onCLick={ click }>Login</button>
  )
}
