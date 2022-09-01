import React from 'react'
import { CustomHook } from './CustomHook'

// export default function App() {

// const [value, {inc, dec, reset}]= CustomHook({
    
//     min: -5,
//     initial: 6,
//     max: 12,
//     step: 1
   
// })

// return (
//     <div className="box">
//         <h3>Volume</h3>
//         <button onClick={dec}>-</button>
//         <span>{value}</span>
//         <button onClick={inc}>+</button>
//         <button onClick={reset}>Reset</button>
//         </div>
//   )

// }

// Homework
export default function App() {

    const [value, {rep}]= CustomHook({
        initial: [1,2,2,7,9,9,7]
    })
		console.log('value', value)
    
    return (
        <div className="box">
            <pre>{JSON.stringify(value, null, 1)}</pre>
           
            <button onClick={rep}>number of rep</button> 
            
            </div>
      )
    
    }