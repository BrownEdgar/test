import React, {useState, useEffect} from 'react'
import Component  from "./Component";

import './App.css'

function App() {
	const [data, setData] = useState([])
	const [title, setTitle] = useState("")

	useEffect(() => {
	fetch("https://jsonplaceholder.typicode.com/posts")
			.then((response) => response.json())
			.then((data) => setData(data))
	}, [])
	


	useEffect(() => {
		window.addEventListener("resize", () => {
			console.log("ok");
		})
			return () => {
				window.removeEventListener("resize", () => {
					console.log("merav");
				})
			}
	})

	return (
		<div>
			<h1>{title}</h1>
			<button>change title</button>
			 <div className="flex">
				{data.map(elem => (
					<Component 
						key={elem.id}
						title={elem.title}
						description={elem.body}
					/>
				))}
			 </div>
		</div>
	)
}

export default App
