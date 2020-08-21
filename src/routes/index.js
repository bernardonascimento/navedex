import React from "react";

// import AuthContext from "../contexts/auth";
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

export default (props) => {
	// const { signed } = useContext(AuthContext);
	const signed = true;

	return <>{signed ? <AppRoutes /> : <AuthRoutes />}</>;
};
