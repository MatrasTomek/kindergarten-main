import { OPEN_MENU, CLOSE_MENU } from "../actions";

const openMenu = false;

export const menuReducer = (state = openMenu, action) => {
	switch (action.type) {
		case OPEN_MENU:
			return (state = action.menuOpen);
		case CLOSE_MENU:
			return (state = action.menuOpen);

		default:
			// console.warn(`Nie ma akcji typu ${action.type}`);
			return state;
	}
};
