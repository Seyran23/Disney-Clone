import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/userSlice";
import movieSlice from "../features/movie/movieSlice";

export default configureStore({
    reducer: {
        user: userSlice.reducer,
        movie: movieSlice.reducer
    },
 
});