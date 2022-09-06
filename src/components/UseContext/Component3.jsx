import React, {useContext} from 'react'
import { MyContext } from './MainContext'

export default function Component3() {
  const x = useContext(MyContext)
  return (
    <div>
      <h2>Component3 {x}</h2>
      <button>Click</button>
    </div>
  )
}
