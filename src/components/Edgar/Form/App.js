import React, { useState, useEffect, useRef } from 'react'
import axios from "axios"

import "./App.css"


export default function App() {
	const [data, setData] = useState({
		dataLimit: [],
		dataId: {},
		dataTitle: []
	})
	const [limit, setLimit] = useState(null)
	const [postId, setPostId] = useState(null)
	const idInput = useRef(null)

	const handleChange = (e) => {
		const { value } = e.target
		setLimit(value)
	}

	useEffect(() => {
		if (limit) {
			axios(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
				.then(response => setData({ ...data, dataLimit: response.data }))
		}
	}, [limit])

	const handleSubmit2 = (e) => {
		e.preventDefault()
		setPostId(idInput?.current.value)
	}
	const handleSubmit3 = (e) => {
		e.preventDefault()
		const { value } =  e.target.title
		console.log(value);

		if (data.dataLimit.length) {
			const f = data.dataLimit.filter(elem => {
				return elem.title.includes(value)
			})
			setData({...data, dataTitle: f})
		}
		return 
	}

	useEffect(() => {
		if (postId) {
			axios(`https://jsonplaceholder.typicode.com/posts/${postId}`)
				.then(response => setData({ ...data, dataId: response.data }))
		}

	}, [postId])

	return (
		<div className="container">
			<div className="one">
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
					{!!data.dataLimit.length
						? <pre>{JSON.stringify(data.dataLimit, null, 1)}</pre>
						: (
							<div>
								<h2>No data</h2>
							</div>
						)
					}
				</div>
			</div>
			<div className="two">
				<form onSubmit={handleSubmit2}>
					<input
						type="text"
						pattern='[0-9]{1,3}'
						ref={idInput} />
					<input type="submit" value="getById" />
					{!!Object.keys(data.dataId).length
						? <pre>{JSON.stringify(data.dataId, null, 1)}</pre>
						: (
							<div>
								<h2>No data</h2>
							</div>
						)
					}
				</form>
			</div>
			<div className="three">
				<form onSubmit={handleSubmit3}>
						<input type="search" name="title" id="title" />
						<button type='submit'>Sort</button>
				</form>
				{!!data.dataTitle.length
					? <pre>{JSON.stringify(data.dataTitle, null, 1)}</pre>
					: (
						<div>
							<h2>No data</h2>
						</div>
					)
				}
			</div>
		</div>
	)
}
