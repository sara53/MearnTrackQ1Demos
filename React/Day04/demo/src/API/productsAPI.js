import { products } from "../models/productsList";

let getAllProducts = () => {
	return products;
};

let getProductById = (productId) => {
	return products.find((product) => product.id == productId);
};

let addNewProduct = (product) => {
	products.push(product);
};

export { getAllProducts, getProductById, addNewProduct };
