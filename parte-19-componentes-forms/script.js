//EX1
const Input = ({ id, label, setValue, ...props }) => {
  return (
    <>
      <label htmlFor={ id }>{ label }</label>

      <input
        id={ id }
        name={ id }
        onChange={( {target} ) => setValue(target.value)}
        { ...props }
      />
    </>
  )
}

//Select
const Select = ({ options, value, setValue, ...props }) => {
  return (
    <select
      value={ value }
      onChange={ ({ target }) => setValue(target.value) }
      { ...props }
    >

      <option value='' disabled>Selecione</option>

      { options.map(option => (
        <option key={ option } value={ option }>
          { option }
        </option>
      )) }

    </select>
  )
}

//Radio
const Radio = ({ options, value, setValue, ...props }) => {
  return(
    { options.map(option => (
      <label key={ option }>
        <input
          type='radio'
          value={ option }
          checked={ value === option}
          onChange={({ target }) => setValue(target.value)}
        />

        { option }
      </label>
    ))}
  )
}

//checkbox
const Checkbox = ({ options, value, setValue, ...props }) => {
  function change({ target }) {
    if (target.checked) setValue([...value, target.value])

    else setValue(value.filter(cor => cor !== target.value))
  }

  return (
    <>
      {options.map((option) => (
        <label key={option}>
          <input
            type="checkbox"
            value={option}
            checked={value.includes(option)}
            onChange={handleChange}
          />
          {option}
        </label>
      ))}
    </>
  )
}
