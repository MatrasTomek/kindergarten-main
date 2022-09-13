import request from "../../helpers/request";
import { addSpinner, removeSpinner } from "./index";

export const GET_ALL_INFORMATIONS = "GET_ALL_INFORMATIONS";

export const getAllInformations = () => async (dispatch) => {
	dispatch(addSpinner());
	const { data, status } = await request.get("info-main", {
		headers: { "Content-Type": "application/json" },
		credentials: "include",
		withCredentials: true,
	});
	if (status === 200) {
		dispatch(removeSpinner());

		dispatch({
			type: GET_ALL_INFORMATIONS,
			payload: data.data,
		});
	} else if (status === 404) {
		dispatch(removeSpinner());
		// dispatch(timeoutShowTask("Nie ma żadnych elemetów do wyświetlenia"));
	} else {
		dispatch(removeSpinner());
		// dispatch(timeoutShowTask(data.message || data.error));
	}
};
