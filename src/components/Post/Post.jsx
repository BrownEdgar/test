import React from 'react'
import { useParams, useNavigate, Routes,Route, 
	Link } from "react-router-dom";

export default function Post() {
	const { id } = useParams()
	const navigate = useNavigate()
	return (
		<div>
			<h1>POst N {id}</h1>
			<button onClick={() => navigate(-1)}>back</button>
			<Link to="/posts">Back</Link>
		</div>
	)
}
