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
} from "./type";

const endpoint = "navers";

function* getNavers() {
	try {
		const response = yield call(API.get, endpoint);

		let payload = response.data;
		yield put({ type: GETNAVERS, payload });
	} catch (error) {
		console.log(error);
	}
}

function* getNaverById({ id }) {
	try {
		const response = yield call(API.get, `${endpoint}/${id}`);

		let payload = response.data;
		yield put({ type: GETNAVERBYID, payload });
	} catch (error) {
		console.log(error);
	}
}

function* postNavers({ data }) {
	try {
		const response = yield call(API.post, endpoint, data);

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

		const response = yield call(API.put, `${endpoint}/${id}`, data);

		let payload = response.data;
		yield put({ type: PUTNAVER, payload });
	} catch (error) {
		console.log(error);
	}
}

export default function* UserSaga() {
	yield takeEvery(GETNAVERSSAGA, getNavers);
	yield takeEvery(POSTNAVERSSAGA, postNavers);
	yield takeEvery(GETNAVERBYIDSAGA, getNaverById);
	yield takeEvery(PUTNAVERSAGA, putNavers);
}
