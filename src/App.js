import React, { Component } from 'react'

export default class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			count: 1,
			name: "React"
		}
	}

	shouldComponentUpdate(nextProps, nextState) { 
		return true;
	}

	handleClick = () =>  { 
		this.setState({ count: 2})
	}

	render() {
		const { count, name} = this.state
		return (
			<div>
				<h2>Count:{count}</h2>
				<h2>Name:{name}</h2>
				<button onClick={this.handleClick}>Change Count</button>
			</div>
		)
	}
}

///////////////////////////////////
// import React from 'react'

// export default function App() {
// 	const [count, setCount] = useState(1)

// 	return (
// 		<div>{count}</div>
// 	)
// }

