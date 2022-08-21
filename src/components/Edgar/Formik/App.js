import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import "./App.css"

const validationSchema = yup.object({
	name: yup.string().required("This field is Required"),
	email: yup.string().email("Plase set a valid Email").required("This field is Required"),
	lesson: yup.string().oneOf(["JS", "React.js", "Node.js"]),
	age: yup.number().min(18).max(63,  "max 63").required("This field is Required"),
})


export default function App() {
	const initialValues ={
		name: "Edgar",
		email: "",
		lesson: "",
		age: 0
	}
	const onSubmit = values => {
		console.log("form data:", values)
	}
	return (
		<Formik 
			onSubmit={onSubmit}
			initialValues={initialValues}
			validationSchema={validationSchema}
			validateOnChange={false}
			validateOnBlur={true}
			>
			<Form>
				<Field type="text" name='name' id="name" />
				<ErrorMessage name="name" component="p" />
				<Field type="email" name='email' id="email" />
				<ErrorMessage name="email" component="p" />
				<Field type="text" name='lesson' id="lesson" />
				<ErrorMessage name="lesson" component="p" />
				<Field type="number" name='age' id="age" />
				<ErrorMessage name="age" component="p" />
				<input type="submit" value="send" />
			</Form>
		</Formik>
	)
}
