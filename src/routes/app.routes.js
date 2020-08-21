import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import { ModalProvider } from "styled-react-modal";

import ToolBar from "components/Toolbar";
import Home from "pages/Home";

export default (props) => {
	return (
		<ModalProvider>
			<ToolBar />

			<Switch>
				<Route path="/" exact={true} component={Home} />

				<Route path="/home" exact={true} component={Home} />

				<Route path="*">
					<Redirect to="/" />
				</Route>
			</Switch>
		</ModalProvider>
	);
};
