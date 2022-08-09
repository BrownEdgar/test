import React from 'react'

export default function Component({ title, description }) {
	return (
		<div className='flex-item'>	
			<span>AXONVIP | 01 AUG 2019</span>
			<h3>{title}</h3>
			<p className='flex-text  flex-text_bold'>{description}</p>
			<button>Read more</button>
		</div>
	)
}
