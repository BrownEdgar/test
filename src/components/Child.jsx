import React from 'react'
import PropTypes from 'prop-types'

export default function Child({ arr }) {
	return (
		<div>
			<span>Child Component</span>

		</div>
	)
}

Child.propTypes = {
	obj: PropTypes.shape({
		a: PropTypes.number,
	})
} 

// [  [id: 1, "name": "Sebastian"]]