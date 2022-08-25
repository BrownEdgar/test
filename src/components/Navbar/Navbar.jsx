import React from 'react'
import { Link } from 'react-router-dom'

import "./Navbar.scss"

export default function Navbar() {
	return (
		<header>
			<ul className='Menu'>
				<li className='Menu-Item'>
					<Link 
						className='Menu-Link Menu-Link_dark' 
						to="/">Home</Link>
				</li>
				<li className='Menu-Item'>
					<Link 
						className='Menu-Link' 
						to="/posts">Our Posts</Link>
				</li>
			</ul>
		</header>
	)
}
