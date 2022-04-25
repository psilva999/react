**extends React.Component**
* Antes dos hooks a única forma de criarmos componentes com estados reativos, era através da extensão da classe React.Component.
__EX1__

**this.props**
* Acessa as propriedades que ficam dentro do objeto da classe
__EX2__

**this.state**
__EX3__

**this.setState()**
* Utilizado para atualizar o __this.state__
* Renderiza o componente toda vez que for ativo
__EX4__

**Métodos**
Os métodos podem ser definidos no corpo da classe. Mas para passarmos os mesmos como um callback é necessário utilizarmos o bind, para que o método mantenha o contexto da classe em this.
__EX5__

**Ciclo de vida**
__EX6__
