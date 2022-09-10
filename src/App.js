

//import React, { useState, useMemo
	//, useEffect, 
//} from "react";
//import { Routes, Route, } from 'react-router-dom';
//import Navbar from "./components/Navbar/Navbar";
//import Home from "./components/Home/Home";
//import axios from 'axios'
//import Posts from "./components/Posts/Posts";
//import Post from "./components/Post/Post";


//import './App.scss';
// export const MyContext=React.createContext()



// function App() {
// 	const [data, setData] = useState([])
// 	const [value, setValue]=useState(101)

// 	useEffect(() => {
// 		axios("https://jsonplaceholder.typicode.com/posts?_limit=5")
// 			.then(response => setData(response.data))

// 		return () => {
// 			console.log("the end");
// 		}
// 	}, [])


// 	const handleDelete = (e, id) => {
// 		e.preventDefault()
// 		let f = data.filter(elem => elem.id !== id)
// 		setData(f)
// 	}

// const handleChangeTitleById=({id, title})=>{
	
// 	const newData=data.map(elem=>{
// 		if(elem.id===+id){
// 			elem.title=title
// 			return elem
// 		}
// 		return elem
// 	})
// 	setData(newData)
// }




// 	return (
// 		<div className="App">
// 			<Navbar />
// 			 <MyContext.Provider value={{
// 				secretKey: value,
// 				secretKeyCaanger: setValue
// 			}}>
// 			<Routes>
// 				<Route path="/" element={<Home />} />
// 				<Route path="/posts">
// 					<Route index element={
// 					<Posts
// 					 data={data} 
// 					 handleDelete={handleDelete} 
// 					 handleChangeTitleById={handleChangeTitleById}/>} />
					 
// 						<Route path=":id" element={ <Post />} />
// 				</Route>
// 			</Routes>
// 			 </MyContext.Provider> 
// 		</div>
// 	);
// }

// export default App;





//export const MyContext=React.createContext()



// function App() {
// 	const [data, setData] = useState([])
	

// 	const getPosts=()=>{
// 		axios("https://jsonplaceholder.typicode.com/posts")
// 			 .then(response =>{
// 				console.log(response.data);
// 				setData(response.data)})
		
		
// 			}
				 
// 			const mem=useMemo(()=> getPosts(),[data.length])

	

// 	return (
// 		<div className="App">
			
// 			<Navbar />
			 
// 			<Routes>
// 				<Route path="/" element={<Home />} />
// 				<Route path="/posts">
					
// 					<Route index element={
// 					<Posts
// 					 data={data} 
					
// 					 />} />
					 
						
// 				</Route>
// 			</Routes>
			 
// 		</div>
// 	);
// }

// export default App;



// import React from 'react'
// import {useSelector, useDispatch} from 'react-redux'
// import { CHANGE_NAME, GET_ARR_ELEMENTS } from "./components/redux/store";

// export default function App() {
// 	const name=useSelector(state=>state.name)
// 	const arr=useSelector(state=>state.arr)
// 	const dispatch=useDispatch()
// 	const filterArr=()=>{
// 		const f=arr.filter(elem=>elem.match(/^[A-Z]/g))
// 		dispatch({type:GET_ARR_ELEMENTS, payload: {arr:f}})
// 	}


//   return (
// 	<div>
// 		<h1>{name}</h1>
// 		<button onClick={()=>dispatch ({type:CHANGE_NAME, payload: {name:"JavaScript"}})}>change react name</button>
// 		<pre>{JSON.stringify(arr, null, 1)}</pre>
// 		<button onClick={filterArr}>filter</button>
// 	</div>
//   )
// }



import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeNameAction } from './components/redux/features/name'
import {changeArrAction} from './components/redux/features/arr'
import { addPostAction, asyncloadSerials, selectPosts } from './components/redux/features/posts'


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
			<button onClick={() => dispatch(asyncloadSerials())}>add post</button>


		</div>
	)
}





