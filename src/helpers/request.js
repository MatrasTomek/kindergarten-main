import axios from "axios";

const request = axios.create({
	// baseURL: "http://localhost:8000",
	baseURL: "https://www.tslapp.ovh/",
	// baseURL: "https://kindergarten-back.herokuapp.com/",
	validateStatus: false,
});

export default request;
