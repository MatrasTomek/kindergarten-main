import { SET_COOKIE } from "../actions";

export const rodoBannerReducer = (state = true, action) => {
	switch (action.type) {
		case SET_COOKIE:
			return (state = action.payload);

		default:
			// console.warn(`Nie ma akcji typu ${action.type}`);
			return state;
	}
};
