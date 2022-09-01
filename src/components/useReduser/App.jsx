import React, {useReducer} from "react";
import  reducer  from "./reducer";

export default function App(){
    const [value, dispatch] = useReducer(reducer, {count: 1, hookname: "useReduser"})
    return(
        <div>
            <h2>{value.count}</h2>
            <button onClick={()=> dispatch({type: "pluse"})}>add</button>
        </div>
    )
}