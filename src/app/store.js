import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import videosReducer from "../features/Videos/VideosSlice"
import tagReducer from "../features/tags/TagSlice.js"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    videos: videosReducer,
    tags:tagReducer
  },
});
