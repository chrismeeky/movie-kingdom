import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createSelector } from "reselect";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    favorited: [],
    loading: false,
  },

  reducers: {
    favoriteAdded: (state, action) => {
      const { payload } = action;
      if (!state.favorited.includes(payload)) {
        state.favorited.push(payload);
      } else state.favorited = state.favorited.filter((id) => id !== payload);
    },
  },
});

export const getAllMovies = createSelector(
  (state) => state.movies,
  (movies) => movies.list
);

export const movieApiSlice = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",
  }),
  endpoints: (builder) => {
    return {
      fetchMovies: builder.query({
        query: (page = 1) => {
          return `/trending/all/day?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&page=${page}`;
        },
      }),
    };
  },
});

console.log("process", process.env);
export default moviesSlice.reducer;
export const { favoriteAdded } = moviesSlice.actions;
export const { useFetchMoviesQuery } = movieApiSlice;
