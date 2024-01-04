import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice'
import apiSlice from "./slices/apiSlice";
import movieReducer from "./slices/movieSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
});

export default appStore