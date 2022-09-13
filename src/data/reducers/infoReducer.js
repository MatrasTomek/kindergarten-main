import { GET_ALL_INFORMATIONS } from "../actions";

const initialState = [];

export const infoReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_INFORMATIONS:
			return (state = action.payload);
		default:
			return state;
	}
};
