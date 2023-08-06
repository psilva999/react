function Message() {
  const name = 'Psilva', 
        age = '24'

  if (name && age)
    return <h1>Hello { name }, { age }</h1>

  else 
    return <h1>Hello World</h1>
}

export default Message
