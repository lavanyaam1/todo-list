import React from 'react'
import { useNavigate } from 'react-router-dom';
import { LISTS_ROUTE} from '../../constants/routes';

export default function ListItem(props) {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate(`${LISTS_ROUTE}/${props.id}`);
  }
  return (
    <>
        <article className='listItem'>
          <h1>{props.title}</h1>
          <button className='list-btn' onClick={onClickHandler}>Details</button>
        </article>
    </>
  )
}

