import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slices/counterSlices";
import { productReducer } from "./slices/productsSlice";

export const myStore = configureStore({
	reducer: {
		counter: counterReducer,
		products: productReducer,
	},
});
