import React, {useState, useEffect} from 'react'
import Component  from "./Component";

import './App.css'

function App() {
	const [data, setData] = useState([])
	

	useEffect(() => {
	fetch("https://jsonplaceholder.typicode.com/posts")
			.then((response) => response.json())
			.then((data) => setData(data))
	}, [])
		return (
			 <div className="flex">
				{data.map(elem => (
					<Component 
						key={elem.id}
						title={elem.title}
						description={elem.body}
						userId = {elem.userId}
					/>
				))}
			 </div>
	)
}

export default App
