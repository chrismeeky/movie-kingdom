import { StyledMovieItem } from "./styles/MovieItem.styled";


const MovieItem = ({ movie: { poster, title, mediaType, date } }) => {
  return (
    <StyledMovieItem>
      <img src={poster} alt="" />
      <h2>{title}</h2>
      <div>
        <span>{mediaType}</span>
        <span>{date}</span>
      </div>
    </StyledMovieItem>
  );
};

export default MovieItem;
