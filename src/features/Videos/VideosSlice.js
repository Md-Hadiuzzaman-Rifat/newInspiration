import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideos } from "./VideosApi"


// initial state 
const initialState={
    videos:[],
    isLoading: false, 
    isError: false,
    error:""
}

// thunk action function 
export const fetchVideos= createAsyncThunk('videos/fetchVideos', async()=>{
    const response = await getVideos()
    return response.data
})

// reducer slice 
export const videosSlice= createSlice({
    name:"videos",
    initialState,
    extraReducers:(builder)=>{

        builder.addCase(fetchVideos.pending, (state)=>{
            state.isLoading= true
            state.isError= false
        })
        builder.addCase(fetchVideos.fulfilled, (state, action)=>{
            state.isLoading= false
            state.isError= false
            state.videos=action.payload
        })
        builder.addCase(fetchVideos.rejected, (state, action)=>{
            state.isLoading= false
            state.isError= true 
            state.error= action.error.message
        })

    }
})
export default videosSlice.reducer