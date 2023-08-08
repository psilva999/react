import { useState } from 'react'

import styles from './ListGroup.module.css'
import styled from 'styled-components'

import { BsFillCalendarFill } from 'react-icons/bs'

const Ul = styled.ul`
  list-style:none;
  background:orange;
`

interface ListProps {
  active: boolean;
}

const Li = styled.li<ListProps>`
  padding:.5rem .25rem;
  background:${ props => (props.active? 'green' : 'none') };
`

interface Props {
  items: string[];
  heading: boolean;

  onSelectItem: (item: string) => void;
}

function List({ items, onSelectItem }: Props) {
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <>

      <BsFillCalendarFill color='orange' size='36'/>

      {items.length === 0 && <p>No items found</p>}

      <Ul className={ [styles.listGroup, styles.container].join(' ') }>
        {
          items.map((item, index) => 
          <Li active={ index === selectedIndex }

            key={ item } 
            onClick={ () => { 
              setSelectedIndex(index)
              onSelectItem(item) 
            } }>

            { item }
          </Li>)
        }
      </Ul>
    </>

  )
}

export default List
