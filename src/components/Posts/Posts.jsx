import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'

import "./Posts.scss"

export default function Posts({ data, handleDelete }) {
	const [searchparams, setSearchparams]	= useSearchParams()
	const handleSubmit = (e) => {
		e.preventDefault()
		setSearchparams({post: e.target[0].value})
	}
	const queryParams = searchparams.get("post") || "";
	console.log(queryParams)
	return (
		<div className='Posts'>
			<h1>Posts page</h1>
			<form onSubmit={handleSubmit}>
				<input type="search" placeholder='search' />
				<input type="submit" />
			</form>
			{data
				.filter(elem => elem.title.includes(queryParams))
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
