import React, { useState } from 'react'
import MainForm from './MainForm'
import classNames from 'classnames'

import "./App.css"

export default function App() {
	// const [data, setData] = useState({
	// 	name: ""
	// })

	// const [isDisabled, setisDisabled] = useState(true)

	// const handleSubmit = (e) => {
	// 	e.preventDefault()
	// }

	// const handleChange = (e) => { 
	// 	const { value } = e.target;
	// 	if (value.trim() !== "" && value.length > 2) {
	// 		setisDisabled(false)
	// 	}else{
	// 		setisDisabled(true)
	// 	}
	// }

	const [isAgree, setisAgree] = useState(false)

	const handleChange = (e) => {
		console.log(e);
		setisAgree(e.target.checked)
	}

	return (
		<div>
			<h1 className={classNames(null, {
				green: isAgree
			})}>welcome</h1>
			{/* <MainForm 
				handleSubmit={handleSubmit} 
				handleChange={handleChange} 
				isDisabled={isDisabled}
			/> */}
			<form>
				<input type="checkbox" id="agree" onChange={handleChange} />
			</form>
		</div>
	)
}
