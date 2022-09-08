import { GET_ARR_ELEMENTS } from '../actionTypes'

export function arrReducer(state = [], action) {
	switch (action.type) {
		case GET_ARR_ELEMENTS:
			return action.payload.arr

		default: return state
	}
}

export const initialArrValue = ['html', 'css', 'Java Script', 'React.js', 'Node.js', 'Python']

export function changeArrAction(f) {
	return { type: GET_ARR_ELEMENTS, payload: { arr: f } }
}