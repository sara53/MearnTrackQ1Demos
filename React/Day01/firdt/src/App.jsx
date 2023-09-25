import { Button, Card } from "react-bootstrap";
import "./App.css";
import { Books } from "./components/Books";
import { Navbar } from "./components/Navbar";
import { Content } from "./components/Content";

function App() {


	return (
		< >
			<Navbar />
			<Books />

			<Content bgClass='bg-light' />
			<Content bgClass='bg-dark' >
				<h3>Hello Frist Child from Content </h3>
				<button className="btn btn-outline-primary">Show More   </button>
			</Content>
			<Content bgClass='bg-success' >
				<div>
					<input type="text" className="form-control" />
				</div>

			</Content>

		</>

	);
}

export default App;
/** JSX --> javascript xml */
