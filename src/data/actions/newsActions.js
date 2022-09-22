import request from "../../helpers/request";
import { addSpinner, removeSpinner } from "./index";

export const GET_ALL_NEWS = "GET_ALL_NEWS";

export const getAllNews = () => async (dispatch) => {
	dispatch(addSpinner());
	const { data, status } = await request.get("news", {
		headers: { "Content-Type": "application/json" },
		credentials: "include",
		withCredentials: true,
	});
	if (status === 200) {
		dispatch(removeSpinner());
		data.forEach((item) => (item.photo = `https://www.tslapp.ovh/news/photo/${item._id}`));
		dispatch({
			type: GET_ALL_NEWS,
			payload: data,
		});
	} else if (status === 404) {
		dispatch(removeSpinner());
		// dispatch(timeoutShowTask("Nie ma żadnych elemetów do wyświetlenia"));
	} else {
		dispatch(removeSpinner());
		// dispatch(timeoutShowTask(data.message || data.error));
	}
};
