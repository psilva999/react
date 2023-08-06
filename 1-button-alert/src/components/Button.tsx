interface Props {
  colorOfButton?: 
    'primary' | 'secondary' | 
    'danger' | 'success';

  children: string;

  onClick: () => void;
}

const Button = ({ colorOfButton = 'primary', children, onClick }: Props) => {

  return (
    <button 
      type="button" 
      className={ `btn btn-${ colorOfButton }` }
      onClick={ onClick }>

      { children }
    </button>

  )
}

export default Button
