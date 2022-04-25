//JavaScript XML / extension. Estende a sintaxe do JS, introduzindo elementos como XML que são convertidos em funções de React
const Time = () => {
  return <button>Comprar</button>
}

//É transformado em
const TimeConvertido = () => {
  return React.createElement('button', null, 'Comprar');
}

//Atributos podem ser passados como no HTML, porém com alguns casos especiais.
const Multa = () => {
  return (
    <>
      <a href='www.google.com' title='site do google'>Clica</a>
    </>
  )
}

//className é utilizado para evitar conflito com o class do JS
const Avanca = () => {
  return <p className='text'>Textao</p>
}

const Form = () => {
  return (
    <form>
      <label htmlFor='nome'>Nome</label>

      <input type='radio' id='nome'/>
    </form>
  )
}

//Utilize camelCase
const Camelo = () => {
  return <video autoPlay/>
}

//Expressões e variáveis podem ser colocadas dentro do JSX, utilizando chaves {}.
const Teste = () => {
  const ano = 1999

  return <p>{ ano }</p>
}

const Mais = () => {
  const active = true

  return <p classNmae={ active ? 'ativo' : 'inativo' }>Simbora</p>
}

//Também posso atribuir JSX direto a uma constante/variável

const via = <h1>Titulo</h1>,

      veia = () => {
        return (
          <section>
            { via }
          </section>
        )
      }

//Você pode executar qualquer expressão dentro das chaves {}. Se o resultado da expressão for um número, string ou array de números/strings o resultado irá aparecer na tela. Booleanos (true/false), undefined e null não irão resultar em nada na tela. Objetos irão retornar um erro.
const App = () => {
  function meuNome() {
    return 'André';
  }

  function quadrado(x) {
    return x * x;
  }

  const carro = {
    rodas: 4,
    marca: 'Ford',
  };

  return (
    <div>
      <p>{'MINHA EMPRESA'.toLowerCase()}</p>
      <p>{30 * 2}</p>
      <p>{true}</p>
      <p>{undefined}</p>
      <p>{(() => 'Função Executada')()}</p>
      <p>{meuNome()}</p>
      <p>{quadrado(2)}</p>
      <p>{quadrado(2) === 4 ? 'Fórmula correta' : 'Fórmula incorreta'}</p>
      <p>{quadrado(2) === 4 && 'Fórmula correta'}</p>
      <p>{Date.now()}</p>
      <p>{new Date().getFullYear()}</p>
      <p>
        Marca: {carro.marca}, Rodas: {carro.rodas}
      </p>
    </div>
  );
};

//O style irá receber um objeto com as propriedades do elemento em camelCase.
const Css = () => {
  const styleH1 = {
    color: 'Red',
    fontFamily: 'Calibri',

    fontSize: '3rem',
    letterSpacing: '.5rem'
  }

  return (
    <section>
      <h1 style={ styleH1 }>Empresa</h1>

      <p style={{ color:'orangered' }}>Contato</p>
    </section>
  )
}

//EXERCÍCIOS
// Mostre os dados da aplicação, como apresentado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
}

const Apps = () => {
  const dados = mario,
        total = dados.compras.map(item => Number(item.preco.replace('R$ ', ''))).reduce((a, b) => a + b)

  return (
    <>
      <li>Nome: { dados.cliente }</li>
      <li>Idade: { dados.idade } anos</li>

      <li>Situação: { ' ' }

        <span style = {{ color: dados.ativa ? 'green' : 'red' }}>
          { dados.ativa ? 'Ativa' : 'Inativa' }
        </span>
      </li>

      <li>Total de gastos: R${ total } 
      { total > 1e4 && <li style = {{ color: 'red' }}>Você está gastando muito</li> }</li>
    </>
  )
}

ReactDOM.render(<Apps/>, document.querySelector("section"))
