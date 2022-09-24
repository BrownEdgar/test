

// import React, { useState, useMemo
	//, useEffect, 
// } from "react";
// import { Routes, Route, } from 'react-router-dom';
// import Navbar from "./components/Navbar/Navbar";
// import Home from "./components/Home/Home";
// import axios from 'axios'
// import Posts from "./components/Posts/Posts";
//import Post from "./components/Post/Post";


//import './App.scss';
// export const MyContext=React.createContext()

// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { chengeName } from './components/redux/features/testSlice'





// export default function App() {

// 	const state = useSelector(state => state)
// 	const dispatch = useDispatch()
	

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
		
// 		// .then(response =>response.json()) 
// 			// .then(json=>console.log(json))
// 			}
				 
// 			const mem=useMemo(()=> getPosts(),[])

// 	function refreshPage() {
// 				window.location.reload(false);
// 			  }

// 			  const mem1=useMemo(()=> refreshPage(),[])  

// 	return (
// 		<div className="App">
// 			{/* <Posts posts={data}/> */}
// 			<Navbar />
			 
// 			<Routes>
// 				<Route path="/" element={<Home />} />
// 				<Route path="/posts">
// 					{/* //<pre>{JSON.stringify(data,null,1)}</pre> */}
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



// import React, { useState } from 'react'
// import Modal  from './components/Modal'

// import './App.css'


//  function App() {
// 	const [openModal, setOpenModal]=useState(false)
// 	const[data, setData]=useState([
// 		{
// 			id: 1,
// 			description: "CSS"
// 		},
	
// 	  {
// 			id: 2,
// 			description: "JavaScript"
// 		},
	
// 	  {
// 			id: 3,
// 			description: "Node.js"
// 		},
// 	])




// const handleClick = (e, id) =>{
// 		e.preventDefault()
// 		const my=data.filter( elem => elem.id !== id)
// 		 setData(my)
		
// 	}
//   return (
// 	 <div className="flex">

// {data.map(elem=>{
//         return <div className='flex-item' key={elem.id}>
// 		<p>{elem.description}</p>
// 		<button className='OpenModalBtn' onClick={()=> {
// 			setOpenModal(true);
// 		}}
// 		>
// 		Delete</button>
// 		</div>
		
// 		})}
// 	  {openModal && <Modal /> } 
// </div>
//  )
// } 



// export default App;


// const handleClick = (e, id) =>{
// 	e.preventDefault()
// 	const my=data.filter( elem => elem.id !== id)
// 	 setData(my)
	
// }
// return (
//  <div className="flex">

// {data.map(elem=>{
// 	return <div className='flex-item' key={elem.id}>
// 	<p>{elem.description}</p>
// 	<button onClick={(e)=>handleClick(e, elem.id)}>Delete</button>
// 	</div>
// 	})}
  
// </div>
// )
// } 



// export default App;


// 	return (
// 		<div>
// 					<p>{JSON.stringify(state,null,1)}</p>
// 			<button onClick={() => dispatch(chengeName())}>change Name</button>
// 		</div>
// 	)
// }

import React, {useState} from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as yup from 'yup'

export default function App() {
	const [state, setState]=useState({});
	const API_KEY=process.env.REACT_APP_API_KEY


	const initialValues={
		email: "marjana.sarg@mail.ru",
		password: "",
	}

const loginHandler=(userData)=>{
	const data={
		...userData,
		returnSecureToken: true,
	}
	fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, 
	{
		method: "POST",
		body:JSON.stringify(data)
	})
	.then(response=>console.log(response))
	.catch(err=>console.log(err))
	}

const registerHandler=(userData)=>{
const data={
	...userData,
	returnSecureToken:true,
}
fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, {
	method: "POST",
	body:JSON.stringify(data)
})
.then(response=>console.log(response))
.catch(err=>console.log(err))
}
const validationSchema=yup.object({
	email:yup.string().email("Must be Email").required("Required"),
	password :yup.string().matches(/^[A-Z]/g).required("Required")
})
const onSubmit=(values)=>{
registerHandler(values)
}


	return (
	<div className='container'>
		<Formik
		initialValues={initialValues}
		validationSchema={validationSchema}
		onSubmit={onSubmit}
		>
			{formik =>{
				return(
					<Form>
						<div className="form-group">
							<label htmlFor="email">Email</label>
							<Field type="email" name='email' id="email" />
							<ErrorMessage>
								{(errMsg)=>(
									<div>
										<p className='error'>{errMsg}</p>
									</div>
								)}
							</ErrorMessage>
							</div>


							<div className="form-group">
							<label htmlFor="password">Password</label>
							<Field type="password" name='password' id="password" />
							<ErrorMessage>
								{(errMsg)=>(
									<div>
										<p className='error'>{errMsg}</p>
									</div>
								)}
							</ErrorMessage>
							</div>
									
									<button
									type='button'
									id="login"
									onClick={()=>{
										
										loginHandler(formik.values)
									}}
									disabled={!formik.isValid}
									>
										login
									</button>


									<button
									type='submit'
									id="Register"
									disabled={!formik.isValid}
									>
										Register
									</button>
					</Form>
				)
			}

			}
			</Formik>
	</div>
  )
}
