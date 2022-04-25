# React Hooks

**exemplos no script**

**Estado**

* O estado de uma aplicação representa as características dela naquele momento. Os dados do usuário foram carregados, o botão está ativo, menu está aberto.

**Hooks**

* Funções especiais do react que permitem controlarmos os componentes funcionais. __EX1__

**React.useState**

* Retorna uma Array com 2 valores. 
O primeiro guarda o valor do estado atual, o segundo é uma função que pode ser utilizada para modificarmos o primeiro valor

* Quando o segundo valor é ativado, todos os componentes que dependerem do estado, serão renderizados novamente. É isso que garante a reatividade de componentes funcionais

__EX2__

* É possível utilizar o useState na quantidade adequada para o seu projeto __EX3__

* Podemos passar o estado e a função como propriedades para outros elementos. 
__EX4__

**Reatividade**

* Não modifique o estado diretamente. Utilize sempre a função de atualização do estado, pois ela que garante a reatividade dos componentes.

**Callback**

* Podemos passar uma função de callback para atualizar o estado.
__EX5__

**React.StrictMode**

* O modo estrito invoca duas vezes a renderização do componente, permitindo a eliminação de funções com efeitos colaterais (alteram fatores de fora da constante ou função)
__EX6__
