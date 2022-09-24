import booksSlice from "./features/booksSlice"
import { booksReducer } from "./features/OldbooksSlice"
import testSlice from "./features/testSlice"

const rootReducer = {
	books: booksSlice,
	test: testSlice,
}

export default rootReducer