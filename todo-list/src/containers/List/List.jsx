import React from 'react'
import ListItem from './ListItem'
import { useNavigate } from "react-router-dom";
import { LISTS_ROUTE } from "../../constants/routes";
import "./styles/list.css"
export default function List(props) {
  const lists = props.listData;
  const navigate = useNavigate();
  return (
    <>
    <div className='list-header'>
    <button className='createlist-btn' onClick={()=> navigate(`${LISTS_ROUTE}/create`)}>Create List</button>
    </div>
      <div className='list'>
        {
          lists.map((list) => (
            <ListItem
              key={list.id}
              id={list.id}
              title={list.name}
            />   
          ))
        }
      </div>
    </>
  )
}
