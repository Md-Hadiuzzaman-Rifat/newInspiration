import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getTags } from "./TagApi"

// initialState
const initialState={
    isLoading: false, 
    isError: false,
    tags:[],
    error:""
}

// thunk function 
export const fetchTags= createAsyncThunk('tags/fetchTags',async()=>{
    const response = await getTags()
    return response.data
})

// reducer function
export const tagSlice= createSlice({
    name:"tags",
    initialState,
    extraReducers:(builder)=>{

        builder.addCase(fetchTags.pending, (state)=>{
            state.isLoading= true
            state.isError= false
        })
        builder.addCase(fetchTags.fulfilled, (state, action)=>{
            state.isLoading= false
            state.isError= false
            state.tags=action.payload
        })
        builder.addCase(fetchTags.rejected, (state, action)=>{
            state.isLoading= false
            state.isError= true 
            state.error= action.error.message
        })

    }
})
export default tagSlice.reducer