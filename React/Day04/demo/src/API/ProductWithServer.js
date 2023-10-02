import axios from "axios";

const baseUrl = "http://localhost:3005/products";

const getAllProducts = () => axios.get(baseUrl);
const getProductById = (productId) => axios.get(`${baseUrl}/${productId}`); // promise
const addNewProduct = (product) => axios.post(baseUrl, product);
const editPProduct = (productId, product) =>
	axios.put(`${baseUrl}/${productId}`, product);

const deleteProduct = (productId) => axios.delete(`${baseUrl}/${productId}`);

export {
	getAllProducts,
	getProductById,
	addNewProduct,
	editPProduct,
	deleteProduct,
};
