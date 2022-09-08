import { CHANGE_NAME } from '../actionTypes'

export function nameReducer(state = "", action) {
	switch (action.type) {
		case CHANGE_NAME:
			return action.payload.name;
		default: return state
	}
}

export const initialNameValue = "Redux"


export function changeNameAction() {
	return {
		type: CHANGE_NAME,
		payload: { name: false}
	}
}