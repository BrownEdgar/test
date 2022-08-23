import React, {useState, useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom'


function Product({ data }) {
	const [value, setValue] = useState({})
	const { id } = useParams()
	const navigate = useNavigate()

	const getProductById = (productId) => {
		const f = data.filter(elem => elem.id === +productId)

		if (!!f.length) {
			setValue(...f)
		}
	}
	useEffect(() => {
		getProductById(id)
	}, [id])

	const goToHomePage = (e) => {
		navigate("/products")
	}
	return (
		<div>
			<h1>Product N : {id}</h1>
			<button onClick={goToHomePage}>go home page</button>
			<pre>{JSON.stringify(value,null,1)}</pre>
			<img src={value.image} alt="" />
		</div>
	)
}
export default Product