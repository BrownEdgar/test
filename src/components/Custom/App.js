import React from 'react';
import {CustomHook} from './CustomHook'

export default function App() {
    const [value, {i,d,r}] = CustomHook({
        initial:[1, 5, 25, 'gago25', 'ciran', 'mrdo12', 4, 5, 1 ]
    })
    return(
        <div>
            <h2>{JSON.stringify([1, 5, 25, 'gago25', 'ciran', 'mrdo12', 4, 5, 1 ])}</h2>
            <h3>result</h3>
            <p>{JSON.stringify(value,null,1)}</p> 
            <button onClick={d}>mejtexi element</button>
            <span> </span>
            <button onClick={i}>bar vortex ka tiv</button>
            <span> </span>
            <button onClick={r}>krknvox tveri qanak</button>
        </div>
    )
}