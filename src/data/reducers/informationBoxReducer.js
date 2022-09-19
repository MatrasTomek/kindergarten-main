import { GET_INFORMATION_BOX } from "../actions";

const initialState = [];

export const infoBoxReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_INFORMATION_BOX:
			return (state = action.payload);
		default:
			return state;
	}
};
