import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import PropTypes from 'prop-types'

import "./Posts.scss"
import { useEffect } from 'react'
import Test from '../Test'

export default function Posts({ data, handleDelete, handleChangeTitleById }) {
	const [searchparams, setSearchparams]	= useSearchParams()
	const [fields, setFields]	= useState({
		id: " ",
		title: " "


	})
	
	const handleSubmit = (e) => {
		e.preventDefault()
		const { id }=e.target
		if (id==="search") {
			 setSearchparams({post: e.target[0].value})
	}

	if (id==="create") {
		
		const obj={
			id: e.target[0].value,
			title: e.target[1].value,
		}
 		setFields(
 			prevState=>obj)
		
 }
	}


		useEffect(()=>{
			if(fields.id){
			handleChangeTitleById(fields)
			}
		},[fields])






	const queryParams = searchparams.get("post") || "";
	
	return (
		<div className='Posts'>
			<h1>Posts page</h1>
			<div className="Posts-Flex">

			
			<form onSubmit={handleSubmit} id="search">
				<input type="search" placeholder='search' />
				<input type="submit" />
			</form>
			<form onSubmit={handleSubmit} id="create">
				<input type="text" placeholder='id' required/>
				<input type="text" placeholder='new title here' required/>
				<input type="submit" />
				<Test />
			</form>
			</div>
			{data
				//.filter(elem => elem.title.includes(queryParams))
				//.filter(elem => elem.id===fields.id)

				.map(elem => {
				return (
					<Link key={elem.id}  to={`/posts/${elem.id}`}>
						<div  className='Product'>
							<span className='Product-Number'>{elem.id}</span>
							<h2 className='Product-Title'>
								{elem.title.length < 20
									? elem.title
									: `${elem.title.slice(0, 20)}...`}
							</h2>
							<p className='Product-Body'>
								{elem.body}
							</p>
							<button className='Product-DeleteButton' onClick={(e) => handleDelete(e, elem.id)}>X</button>
						</div>
					</Link>
					
				)
			})}
		</div>
	)
}


Posts.propTypes={
	data:PropTypes.array,
	handleDelete:PropTypes.func.isRequired,
	handleChangeTitleById:PropTypes.func.isRequired
}