import {
	GETNAVERS,
	POSTNAVERS,
	GETNAVERBYID,
	PUTNAVER,
	DELETENAVER,
} from "./type";

const INITIAL_STATE = {
	index: [],
	show: {},
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GETNAVERS:
			return {
				...state,
				index: action.payload,
			};
		case GETNAVERBYID:
			return {
				...state,
				show: action.payload,
			};
		case POSTNAVERS: {
			const { index } = state;
			const { payload } = action;

			const array = [];
			array.push(...index, payload);

			return {
				...state,
				index: array,
			};
		}
		case PUTNAVER: {
			const { index } = state;
			const { id } = action.payload;

			const array = [];
			array.push(...index);

			const idx = array.findIndex((value) => value.id === id);
			array[idx] = action.payload;

			return {
				...state,
				index: array,
			};
		}
		case DELETENAVER: {
			const { index } = state;
			const { id } = action.payload;

			const array = [];
			array.push(...index);

			const idx = array.findIndex((value) => value.id === id);
			array.splice(idx, 1);

			return {
				...state,
				index: array,
			};
		}
		default:
			return state;
	}
};
