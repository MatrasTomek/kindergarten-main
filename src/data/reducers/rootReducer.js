import { combineReducers } from "redux";
import { menuReducer } from "./menuReducer";
import { spinnerReducer } from "./spinnerReducer";

export const rootReducer = combineReducers({
	spinner: spinnerReducer,
	menu: menuReducer,
});
