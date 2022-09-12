import { combineReducers } from "redux";
import { menuReducer } from "./menuReducer";
import { newsReducer } from "./newsReducer";
import { spinnerReducer } from "./spinnerReducer";
import { successPicItemReducer } from "./successPicReducer";

export const rootReducer = combineReducers({
	spinner: spinnerReducer,
	menu: menuReducer,
	news: newsReducer,
	picItem: successPicItemReducer,
});
