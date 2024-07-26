import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";

const initialState = {
    content: [],
    isloading: false,
    error:null,
}

export const fetchContent = createAsyncThunk(
    'content/fetchContent',
    async () => {
        const res = await axios ('https://jsonplaceholder.typicode.com/photos')
        const data = await res.data
        return data
    }
)
export const contentSlice = createSlice({
    name:'content',
    initialState,
    reducer: {},
    extraReducers: (builder) => {
        builder.addCase(fetchContent.pending, (state) =>{
            state.isloading = true
        })
        builder.addCase(fetchContent.fulfilled, (state,action) =>{
            state.isloading = false
            state.contents = action.payload
        })
        builder.addCase(fetchContent.rejected, (state,action) =>{
            state.isloading = false
            state.error = action.error.message
        })
    },
})


export default contentSlice.reducer;