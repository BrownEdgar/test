import {createSlice, createAsyncThunk} from '@reduxjs/toolkit' 
import {fetchBook} from './bookAPI'





export const addAsyncBook= createAsyncThunk(
    "BOOKS/addAsyncBook",
    async(url)=>{
        const response= await fetchBook(url)
        return response 
    }
)


const booksSlice=createSlice({
    name:"BOOKS",
    initialState:
    //  {
    //     books: [],
    //     status:""
    // },
        [
        
            {
            id:1,
            author:"K.R.Safon",
            title:"Marina",
        }
    ],

    
    reducers:{
        addBook(state, action){
            return [...state, action.payload]
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(addAsyncBook.pending, (state)=>{
            return state
            // {
            //     ...state,
            //     status:"loading",
            // }
        }).addCase(addAsyncBook.fulfilled, (state, action)=>{
            
            return [action.payload]// return{
            //     ...state,
            //     status:"success",
            //     books: [...state.books, action.payload]
            // }
        }).addCase(addAsyncBook.rejected, (state, action)=>{
            return state
            // {
            //     ...state,
            //     status:"fail"
            // }
        })
    }
})


export default booksSlice.reducer
export const {addBook}=booksSlice.actions