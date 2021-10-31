import { useDispatch } from "react-redux";
import { favoriteAdded } from "../features/movies/movies.slice";
import { StyledMovieItem } from "./styles/MovieItem.styled";

const MovieItem = ({
  movie,
  movie: {
    poster_path,
    title,
    original_title,
    media_type,
    release_date,
    vote_count,
    id,
  },
  favorited,
  onMovieSelect,
}) => {
  const dispatch = useDispatch();

  return (
    <>
      <StyledMovieItem
        favorited={favorited}
        onClick={(event) => {
          onMovieSelect(movie);
        }}
      >
        <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt="" />
        <h2>{title || original_title}</h2>
        <div>
          <span>{media_type || "Movie"}</span>
          <span>{release_date}</span>
        </div>

        <figure className="movie-options">
          <span>{vote_count} votes</span>
          <svg
            version="1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            enableBackground="new 0 0 48 48"
            onClick={(event) => {
              event.stopPropagation();
              dispatch(
                favoriteAdded({
                  movie,
                })
              );
            }}
          >
            <path d="M34,9c-4.2,0-7.9,2.1-10,5.4C21.9,11.1,18.2,9,14,9C7.4,9,2,14.4,2,21c0,11.9,22,24,22,24s22-12,22-24 C46,14.4,40.6,9,34,9z" />
          </svg>
        </figure>
      </StyledMovieItem>
    </>
  );
};

export default MovieItem;
