import React,{ useState } from "react"
import Child from "./components/Child";

import './App.css';

function App() {
	const [value, setvalue] = useState(1)

	return (
		<div className="App">
			<Child arr={[1,2,3,4,"5"]}/>
		</div>
	);
}

export default App;
