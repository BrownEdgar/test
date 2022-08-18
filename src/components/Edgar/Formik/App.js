import React from 'react'
import { useFormik } from 'formik'

import "./App.css"

export default function App() {
	const formik = useFormik({
		initialValues: {
			name: "Edgar",
			email: "",
			lesson: "",
		},
		onSubmit: values => {

		},
		validate: (values) => {
			const errors = {}
			if (values.name.trim() === "") {
				errors.name = "Required"
			} else if (!values.name.match(/^[A-Z]/g)) {
				errors.name = "The first letter must by UpperCase"
			}
			if (values.email.trim() === "") {
				errors.email = "Required"
			}
			if (values.lesson.trim() === "") {
				errors.lesson = "Required"
			}
			return errors
		}
	})

	return (
		<div>
			<form onSubmit={formik.handleSubmit}>
				<input
					type="text"
					name="name"
					onChange={formik.handleChange}
					value={formik.values.name} />
				{formik.errors.name && <p className='errors'>{formik.errors.name}</p>}
				<input
					type="email"
					name="email"
					onChange={formik.handleChange}
					value={formik.values.email} />
				{formik.errors.email && <p className='errors'>{formik.errors.email}</p>}
				<input
					type="text"
					name="lesson"
					onChange={formik.handleChange}
					value={formik.values.lesson} />
				{formik.errors.lesson && <p className='errors'>{formik.errors.lesson}</p>}

				<input type="submit" value="send" />
			</form>
		</div>
	)
}
