import { combineReducers } from "redux";
import { spinnerReducer } from "./spinnerReducer";

export const rootReducer = combineReducers({
	spinner: spinnerReducer,
});
