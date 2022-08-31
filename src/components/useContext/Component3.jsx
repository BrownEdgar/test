import React, {useContext} from 'react'
import{MyContext} from './MainContext'

export default function Component3() {
    const y=useContext(MyContext)
  return (
    <div>
        <h2>Component3</h2>
        <strong>value:{y.x}</strong>
        <button>Click</button>
        
    </div>
  )
}
