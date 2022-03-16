import React from 'react'
import "./TextFeild.css"

export default function Textfeild({label,value,onChange }) {
  return (
    <div className='text'>
        <label htmlFor={label.replace(/[\s*:]/g,'')}>{label}
        <input type="text" 
        id={label.replace(/[\s*:]/g,'')} 
        name={label.replace(/[\s*:]/g,'')} 
        value={value}
        onChange={onChange}/>
      </label>
    </div>
  )
}
