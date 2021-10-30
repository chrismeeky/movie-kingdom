import { StyledMoviesList } from "./styles/MoviesList.styled";
import MovieItem from "./MovieItem";
import MovieItemSkeleton from "./MovieItemSkeleton";

const Movies = ({ movieList, isLoading }) => {
  return (
    <StyledMoviesList>
      {movieList.length && !isLoading
        ? movieList.map((movie) => <MovieItem movie={movie} key={movie.id} />)
        : [...Array(10).keys()].map((item, index) => (
            <MovieItemSkeleton key={item.index} />
          ))}
    </StyledMoviesList>
  );
};

export default Movies;
