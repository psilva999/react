import { useState } from 'react'

import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

interface Props {
  onClick: () => void;
}

const Heart = ({ onClick }: Props) => {
  const [background, setBackground] = useState(false),

        toggle = () => {
          setBackground(!background)
          onClick()
        }

  if (background) {
    return (
      <AiFillHeart 
        size={ 46 } 
        color={ background? 'red' : 'black' }

        onClick={ toggle }/>
    )
  }

  else {
    return (
      <AiOutlineHeart
        size={ 36 } 
        color={ background? 'red' : 'black' }

        onClick={ toggle }/>
    )
  }
}

export default Heart
