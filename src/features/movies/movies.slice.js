import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createSelector } from "reselect";
import { tabs } from "../../constants";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    favorited: {
      movies: [],
      ids: [],
    },
    activeTab: tabs[0],
    showMovieDetails: false,
  },

  reducers: {
    favoriteAdded: (state, action) => {
      const {
        payload: { movie },
      } = action;
      if (!state.favorited.ids.includes(movie.id)) {
        state.favorited.ids.push(movie.id);
        state.favorited.movies.push(movie);
      } else {
        const updatedFavoriteMovies = [];
        const updatedFavoriteMovieIds = [];
        state.favorited.movies.forEach((item) => {
          if (item.id !== movie.id) {
            updatedFavoriteMovies.push(item);
            updatedFavoriteMovieIds.push(item.id);
          }
        });
        state.favorited.movies = updatedFavoriteMovies;
        state.favorited.ids = updatedFavoriteMovieIds;
      }
    },

    tabSelected: (state, action) => {
      state.activeTab = action.payload;
    },
    movieDetailsRequested: (state, action) => {
      state.showMovieDetails = action.payload;
    },
  },
});

// I used the reselect library for memoization

export const getAllFavorited = createSelector(
  (state) => state.movies,
  (movies) => movies.favorited
);
export const getActiveTab = createSelector(
  (state) => state.movies,
  (movies) => movies.activeTab
);
export const getMovieDetailsState = createSelector(
  (state) => state.movies,
  (movies) => movies.showMovieDetails
);
// createAPI handles caching internally and also returns loading state - hence my choice

export const movieApiSlice = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",
  }),
  endpoints: (builder) => {
    return {
      fetchMovies: builder.query({
        query: ({ page = 1, url }) => {
          return `${url}&page=${page}`;
        },
      }),
    };
  },
});

export default moviesSlice.reducer;
export const {
  favoriteAdded,
  tabSelected,
  movieDetailsRequested,
} = moviesSlice.actions;
export const { useFetchMoviesQuery } = movieApiSlice;
export const { updateQueryData } = movieApiSlice.util;
