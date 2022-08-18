import React, { useState, useId,useEffect } from 'react'
import data from "./data/data.json"
import axios from "axios"

import "./App.css"

export default function App() {
	const [users, setUsers] = useState(data.users)
	const [activeId, setactiveId] = useState(1)
	const id = useId()

	useEffect(() => {
		axios.get('https://fakestoreapi.com/products')
			.then(response => setUsers(response.data))

	}, [])



	const handleClick = (id) => {

		setactiveId(id)
	}
	const addNewUsers = () => {
		const newUser = { id, name: "Karlos" }
		setUsers([...users, newUser])
	}
	return (
		<div>
			{/* <h2 className="box">{activeId}</h2>
			{users.map(elem => {
				return <div className={`box ${elem.id === activeId ? "active" : ""}`} key={elem.id}>
					<p>{elem.id} - <strong>{elem.name}</strong></p>
					<button onClick={() => handleClick(elem.id)}>X</button>
				</div>
			})}

			<button className='add' onClick={addNewUsers}>Add new Users</button> */}
			<pre> {JSON.stringify(users, null, 1)}</pre>
		</div>
	)
}
