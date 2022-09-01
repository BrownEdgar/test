import React, { useState } from 'react'

// export const CustomHook=({


//     min= -5,
//     initial= 6,
//     max= 12,
//     step= 1



// }) => {
//     const [value, setValue]=useState(initial)

//     const inc =()=>{
//         setValue(prevState=>(prevState + step > max ? max : prevState + step))
//     }

//     const dec =()=>{
//         setValue(prevState=>(prevState - step < min ? min : prevState - step))
//     }

//     const reset =()=>{
//         setValue(initial)
//     }

// return [value, {inc, dec, reset}]

// }



// Homework



export function CustomHook({
	initial
}) {
	const [value, setValue] = useState(initial)


	const rep = () => {
		let arr1 = value.reduce((acc, n) => (acc[n] = (acc[n] || 0) + 1, acc), {})
		console.log(arr1);
		setValue([...value, arr1])
	}


	return [value, { rep }]


}