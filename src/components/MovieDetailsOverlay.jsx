import { useSelector, useDispatch } from "react-redux";
import {
  getMovieDetailsState,
  movieDetailsRequested,
} from "../features/movies/movies.slice";

import { StyledMovieDetailsOverlay } from "./styles/MovieDetailsOverlay.styled";

const MovieDetailsOverlay = ({ movie: { poster_path, title, overview } }) => {
  const dispatch = useDispatch();
  const showMovieDetails = useSelector(getMovieDetailsState);

  const hideOverlay = () => {
    dispatch(movieDetailsRequested(false));
  };

  console.log("state", showMovieDetails);

  return (
    <StyledMovieDetailsOverlay
      className="movie-details-overlay"
      showOverlay={showMovieDetails}
    >
      <div className={`${showMovieDetails && "show"}`}>
        <i onClick={hideOverlay}>x</i>

        <div>
          <div>
            <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt="" />
          </div>
          <div>
            <h1>{title}</h1>
            <p>{overview}</p>
          </div>
        </div>
      </div>
    </StyledMovieDetailsOverlay>
  );
};

export default MovieDetailsOverlay;
