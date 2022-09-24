import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchBook } from './bookAPI'


const booksSlice = createSlice({
	name: "BOOKS",
	initialState:  {
		books: [],
		status: ""
	},
	reducers: {
		addBook(state,action) {
			return [...state , action.payload]
		}
	}, 
})

export default booksSlice.reducer;
export const { addBook } = booksSlice.actions