import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slices/counterSlice";
import { bookReducer } from "./slices/bookSlice";
export let myStore = configureStore({
	reducer: {
		x: counterReducer,
		bookList: bookReducer,
	},
});
