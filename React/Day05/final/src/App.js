import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/02-Counter With  tool kit";
import MyNav from "./components/MyNav";
import { Routes, Route } from "react-router-dom";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import BookForm from "./components/BookForm";

function App() {
	return (
		<>
			<MyNav />
			<Routes>
				<Route path='/' element={<Counter />} />
				<Route path='books' element={<BookList />} />
				<Route path='books/:id' element={<BookDetails />} />
				<Route path='books/:id/edit' element={<BookForm />} />
			</Routes>
		</>
	);
}

export default App;
