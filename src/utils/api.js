import axios from "axios";
// import { history } from "../App";

const baseURL = "https://navedex-api.herokuapp.com/v1/";

const API = axios.create({
	baseURL: baseURL,
	responseType: "json",
});

API.interceptors.request.use((config) => {
	config.params = config.params || {};

	if (config.url !== "users/login")
		config.headers = {
			Authorization: `Bearer ${localStorage.getItem("@Navers:token")}`,
		};

	return config;
});

API.interceptors.response.use(
	(response) => {
		//if (response.data && response.data.token)
		//localStorage.setItem("@YouNectImob:token", response.data.token);

		return response;
	},
	(error) => {
		if (error.response.status === 401) {
			// localStorage.removeItem("@Navers:token");
			// history.push("/");
			// window.location.reload(true);
		}

		return error.response;
	}
);

export { API };
