import React from "react";

import { Switch, Route } from "react-router-dom";

import Login from "pages/Login";

export default (props) => {
	return (
		<Switch>
			<Route path="/login" exact={true} component={Login} />

			<Route path="/" exact={true} component={Login} />
		</Switch>
	);
};
