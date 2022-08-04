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


// 1․ ամնեշատ վարձատրվող լեզուն
// 2․ vacancy ունեցող լեզուների ցանկը 
// 3․ ստեղծել կոճակ որը կավելացնի նոր լեզու ցանկում
// 4․ Ջնջել կոնկրետ "id"-ով Էլեմենտը 





