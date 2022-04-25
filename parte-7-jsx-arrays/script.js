//JSX irá listar um dos itens da array. Ele não irá separar ou colocar vírgula, é você que deve modificar a array para o resultado desejado
const App = () => {
  const produtos = ['Computador', 'Smartphone']

  return <li>{ produtos }</li>
}

//O JSX necessita de uma key única para cada elemento da Array.
const pi = () => {
  const empresas = [<li key='e1'>Amazon</li>, <li key='e2'>Google</li>]

  return <ul>{ empresas }</ul>
}

//É comum usarmos o map direto na array como uma expressão, retornando um elemento para cada item novo da Array.
const Amazon = () => {
  const books = [ 'cornwell', 'Tolkien' ]

  return (
    <ul>
      { books.map(book => {
        <li key={ book }>{ book }</li>
      }) }
    </ul>
  )
}

//O cenário mais comum é trabalhar com array's de objetos.
const Appz = () => {
  const livros = [
    { nome: 'A Game of Thrones', ano: 1996 },
    { nome: 'A Clash of Kings', ano: 1998 },
    { nome: 'A Storm of Swords', ano: 2000 },
  ];

  return (
    <ul>
      {livros
        .filter((livro) => livro.ano >= 1998)
        .map((livro) => (
          <li key={livro.nome}>
            {livro.nome}, {livro.ano}
          </li>
        ))}
    </ul>
  );
};

//EXERCÍCIOS
// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500
const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
];

const AppQ = () => {
  return (
    <>
      { produtos.filter(produto => Number(produto.preco.replace('R$ ', '')) > 1500)
        .map(produto => (
          <div key={ produto.id }> <h1>{ produto.nome }</h1>
            <p>{ produto.preco }</p>

            <ul>
              {produto.cores.map(cor => ( 
                <li key={ cor } style={{ backgroundColor: cor, color: 'white' }}>
                  { cor }
                </li> 
                ))}
            </ul>
          </div>
        ))

      }
    </>
  )
}

ReactDOM.render(<AppQ/>, document.querySelector('section'))
