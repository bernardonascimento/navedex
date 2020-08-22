import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import { ModalProvider } from "styled-react-modal";

import ToolBar from "../components/Toolbar";

import Home from "../pages/Home";
import Naver from "../pages/Naver";

export default (props) => {
	return (
		<ModalProvider>
			<ToolBar />

			<Switch>
				<Route path="/" exact component={Home} />

				<Route path="/home" exact component={Home} />

				<Route path="/naver/register" exact component={Naver} />
				{/* <Route path="/naver/register/:id" exact component={Naver} /> */}

				<Route path="*">
					<Redirect to="/" />
				</Route>
			</Switch>
		</ModalProvider>
	);
};
