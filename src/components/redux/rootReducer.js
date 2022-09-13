import booksSlice from "./features/booksSlice"; 
import { booksReducer } from "./features/OldBooksSlice";


const rootReducer={
    books:booksSlice,
}


export default rootReducer