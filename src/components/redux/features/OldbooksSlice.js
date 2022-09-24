export const ADD_BOOK = "ADD_BOOK"

export const initialBooksValue = [
	{
		id:1,
		author: "K.R.Safon",
		title: "Marina",
	}
]


export function booksReducer(state = initialBooksValue, action) {
	switch (action.type) {
		case ADD_BOOK:
			return [...state, action.payload]
	
		default: return state
	}
}



// //selectors
// export const selectBooks = state => state?.books;

//actionCreater
export function addBookAction(book) {
	return {
		type: ADD_BOOK,
		payload: book
	}
}