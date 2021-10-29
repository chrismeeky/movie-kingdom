import { StyledMoviesList } from "./styles/MoviesList.styled";
import MovieItem from "./MovieItem";

const Movies = ({ movieList }) => {
  return (
    <StyledMoviesList>
      {movieList.map((movie) => (
        <MovieItem movie={movie} />
      ))}
    </StyledMoviesList>
  );
};

export default Movies;
