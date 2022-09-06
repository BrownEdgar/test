import { createStore, combineReducers, applyMiddleware } from 'redux'
import { nameReducer, initialNameValue } from './features/name'
import { arrReducer, initialArrValue } from './features/arr'
import { postsReducer, initialPostValue } from './features/posts'
import { CHANGE_NAME } from './actionTypes'


const initialState = {
	name: initialNameValue,
	arr: initialArrValue,
	posts: initialPostValue,
}

const myFirstMiddleWare = (store) => (next) => (action) => {
	if (action.type === CHANGE_NAME) {
		console.log("CHANGE_NAME action!");
			if (typeof action.payload.name === "string") {
				console.log("ok");
				next(action)
			}	else{
				alert("invalid property")
			}
	}
	next(action)
}


const store = createStore(combineReducers({
	name: nameReducer,
	arr: arrReducer,
	posts: postsReducer
}), initialState, applyMiddleware(myFirstMiddleWare))

export default store