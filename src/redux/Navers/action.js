import {
	GETNAVERSSAGA,
	POSTNAVERSSAGA,
	GETNAVERBYIDSAGA,
	PUTNAVERSAGA,
} from "./type";

export function getNavers() {
	return { type: GETNAVERSSAGA };
}

export function getNaverById(id) {
	return { type: GETNAVERBYIDSAGA, id };
}

export function postNavers(data) {
	return { type: POSTNAVERSSAGA, data };
}

export function putNavers(data) {
	return { type: PUTNAVERSAGA, data };
}
