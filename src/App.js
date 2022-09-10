import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { chengeName } from './components/redux/features/testSlice'




export default function App() {

	const state = useSelector(state => state)
	const dispatch = useDispatch()
	

	return (
		<div>
					<p>{JSON.stringify(state,null,1)}</p>
			<button onClick={() => dispatch(chengeName())}>change Name</button>
		</div>
	)
}
