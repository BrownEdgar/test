import React, { useState } from 'react'
import Component from './Component'
import './App.css'


function App() {
	const [data, setData] = useState([
		{
			id: 1,
			name: 'John Doe',
			date: 'March 20, 2020',
			title: "Make A Drink And We'll Tell You Where You'll Meet Your Soulmate"
		},
		{
			id: 2,
			name: 'Sarah Doe',
			date: 'March 19, 2020',
			title: "Long-Lasting Fashion Items That Are Worth The Investment"
		},
		{
			id: 3,
			name: 'Sarah Doe',
			date: 'March 11, 2020',
			title: "20 Creative Pasta Recipes You'll Probably Want To Whip Up ASAP"
		},
		{
			id: 4,
			name: 'John Doe',
			date: 'January 18, 2020',
			title: "I Went To Seattle With No Clothes The Empty Suitcase Show"
		},

	])
	return (
		<div>
			<div className="block">
				{data.map(elem => (
					<Component
						key={elem.id}
						name={elem.name}
						date={elem.date}
						title={elem.title}
					/>
				))}

			</div>
		</div>
	)

}

export default App