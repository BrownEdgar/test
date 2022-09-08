import { combineReducers, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { nameReducer, initialNameValue } from './features/name'
import { arrReducer, initialArrValue } from './features/arr'
import { postsReducer, initialPostValue } from './features/posts'
import thunk from "redux-thunk"


const initialState = {
	name: initialNameValue,
	arr: initialArrValue,
	posts: initialPostValue,
}


const store = configureStore({reducer: {
	name: nameReducer,
	arr: arrReducer,
	posts: postsReducer
}
}, initialState, applyMiddleware(thunk))

export default store