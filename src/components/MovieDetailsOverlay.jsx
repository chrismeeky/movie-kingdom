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
        <i onClick={hideOverlay}>
          <svg
            id="Layer_1"
            version="1.1"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z" />
          </svg>
        </i>

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
