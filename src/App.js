import React, { useState, useEffect } from "react"
import { Routes, Route, } from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import axios from 'axios'
import Posts from "./components/Posts/Posts";
import Post from "./components/Post/Post";

import './App.scss';


function App() {
	const [data, setData] = useState([])

	useEffect(() => {
		axios("https://jsonplaceholder.typicode.com/posts?_limit=5")
			.then(response => setData(response.data))

		return () => {
			console.log("the end");
		}
	}, [])


	const handleDelete = (e, id) => {
		e.preventDefault()
		let f = data.filter(elem => elem.id !== id)
		setData(f)
	}

	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/posts">
					<Route index element={<Posts data={data} handleDelete={handleDelete} />} />
						<Route path=":id" element={ <Post />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
