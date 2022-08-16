import React from 'react'

export default function MainForm({ handleSubmit, handleChange, isDisabled }) {
	return (
		<form onSubmit={handleSubmit}>
			<input type="text" id="username" onChange={handleChange} required />
			<button type='submit' disabled={isDisabled}>add name</button>
		</form>
	)
}
