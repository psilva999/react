import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  return (
    <button
      style={{
        margin: props.margin,
        width: `${props.width}px`,
        height: `${props.width / 3}px`,
      }}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  margin: PropTypes.string.isRequired,
  width: PropTypes.number,
  disabled: PropTypes.bool,
};

const App = () => {
  return (
    <div>
      <h1>Meu App</h1>
      <Button margin="10px" width={300}>
        Clique Aqui
      </Button>
    </div>
  );
};

//EX2
import PropTypes from 'prop-types';

const Buttons = (props) => {
  return (
    <button
      style={{
        margin: props.margin,
        width: `${props.width}px`,
        height: `${props.width / 3}px`,
      }}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

Buttons.defaultProps = {
  width: 200,
  disabled: false,
};

Buttons.propTypes = {
  margin: PropTypes.string.isRequired,
  width: PropTypes.number,
  disabled: PropTypes.bool,
};

export default Buttons;

//EX2
const Contato = React.lazy(() => import('./Contato'))

const Appz = () => {
  const [ativar, setAtivar] = React.useState(false)

  return (
    <>
      {ativar && (
        <React.Suspense fallback={ <p>carregando...</p> }>
          <Contato/>
        </React.Suspense>
      )}

      <button onClick={() => setAtivar(true)}>Ativar</button>
    </>
  )
}
