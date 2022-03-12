import React from 'react'
import ListItem from './ListItem'
import "./styles/list.css"

export default function List(props) {
  const lists = props.list
  return (
    <div className='list'>

      {
        lists.map((list,index)=>(
          <ListItem 
          key={index}
          title={list.title}
          description={list.description}/>
        ))
      }
    </div>
  )
}
