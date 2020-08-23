import { LOADING } from "./type";

export function showLoading() {
	return { type: LOADING, payload: true };
}

export function hideLoading() {
	return { type: LOADING, payload: false };
}
