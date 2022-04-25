const Buy = () => {
  const [count, setCount] = React.useState(1)

  return (
    <div>
      <p>Total: {count}</p>
      <p>Preço: ${count * 2.5}</p>

      <button onclick={() => setCount(count + 1)}>Buy</button>
    </div>
  )
}

ReactDOM.render(<Buy/>, document.querySelector('section'))
