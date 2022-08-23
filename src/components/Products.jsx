import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Products({ products }) {
	return (
		<div>
			{products.map(elem => {
				return (
					<Link to={`/product/${elem.id}`}>
						<div className="box" key={elem.id}>
							<h2>{elem.id}</h2>
							<h4>Category: {elem.category || "categ"}</h4>
						</div>
					</Link>
				)
			})}
		</div>
	)
}


Products.deafaultProps = {
	products: []
}


Products.propTypes = {
	products: PropTypes.arrayOf(PropTypes.shape({
		category: PropTypes.string,
		description: PropTypes.string,
		image: PropTypes.string,
		id: PropTypes.number,
		title: PropTypes.string,
		price: PropTypes.number,
		rating: PropTypes.exact({
			count: PropTypes.number,
			rate: PropTypes.number,
		})
	}))
}
