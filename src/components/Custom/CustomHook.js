import React, {useState} from 'react'

export const CustomHook = ({
   
    initial = [1, 5, 25, 'gago25', 'ciran', 'mrdo12', 4, 5, 1 ]
}) =>{
    const [value, setValue] = useState(initial)
    const i = ()=> {
        setValue(initial.filter(elem => elem.toString().match(/\d/g) && elem.toString().match(/\D/g)))
    }
    
    const d = ()=> {
        setValue(initial.length % 2 !== 0 ? initial[(initial.length -1)/2] : initial[initial.length/2 - 1])
    }
    const r = ()=>{
        setValue(initial.filter((elem, index, arr) => arr.indexOf(elem) !== index).length )
    }
    return [value, {i, d ,r}]
}