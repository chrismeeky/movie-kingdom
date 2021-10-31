import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {
  getAllFavorited,
  movieDetailsRequested,
} from "../features/movies/movies.slice";
import { StyledMoviesList } from "./styles/MoviesList.styled";
import MovieItem from "./MovieItem";
import MovieItemSkeleton from "./MovieItemSkeleton";
import MovieDetailsOverlay from "./MovieDetailsOverlay";

const Movies = ({ movieList, isLoading, activeTab }) => {
  const dispatch = useDispatch();
  const [selectedMovie, setSelectedMovies] = useState(movieList[0] || {});
  const favoritedMovies = useSelector(getAllFavorited);

  const handleMovieSelection = (movie) => {
    setSelectedMovies(movie);
    dispatch(movieDetailsRequested(true));
  };

  return (
    <>
      <StyledMoviesList>
        {(movieList.length && !isLoading) || activeTab.name === "My Movies"
          ? movieList.map((movie) => (
              <MovieItem
                movie={movie}
                key={movie.id}
                favorited={favoritedMovies.ids.includes(movie.id)}
                onMovieSelect={handleMovieSelection}
              />
            ))
          : [...Array(10).keys()].map((item, index) => (
              <MovieItemSkeleton key={index} />
            ))}
      </StyledMoviesList>
      {!isLoading && <MovieDetailsOverlay movie={selectedMovie} />}
    </>
  );
};

export default Movies;
