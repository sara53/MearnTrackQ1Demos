import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	products: [],
};

export const getProducts = createAsyncThunk(
	"products/getProducts",
	async (args, thunkAPI) => {
		const { rejectWithValue } = thunkAPI;
		try {
			const response = await axios.get("http://localhost:3005/products");
			return response.data;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);
const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {},
	extraReducers: {
		[getProducts.pending]: (state, action) => {},
		[getProducts.fulfilled]: (state, action) => {
			state.products = action.payload;
		},
		[getProducts.error]: (state, action) => {},
	},
});

export const productReducer = productsSlice.reducer;
export const productActions = productsSlice.actions;
