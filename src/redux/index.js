import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";

//  Reducers
import navers from "./Navers/reducer";
import loader from "./Loader/reducer";

// Sagas
import NaversSaga from "./Navers/saga";

const reducers = combineReducers({
	navers,
	loader,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(NaversSaga);

export default store;
