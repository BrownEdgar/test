import React, { useState, useEffect } from 'react'
import axios from "axios"

import "./App.css"

export default function App() {
	const [limit, setLimit] = useState(null)
	const [data, setData] = useState([])


	const handleChange = (e) => {
		const { value } = e.target
		setLimit(value)
	}

	useEffect(() => {
		if (limit) {
			axios(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
				.then(response => setData(response.data))
		}
	}, [limit])

	return (
		<div>
			<form>
				<select name="limit" id="limit" onChange={handleChange}>
					<option value=""></option>
					<option value="5">5</option>
					<option value="10">10</option>
					<option value="15">15</option>
					<option value="30">30</option>
					<option value="50">50</option>
				</select>
			</form>
			{!!data.length
				? <pre>{JSON.stringify(data, null, 1)}</pre>
				: (
					<div>
						<h2>No data</h2>
					</div>
				)
			}
		</div>
	)
}
