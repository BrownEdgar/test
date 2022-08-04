import { useState } from 'react'
import s from "./LanguagesList.module.css"

function LanguagesList({list}) {
		const [value, setvalue] = useState({
			url:'https://images.unsplash.com/photo-1656444699089-bab3ba14aefc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80'
		})

		const style = {
			"width": "300px", 
			"height": "300px", 
			"backgroundImage": `url(${value.url})`
		} 
	return (
		<div style={style}>
			<h2 className={s.box}>Result -</h2>
		</div>
	)
}

export default LanguagesList;