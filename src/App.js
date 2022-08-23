import React,{ useState, useEffect } from "react"
import Products from "./components/Products";
import axios from 'axios'
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Product from "./components/Product/Product";

import { Routes, Route } from 'react-router-dom'

import './App.css';
import { ROUTES } from "./components/ROUTES/Routes";

function App(props) {
	const [data, setData] = useState([])

	useEffect(() => {
		axios('https://fakestoreapi.com/products')
		.then(response => {
			console.log(response.data);
			setData(response.data)
		})
	}, [])
	
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path={ROUTES.home} element={<Home />}/>
				<Route path={ROUTES.products} element={<Products products={ data } />}/>
				<Route path={`${ROUTES.product}/:id`} element={<Product data={ data }/>} />
				<Route path="*" element={<h1> Error page</h1>} /> 
			</Routes>
		</div>
	);
}

export default App;

// 'https://fakestoreapi.com/products'