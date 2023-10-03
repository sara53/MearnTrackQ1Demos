import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "http://localhost:3005/books";
const initialState = {
	books: [],
	isLoading: false,
	error: null,
};

export const getBooks = createAsyncThunk(
	"book/getBooks",
	async (args, thunkAPI) => {
		const { rejectWithValue } = thunkAPI;
		try {
			const response = await axios.get(baseURL);
			return response.data;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const addNewBook = createAsyncThunk(
	"book/addNewBook",
	async (book, thunkAPI) => {
		const { rejectWithValue } = thunkAPI;
		try {
			const response = await axios.post(baseURL, book);
			return response.data;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);
const bookSlice = createSlice({
	name: "book",
	initialState,
	reducers: {},
	extraReducers: {
		[getBooks.pending]: (state, action) => {
			state.isLoading = true;
		},
		[getBooks.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.books = action.payload;
		},
		[getBooks.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
		// add
		[addNewBook.fulfilled]: (state, action) => {
			state.books.push(action.payload);
		},
	},
});

export const bookReducer = bookSlice.reducer;
export const bookActions = bookSlice.actions;
