import { createSlice } from "@reduxjs/toolkit";

export const testSlice = createSlice({
	name: "TEST",
	initialState: "test",
	reducers: {
		chengeName() {
			return "lol"
		}
	}
})


export default testSlice.reducer
export const { chengeName } = testSlice.actions