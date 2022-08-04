import { useState } from "react"

import './App.css';

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
