import { configureStore } from "@reduxjs/toolkit";
import moviesReducer, { movieApiSlice } from "../features/movies/movies.slice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    [movieApiSlice.reducerPath]: movieApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(movieApiSlice.middleware);
  },
});
