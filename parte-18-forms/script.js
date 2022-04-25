//EX1
const Input = () => {
  const [nome, setNome] = React.useState('')

  return (
    <>
      <label htmlFor='nome'>Nome:</label>

      <input
        type='text'
        id='nome'
        value={ nome }
        onChange={ e => setNome(e.target.value) } 
      />

      <p>{ nome }</p>
    </>
  )
}

//EX2
const form = () => {
  const [nome, setNome] = React.useState('')

  function submit(e) { e.preventDefault() }

  return (
    <form onSubmit={ submit }>
      <label htmlFor='nome'>Nome</label>

      <input
        type='text'
        id='nome'
        value = { nome }
        onChange={ e => setNome(e.target.value) }
      />

      <button>Enviar</button>
    </form>
  )
}

// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado

// Essa é a função utilizado para realizar o POST
fetch('https://ranekapi.origamid.dev/json/api/usuario', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  // form é o objeto com os dados do formulário
  body: JSON.stringify(form),
});

// Mostre uma mensagem na tela, caso a resposta da API seja positiva

// import React from 'react';

// const App = () => {
//   const [form, setForm] = React.useState({
//     nome: '',
//     email: '',
//     senha: '',
//     cep: '',
//     rua: '',
//     numero: '',
//     bairro: '',
//     cidade: '',
//     estado: '',
//   });

//   const [response, setResponse] = React.useState(null);

//   function handleSubmit(event) {
//     event.preventDefault();
//     fetch('https://ranekapi.origamid.dev/json/api/usuario', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(form),
//     }).then((response) => {
//       setResponse(response);
//     });
//   }

//   function handleChange({ target }) {
//     const { id, value } = target;
//     setForm({ ...form, [id]: value });
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="nome">Nome</label>
//       <input type="text" id="nome" value={form.nome} onChange={handleChange} />
//       <label htmlFor="email">Email</label>
//       <input
//         type="email"
//         id="email"
//         value={form.email}
//         onChange={handleChange}
//       />
//       <label htmlFor="senha">Senha</label>
//       <input
//         type="password"
//         id="senha"
//         value={form.senha}
//         onChange={handleChange}
//       />
//       <label htmlFor="cep">Cep</label>
//       <input type="text" id="cep" value={form.cep} onChange={handleChange} />
//       <label htmlFor="senha">Rua</label>
//       <input type="text" id="rua" value={form.rua} onChange={handleChange} />
//       <label htmlFor="numero">Número</label>
//       <input
//         type="text"
//         id="numero"
//         value={form.numero}
//         onChange={handleChange}
//       />
//       <label htmlFor="bairro">Bairro</label>
//       <input
//         type="text"
//         id="bairro"
//         value={form.bairro}
//         onChange={handleChange}
//       />
//       <label htmlFor="cidade">Cidade</label>
//       <input
//         type="text"
//         id="cidade"
//         value={form.cidade}
//         onChange={handleChange}
//       />
//       <label htmlFor="estado">Estado</label>
//       <input
//         type="text"
//         id="estado"
//         value={form.estado}
//         onChange={handleChange}
//       />
//       <button>Enviar</button>
//       {response && response.ok && <p>Usuário Criado</p>}
//     </form>
//   );
// };

const Textarea = () => {
  const [mensagem, setMensagem] = React.useState('')

  return (
    <form>
      <textarea
        id='mensagem'
        value={ mensagem }
        rows='5'
        onChange={ ({ target }) => setMensagem(target.value) }
      />

      <p>{ mensagem }</p>
    </form>
  )
}

//Select
const Select = () => {
  const [select , setSelect] = React.useState('')

  return (
    <>
      <select value={ select } onChange={({ target }) => setSelect(target.value)}>
        <option value='' disabled>Selecione</option>
        <option value='notebook'>Notebook</option>
        <option value='smartphone'>Smartphone</option>
      </select>

      <p>{ select }</p>
    </>
  )
}

//input radio
//
const Radio = () => {
  const [radio , setRadio] = React.useState('')

  function change({ target }) {
    setRadio(target.value)
  }

  return (
    <>
      <label>
        <input
          type="radio"
          value="notebook"
          checked={ radio === 'notebook' }
          onChange={ change } 
        />
        Notebook
      </label>

      <label>
        <input
          type="radio"
          value="smartphone"
          checked={ radio === 'smartphone' }
          onChange={ change }
        />
        Smartphone
      </label>
    </>
  )
}

//checkbox
const Checkbox = () => {
  const [checkbox, setCheckbox] = React.useState(false)

  function change({ target }) {
    setCheckbox(target.checked)
  }

  return (
    <>
      <label>
        <input
          type='checkbox'
          value='termos'
          checked={ checkbox }
          onChange={ change }
        />

        Li os termos
      </label>
    </>
  )
}

//múltiplos checkbox
const App = () => {
  const [cores, setCores] = React.useState([]);

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  function handleChecked(cor) {
    return cores.includes(cor);
  }

  return (
    <form>
      <label>
        <input
          type="checkbox"
          value="azul"
          checked={handleChecked('azul')}
          onChange={handleChange}
        />
        Azul
      </label>
      <label>
        <input
          type="checkbox"
          value="vermelho"
          checked={handleChecked('vermelho')}
          onChange={handleChange}
        />
        Vermelho
      </label>
      <label>
        <input
          type="checkbox"
          value="verde"
          checked={handleChecked('verde')}
          onChange={handleChange}
        />
        Verde
      </label>
      <label>
        <input
          type="checkbox"
          value="amarelo"
          checked={handleChecked('amarelo')}
          onChange={handleChange}
        />
        Amarelo
      </label>
      <label>
        <input
          type="checkbox"
          value="roxo"
          checked={handleChecked('roxo')}
          onChange={handleChange}
        />
        Roxo
      </label>
      <ul>
        {cores.map((cor) => (
          <li key={cor}>{cor}</li>
        ))}
      </ul>
    </form>
  );
};

// Otimize o código do slide anterior
// Utilizando a array abaixo para mostrar
// cada checkbox na tela.

const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

// const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

// const App = () => {
//   const [cores, setCores] = React.useState([]);

//   function handleChange({ target }) {
//     const { checked, value } = target;
//     if (checked) {
//       setCores([...cores, target.value]);
//     } else {
//       setCores(cores.filter((cor) => cor !== value));
//     }
//   }

//   function handleChecked(cor) {
//     return cores.includes(cor);
//   }

//   return (
//     <form>
//       {coresArray.map((cor) => (
//         <label key={cor} style={{ textTransform: 'capitalize' }}>
//           <input
//             type="checkbox"
//             value={cor}
//             checked={handleChecked(cor)}
//             onChange={handleChange}
//           />
//           {cor}
//         </label>
//       ))}
//       <ul>
//         {cores.map((cor) => (
//           <li key={cor}>{cor}</li>
//         ))}
//       </ul>
//     </form>
//   );
// };
