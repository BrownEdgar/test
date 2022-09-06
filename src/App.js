
import React, { useState, useMemo
	//, useEffect, 
} from "react";
import { Routes, Route, } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import axios from 'axios'
import Posts from "./components/Posts/Posts";
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



function App() {
	const [data, setData] = useState([])
	

	const getPosts=()=>{
		axios("https://jsonplaceholder.typicode.com/posts")
			 .then(response =>{
				console.log(response.data);
				setData(response.data)})
		
		// .then(response =>response.json()) 
			// .then(json=>console.log(json))
			}
				 
			const mem=useMemo(()=> getPosts(),[data.length])

	// function refreshPage() {
	// 			window.location.reload(false);
	// 		  }

	// 		  const mem1=useMemo(()=> refreshPage(),[])  

	return (
		<div className="App">
			{/* <Posts posts={data}/> */}
			<Navbar />
			 
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/posts">
					{/* //<pre>{JSON.stringify(data,null,1)}</pre> */}
					<Route index element={
					<Posts
					 data={data} 
					
					 />} />
					 
						
				</Route>
			</Routes>
			 
		</div>
	);
}

export default App;





