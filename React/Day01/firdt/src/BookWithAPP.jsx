import "./App.css";
import { Book } from "./components/Book";

function App() {


	let bookData = {
		id: 1,
		bookTitle: "First Book",
		price: 200,
		quantity: 40
	}
	let book2 = {
		id: 2,
		bookTitle: "The sky",

		price: 500
	}
	return (
		<div className='app'>
			<Book book={bookData} />
			<Book book={book2} />
			{/* <Book bookTitle="The sky" price='400' /> */}

		</div>

	);
}

export default App;
/** JSX --> javascript xml */
