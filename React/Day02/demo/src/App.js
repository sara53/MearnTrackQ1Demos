import logo from "./logo.svg";
import "./App.css";
import { Counter } from "./component/functionComponent/Counter";
import Register from "./component/Register";
import { useState } from "react";

function App() {
	let [formValues, setFormValues] = useState({
		username: "",
		age: "",
	});

	return (
		<>
			{/* <Counter title='Login component' price='400' /> */}

			{/* <Counter /> */}
			<h1 className='alert alert-info'>{formValues.username}</h1>
			<Register formValues={formValues} setFormValues={setFormValues} />
		</>
	);
}

export default App;
