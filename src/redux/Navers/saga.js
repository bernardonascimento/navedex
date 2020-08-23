import { API } from "../../utils/api";
import { call, put, takeEvery } from "redux-saga/effects";

import {
	GETNAVERSSAGA,
	GETNAVERS,
	POSTNAVERSSAGA,
	POSTNAVERS,
	GETNAVERBYIDSAGA,
	GETNAVERBYID,
	PUTNAVERSAGA,
	PUTNAVER,
	DELETENAVERSAGA,
	DELETENAVER,
} from "./type";

import { showLoading, hideLoading } from "../Loader/action";
import { formatDateToLocaleString } from "../../utils/global";

const endpoint = "navers";

function* getNavers() {
	try {
		yield put(showLoading());
		const response = yield call(API.get, endpoint);

		let payload = response.data;
		yield put({ type: GETNAVERS, payload });
		yield put(hideLoading());
	} catch (error) {
		console.log(error);
	}
}

function* getNaverById({ params }) {
	const { id, loading } = params;
	try {
		if (loading) yield put(showLoading());

		const response = yield call(API.get, `${endpoint}/${id}`);

		let payload = response.data;
		yield put({ type: GETNAVERBYID, payload });

		if (loading) yield put(hideLoading());
	} catch (error) {
		console.log(error);
	}
}

function* postNavers({ data }) {
	try {
		let body = {
			...data,
			admission_date: formatDateToLocaleString(data.admission_date),
			birthdate: formatDateToLocaleString(data.admission_date),
		};

		const response = yield call(API.post, endpoint, body);

		let payload = response.data;
		yield put({ type: POSTNAVERS, payload });
	} catch (error) {
		console.log(error);
	}
}

function* putNavers({ data }) {
	try {
		let { id } = data;
		delete data["id"];
		delete data["user_id"];

		let body = {
			...data,
			admission_date: formatDateToLocaleString(data.admission_date),
			birthdate: formatDateToLocaleString(data.admission_date),
		};

		const response = yield call(API.put, `${endpoint}/${id}`, body);

		let payload = response.data;
		yield put({ type: PUTNAVER, payload });
	} catch (error) {
		console.log(error);
	}
}

function* deleteNavers({ id }) {
	try {
		const response = yield call(API.delete, `${endpoint}/${id}`);

		let payload = response.data;

		if (payload.deleted) yield put({ type: DELETENAVER, payload: { id } });
	} catch (error) {
		console.log(error);
	}
}

export default function* UserSaga() {
	yield takeEvery(GETNAVERSSAGA, getNavers);
	yield takeEvery(POSTNAVERSSAGA, postNavers);
	yield takeEvery(GETNAVERBYIDSAGA, getNaverById);
	yield takeEvery(PUTNAVERSAGA, putNavers);
	yield takeEvery(DELETENAVERSAGA, deleteNavers);
}
