import React, {useReducer} from 'react'
import reducer from './reducer'


export default function App() {

    const [value,dispatch] = useReducer(reducer,{arr:[-51, 62, 90, -40, 8, -16, 150]})

  return (
    <div>
        <h2>{value.count}</h2>
        {/* <button onClick={()=> dispatch({type:"shuffle"})}>Shuffe</button> */}
        {/* <button onClick={()=> dispatch({type:"plus"})}>ADD</button>
        <button onClick={()=> dispatch({type:"minus"})}>Minus</button>
        <button onClick={()=> dispatch({type:"random"})}>Random</button> */}
    </div>
  )
}
 
