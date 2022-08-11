import React from 'react'

export default function Component({name,date,title}) {
  return (
    <div className='block-item'>
        <h4>{title}</h4>
        <span>{name}</span>  <span className='block-date'>{date}</span>
    </div>
  )
}
