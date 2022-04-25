* Todo componente possui um ciclo de vida que passa pela renderizamento, atualização e eliminação. 

* Com esse processo, podemos definir um callback que será executado durante certo momentos do ciclo de vida
__EX1__


**Array de dependências**

* Podemos definir dois argumentos no useEffect: função de callback e array com lista de dependências.
__EX2__


**Dependências Obrigatórias**

* Utilizando o valor de um hook ou propriedade dentro de um efeito, o mesmo irá indicar a necessidade de uma dependência no array
__EX3__

**Múltiplos Efeitos**

* Coloque cada efeito em um useEffect diferente
__EX4__

**Antes de desmontar**

* Em algumas situações será necessário utilizar um efeito sempre que um componente for desmontado. Utilize um callback no retorno no de efeito
__EX5__
