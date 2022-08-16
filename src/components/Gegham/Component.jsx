import React from 'react'

export default 

function Component({userId, title, description }) {
	return (
		<div className='flex-item'>	
			<p className='flex-text  flex-text_bold'>{description}</p>
			<div className='flex-rl'>
				<p>{title.slice(1,10).toUpperCase()}</p> 
				<p>{new Date().toUTCString()} {Math.round(Math.random(userId+1)*100)} - min</p>
			</div>
		</div>
	)
}
