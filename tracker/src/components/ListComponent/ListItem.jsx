import React from 'react'

export default function (props) {
  return (
    <>
    <article className='listItem'>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </article>
    </>
  )
}
