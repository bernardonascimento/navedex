import { GETNAVERS, POSTNAVERS, GETNAVERBYID } from "./type";

const INITIAL_STATE = {
	index: [],
	create: {},
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
		case POSTNAVERS:
			return {
				...state,
				create: action.payload,
			};
		default:
			return state;
	}
};
