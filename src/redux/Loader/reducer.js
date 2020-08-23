import { LOADING } from "./type";

const INITIAL_STATE = {
	loading: false,
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case LOADING:
			return {
				...state,
				loading: action.payload,
			};
		default:
			return state;
	}
};
