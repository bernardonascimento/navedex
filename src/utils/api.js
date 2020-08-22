import axios from "axios";

const baseURL = "https://navedex-api.herokuapp.com/v1/";

const API = axios.create({
	baseURL: baseURL,
	responseType: "json",
});

export { API };
