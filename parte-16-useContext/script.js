//EX1
import React from 'react'

const Context = React.createContext()

//EX2
const Mobile = () => {
  return (
    <Context.Provider value={{ nome: 'Psilva' }}>
      <button>
        CLICA
      </button>
    </Context.Provider> 
  )
}

//EX3
const Produto = () => {
  const user = React.useContext(Context)

  return <p>Produto de: { user.nome }</p>
}

//EX4
const Teste = () => {
  return (
    <GlobalStorage>
      <p>Dele</p>
    </GlobalStorage>
  )
}

// Utilize o GlobalContext do exemplo anterior para puxar os dados da API abaixo:
// https://ranekapi.origamid.dev/json/api/produto/
// assim que o usuário acessar o app
// coloque os dados da API no contexto global, dando acesso aos dados da mesma
// defina uma função chamada limparDados que é responsável por zerar os dados de produto
// e exponha essa função no contexto global

// export const GlobalContext = React.createContext();

// export const GlobalStorage = ({ children }) => {
//   const [produto, setProduto] = React.useState(null);

//   React.useEffect(() => {
//     fetch('https://ranekapi.origamid.dev/json/api/produto/')
//       .then((response) => response.json())
//       .then((json) => setProduto(json));
//   }, []);

//   function limparDados() {
//     setProduto(null);
//   }

//   return (
//     <GlobalContext.Provider value={{ produto, setProduto, limparDados }}>
//       {children}
//     </GlobalContext.Provider>
//   );
// };
