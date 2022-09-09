import axios from "axios";

const request = axios.create({
	baseURL: "http://localhost:8080",
	// baseURL: "https://trans-ua.herokuapp.com/",
	validateStatus: false,
});

export default request;
