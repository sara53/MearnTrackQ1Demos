import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { MyNav, Home, NotFound, Counter, Users } from "./components";
import { Products, ProductDetails, ProductForm } from "./components/Products";
import { CounterProvider } from "./context/CounterProvider";

function App() {
	return (
		<>
			<MyNav />

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='counter' element={<Counter />} />
				<Route path='users' element={<Users />} />
				<Route path='products' element={<Products />} />
				<Route path='products/:id' element={<ProductDetails />} />
				<Route path='products/:id/edit' element={<ProductForm />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;
