import React from 'react'

const Title = ({ cor, text, children }) => {
  return <h1 style={{ color: cor }}>{ text } - { children }</h1>
}

const Life = () => {
  return (
    <>
      <Title cor='orange' text='Misty Mountains'/>
      <Title cor='gray' text='Hobbit'/>
      <Title> Where is my mind - <span>tyler</span> </Title>
    </>
  )
}

export default Life
