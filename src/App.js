import React,{ useState } from "react"

import '/.App';

function App() {
	const [value, setvalue] = useState(1)

	return (
		<div className="App">
			<h1>{value}</h1>
			<button>task 1</button>
		</div>
	);
}

export default App;
