
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



import React, { useState } from 'react'
import Modal  from './components/Modal'

import './App.css'


 function App() {
	const [openModal, setOpenModal]=useState(false)
	const[data, setData]=useState([
		{
			id: 1,
			description: "CSS"
		},
	
	  {
			id: 2,
			description: "JavaScript"
		},
	
	  {
			id: 3,
			description: "Node.js"
		},
	])




// const handleClick = (e, id) =>{
// 		e.preventDefault()
// 		const my=data.filter( elem => elem.id !== id)
// 		 setData(my)
		
// 	}
  return (
	 <div className="flex">

{data.map(elem=>{
        return <div className='flex-item' key={elem.id}>
		<p>{elem.description}</p>
		<button className='OpenModalBtn' onClick={()=> {
			setOpenModal(true);
		}}
		>
		Delete</button>
		</div>
		
		})}
	  {openModal && <Modal /> } 
</div>
 )
} 



export default App;


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
