import React from 'react'

const Hooks = () => {
  const [count, setCount] = React.useState(0)

  return (
    <div>
      <button 
        onClick={ () => setCount(count + 1) }>
        NOTHING: { count }
      </button>

      <li>total: { count }</li>
      <li>war: ${ count * 2500 }</li>
    </div>

  )
}

export default Hooks
