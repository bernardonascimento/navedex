import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";

//  Reducers
// import imovel from "../Immobile/ImmobileReducer";
// import venda from "../Sale/SaleReducer";
// import relatorio from "../Report/ReportReducer";
// import oportunidade from "../Negotiation/NegotiationReducer";
// import empreendimento from "../Allotment/AllotmentReducer";
// import dashboard from "../Dashboard/DashboardReducer";
// import contato from "../Contact/ContactReducer";
// import pessoa from "pages/PersonConsultation/reducer";
// import usuario from "../User/UserReducer";
// import global from "../Global/GlobalReducer";

// Sagas
// import DashboardSaga from "../Dashboard/DashboardSaga";
// import AllotmentSaga from "../Allotment/AllotmentSaga";
// import ContactSaga from "../Contact/ContactSaga";
// import UserSaga from "../User/UserSaga";
// import ImmobileSaga from "../Immobile/ImmobileSaga";
// import SaleSaga from "../Sale/SaleSaga";
// import ReportSaga from "../Report/ReportSaga";
// import NegotiationSaga from "../Negotiation/NegotiationSaga";

const reducers = combineReducers({});

// const reducers = combineReducers({
// 	global,
// 	dashboard,
// 	empreendimento,
// 	imovel,
// 	loader,
// 	venda,
// 	contato,
// 	pessoa,
// 	oportunidade,
// 	usuario,
// 	relatorio,
// });

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));
// sagaMiddleware.run(DashboardSaga);
// sagaMiddleware.run(ContactSaga);
// sagaMiddleware.run(UserSaga);
// sagaMiddleware.run(AllotmentSaga);
// sagaMiddleware.run(ImmobileSaga);
// sagaMiddleware.run(SaleSaga);
// sagaMiddleware.run(ReportSaga);
// sagaMiddleware.run(NegotiationSaga);

export default store;
