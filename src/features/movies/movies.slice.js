import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createSelector } from "reselect";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    list: [
      {
        title: "The crimer",
        date: "11/5/2005",
        poster:
          "https://image.tmdb.org/t/p/w200/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
        mediaType: "Movies",
        voteCount: 250,
      },
      {
        title: "The crimer",
        date: "11/5/2005",
        poster:
          "https://image.tmdb.org/t/p/w200/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
        mediaType: "Movies",
        voteCount: 250,
      },
      {
        title: "The crimer",
        date: "11/5/2005",
        poster:
          "https://image.tmdb.org/t/p/w200/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
        mediaType: "Movies",
        voteCount: 250,
      },
      {
        title: "The crimer",
        date: "11/5/2005",
        poster:
          "https://image.tmdb.org/t/p/w200/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
        mediaType: "Movies",
        voteCount: 250,
      },
      {
        title: "The crimer",
        date: "11/5/2005",
        poster:
          "https://image.tmdb.org/t/p/w200/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
        mediaType: "Movies",
        voteCount: 250,
      },
    ],
    loading: false,
  },

  reducers: {},
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
          return `/trending/all/day?api_key=b2bef1c63f518439531b3bbf59170393&page=${page}`;
        },
      }),
    };
  },
});



export default moviesSlice.reducer;
export const {} = moviesSlice.actions;
export const { useFetchMoviesQuery } = movieApiSlice;
