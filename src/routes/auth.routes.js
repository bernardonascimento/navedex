import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import Login from "../pages/Login";

export default (props) => {
	return (
		<Switch>
			<Route path="/login" exact component={Login} />

			<Route path="/" exact component={Login} />

			<Route path="*">
				<Redirect to="/" />
			</Route>
		</Switch>
	);
};
