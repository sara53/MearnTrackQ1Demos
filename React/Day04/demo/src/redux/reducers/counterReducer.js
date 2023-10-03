export const counterReducer = (state = { count: 0 }, action) => {
	if (action.type == "INCREASE") return { count: state.count + 1 };
	if (action.type == "DECREASE") return { count: state.count - 1 };
	return state;
};
