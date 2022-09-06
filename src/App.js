import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CHANGE_NAME, GET_ARR_ELEMENTS } from './components/redux/store'


export default function App() {

	const name = useSelector(state => state.name)
	const arr = useSelector(state => state.arr)
	const dispatch = useDispatch()
	const filterArr = () => {
			const f = arr.filter(elem => elem.match(/^[A-Z]/g))
			dispatch({ type: GET_ARR_ELEMENTS,payload:{ arr:f}})
	}
	return (
		<div>
			<h1>{name}</h1>
			<button onClick={() => dispatch({
				type: CHANGE_NAME,
				payload: { name: "JAVASCRIPT" }
			})}>change redux name</button>
			<pre>{JSON.stringify(arr, null, 1)}</pre>
			<button onClick={filterArr}>filter</button>

		</div>
	)
}




