import React from 'react'
import { Link } from "react-router-dom";
import { ROUTES } from '../ROUTES/Routes';
import './Navbar.css'

export default function Navbar() {
	return (
		<header>
			<ul>
				<li>
					<Link to={ROUTES.home}>Home</Link>
				</li>
				<li>
					<Link to={ROUTES.products}>Products</Link>
				</li>
			</ul>
		</header>
	)
}
