import { combineReducers } from "redux";
import { infoReducer } from "./infoReducer";
import { menuReducer } from "./menuReducer";
import { newsReducer } from "./newsReducer";
import { spinnerReducer } from "./spinnerReducer";
import { successPicItemReducer } from "./successPicReducer";

export const rootReducer = combineReducers({
	informations: infoReducer,
	menu: menuReducer,
	news: newsReducer,
	picItem: successPicItemReducer,
	spinner: spinnerReducer,
});
