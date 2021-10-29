import { StyledMovieItem } from "./styles/MovieItem.styled";
import likeIcon from "../assets/svg/like-icon.svg";

const MovieItem = ({
  movie: { poster, title, mediaType, date, voteCount },
}) => {
  return (
    <StyledMovieItem>
      <img src={poster} alt="" />
      <h2>{title}</h2>
      <div>
        <span>{mediaType}</span>
        <span>{date}</span>
      </div>

      <figure className="movie-options">
        <span>{voteCount} votes</span>
        <img src={likeIcon} alt="favorite" />
      </figure>
    </StyledMovieItem>
  );
};

export default MovieItem;
