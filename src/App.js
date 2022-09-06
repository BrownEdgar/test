import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeNameAction } from './components/redux/features/name'
import {changeArrAction} from './components/redux/features/arr'
import { addPostAction, selectPosts } from './components/redux/features/posts'


export default function App() {
	

	const posts = useSelector(selectPosts)

	// const arr = useSelector(state => state.arr)
	 const dispatch = useDispatch()
	// const filterArr = () => {
	// 		const f = arr.filter(elem => elem.match(/^[A-Z]/g))
	// 	dispatch(changeArrAction(f))
	// }
	return (
		<div>
			{/* <h1>{name}</h1>
			<button onClick={() => dispatch(changeNameAction())}>change redux name</button>
			<pre>{JSON.stringify(arr, null, 1)}</pre>
			<button onClick={filterArr}>filter</button> */}
			{posts.map(elem => {
				return <pre key={elem.id}>
					{JSON.stringify(elem, null, 1)}
				</pre>
			})}
			<button onClick={() => dispatch(addPostAction())}>add post</button>


		</div>
	)
}




