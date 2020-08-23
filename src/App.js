import React from "react";

import { Provider } from "react-redux";
import { Router } from "react-router-dom";

import store from "./redux";
import Routes from "./routes";

import GlobalStyles from "./styles/GlobalStyles";

import { AuthProvider } from "./contexts/auth";

const createBrowserHistory = require("history").createBrowserHistory;
export const history = createBrowserHistory();

function App() {
	return (
		<>
			<GlobalStyles />

			<Provider store={store}>
				<AuthProvider history={history}>
					<Router history={history}>
						<Routes />
					</Router>
				</AuthProvider>
			</Provider>
		</>
	);
}

export default App;
