import {
	GETNAVERSSAGA,
	POSTNAVERSSAGA,
	GETNAVERBYIDSAGA,
	PUTNAVERSAGA,
	GETNAVERBYID,
	DELETENAVERSAGA,
} from "./type";

export function getNavers() {
	return { type: GETNAVERSSAGA };
}

export function getNaverById(id, loading = true) {
	return { type: GETNAVERBYIDSAGA, params: { id, loading } };
}

export function postNavers(data) {
	return { type: POSTNAVERSSAGA, data };
}

export function putNavers(data) {
	return { type: PUTNAVERSAGA, data };
}

export function deleteNavers(id) {
	return { type: DELETENAVERSAGA, id };
}

export function resetShow() {
	return { type: GETNAVERBYID, payload: {} };
}
