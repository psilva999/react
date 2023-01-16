import React from 'react'

const Children = ({ label, id, ...props }) => {
  return (
    <span>
      <label htmlFor={ id }>{ label }</label>
      <input id={ id } type="text" {...props}/>
    </span>
  )
}

export default Children
