**createContext**
* Permite passarmos dados a todos os componentes, sem a necessidade de utilizarmos propriedades. Serve principalmente para dados do usuário logado (dados globais)
__EX1__

**Provider**
* Utilizado para envolver todos os elementos que terão acesso aos dados do context.
* Recebe uma propriedade chamada value onde será passado os dados do contexto
__EX2__

**useContext**
* Utilizado para consumirmos o contexto. Devemos passar o contexto como argumento
__EX3__

**GlobalStorage**
* Podemos passar qualquer valor no value do context
__EX4__