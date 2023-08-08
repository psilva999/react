import styles from './ButtonPerso.module.css'

interface Props {
  color:string;
}

const ButtonPerso = ({ color }: Props) => {
  return (
    <button className={ [styles.btn, styles[`btn-${ color }`]].join(' ') }>ButtonPerso</button>
  )
}

export default ButtonPerso
