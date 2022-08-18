import {useForm} from "react-hook-form"
import "./App.css"

function App() {const { register, handleSubmit, reset, formState:{errors} } = useForm({mode:"onBlur"});

const onSubmit = (data) => {
	 console.log(JSON.stringify(data));
	 reset();
};
	  
return (
	<div className="App">
	<form onSubmit={handleSubmit(onSubmit)}>
		<div>
		<label htmlFor="firstName">First Name</label>
		<input {...register("firstName" , {required: true})} placeholder="Name" />
		<div>{errors?.firstName && <p>Not First Name!</p>}</div>
		</div>
	  
		<div>
		<label htmlFor="lastName">Last Name</label>
		<input {...register("lastName", {required: true})} placeholder="lastName" />
		<div>{errors?.lastName && <p>Not Last Name!</p>}</div>
		</div>
	  
		<div>
		<label htmlFor="email">Email</label>
		<input
			{...register("email" , {required: true})}
			placeholder="example@gmail.com"
			type="email"
		/>
		<div>{errors?.email && <p>Not Email!</p>}</div>
		</div>
		<input type="submit" />
	</form>
	</div>
);
}

	
export default App
