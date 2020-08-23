import React, { createContext, useState, useEffect } from "react";

import { API } from "../utils/api";

const AuthContext = createContext({});

export const AuthProvider = ({ children, history }) => {
	const [signed, setSigned] = useState(false);

	useEffect(() => {
		const storagedToken = localStorage.getItem("@Navers:token");
		setSigned(storagedToken ? true : false);
	}, []);

	const logIn = async (body) => {
		const resp = await API.post(`users/login`, body);
		const { data } = resp;

		if (resp.status === 401) return data.message;

		setSigned(resp.status === 200 ? true : false);
		localStorage.setItem("@Navers:token", data.token);
		return resp;
	};

	const logOut = () => {
		localStorage.removeItem("@Navers:token");
		history.push("/");
		setSigned(false);
	};

	return (
		<AuthContext.Provider value={{ signed, logIn, logOut }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
