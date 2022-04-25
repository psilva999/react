//EX1
class Produtos extends React.Component {
  render() {
    return (
      <ul>
        <li>Contato</li>
        <li>Sobre</li>
      </ul>
    )
  }
}

const App = () => {
  return (
    <>
      <Produtos/>
    </>
  )
}

//EX2
class Tipo extends React.Component {
  render() {
    return (
      <>
        <h1>{ this.props.titulo }</h1>
      </>
    )
  }
}

const Props = () => {
  return (
    <>
      <Tipo titulo='Produtos'/>
    </>
  )
}

//EX3
class State extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      contar: 0
    }
  }

  render() {
    return (
      <>
        <h1>{ this.props.titulo }</h1>
      </>
    )
  }
}

//EX4
class Produtos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contar: 0,
    };
  }
  render() {
    return (
      <div>
        <h1>{this.props.titulo}</h1>
        <p>{this.state.contar}</p>
        <button
          onClick={() =>
            this.setState((state) => ({
              contar: state.contar + 1,
            }))
          }
        >
          Adicionar
        </button>
      </div>
    );
  }
}

//EX5
class Produtoss extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contar: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      contar: state.contar + 1,
    }));
  }

  render() {
    return (
      <div>
        <h1>{this.props.titulo}</h1>
        <p>{this.state.contar}</p>
        <button onClick={this.handleClick}>Adicionar</button>
      </div>
    );
  }
}

//EX5
class Produtos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contar: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log('Quando ele monta, utilizado para o Fetch');
  }

  componentDidUpdate() {
    console.log('Sempre que atualiza');
  }

  componentWillUnmount() {
    console.log('Sempre que é desmontado');
  }

  handleClick() {
    this.setState((state) => ({
      contar: state.contar + 1,
    }));
  }

  render() {
    return (
      <div>
        <h1>{this.props.titulo}</h1>
        <p>{this.state.contar}</p>
        <button onClick={this.handleClick}>Adicionar</button>
      </div>
    );
  }
}
