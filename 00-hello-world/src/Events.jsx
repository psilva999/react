import React from 'react'

const Events = () => {
  function handleClick(e) {
    document.querySelector('p').innerHTML += `Veio com ${ e.target.innerText } <br>`
  }

  return (
    <div>
      <button onClick={ handleClick }>LONTRAS</button>
      <button onClick={ handleClick }>PIJAMAS</button>
    </div>
  )
}

export default Events