export const SET_COOKIE = "SET_COOKIE";

export const setCookie = () => (dispatch) => {
	const data = new Date();
	const days = 21;
	data.setTime(data.getTime() + days * 24 * 60 * 60 * 1000);
	document.cookie = `accessForPrzedszkoleMokrzyska; path=/; expires=${data}`;
	dispatch({
		type: SET_COOKIE,
		payload: false,
	});
};
export const checkCookie = () => (dispatch) => {
	if (document.cookie === "accessForPrzedszkoleMokrzyska") {
		dispatch({
			type: SET_COOKIE,
			payload: false,
		});
	} else {
		dispatch({
			type: SET_COOKIE,
			payload: true,
		});
	}
};

export const closeBanner = () => (dispatch) => {
	dispatch({
		type: SET_COOKIE,
		payload: false,
	});
};
