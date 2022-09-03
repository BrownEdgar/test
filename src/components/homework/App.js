import React, { useState, useEffect, useMemo } from "react"
import axios from 'axios'

function App() {
	const [value, setValue] = useState([]);
	const [limit, setLimit] = useState(null)

	useEffect(() => {
		if(limit >=0){
			axios(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
			.then(response => setValue(response.data))}
	}, [limit])
    


const handleChange = (e) => {
	const { value } = e.target
	setLimit(value)
	console.log(1)
}
	

	return (
		<div>
            <form action="">
                <input type="number" onChange={handleChange}/>
            </form>
			<pre>{JSON.stringify(value,null,1)}</pre>
		</div>
	);
}

export default App;