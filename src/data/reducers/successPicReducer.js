import { SET_SUCCESS_PIC_ITEM, DELET_SUCCESS_PIC_ITEM } from "../actions";

const initialState = [];

export const successPicItemReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_SUCCESS_PIC_ITEM:
			return [...state, action.payload];
		case DELET_SUCCESS_PIC_ITEM:
			return (state = initialState);

		default:
			// console.warn(`Nie ma akcji typu ${action.type}`);
			return state;
	}
};
