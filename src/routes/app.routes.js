import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";

// import ToolBar from "../components/Toolbar";
import Home from "pages/Home";

export default (props) => {
	return (
		<>
			{/* <ToolBar /> */}

			<Switch>
				<Route path="/" exact={true} component={Home} />

				<Route path="/home" exact={true} component={Home} />

				<Route path="*">
					<Redirect to="/" />
				</Route>
			</Switch>
		</>
	);
};
