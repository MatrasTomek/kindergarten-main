import { GET_ALL_NEWS } from "../actions";

const initialState = [];

export const newsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_NEWS:
			return (state = action.payload);
		default:
			return state;
	}
};
