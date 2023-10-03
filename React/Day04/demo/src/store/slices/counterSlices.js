import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	count: 55,
};
let counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increase: (state, action) => {
			state.count += 1;
		},
		decrease: (state, action) => {
			state.count -= 1;
		},
	},
});

export const counterReducer = counterSlice.reducer;
export const counterActions = counterSlice.actions;
