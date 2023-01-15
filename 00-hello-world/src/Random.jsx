import React from 'react'

const Random = () => {
  const number = Math.random() * 1000

  return (
    <button>Peaky: { number }</button>
  )
}

export default Random
