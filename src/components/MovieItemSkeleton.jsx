import Skeleton from "react-loading-skeleton";
import { StyledMovieItemSkeleton } from "./styles/MovieItemSkeleton.styled";
import 'react-loading-skeleton/dist/skeleton.css'

const MovieItemSkeleton = () => {
  return (
    <StyledMovieItemSkeleton>
      <Skeleton width="100%" height="100%" style={{ display: "block" }} baseColor="gray" highlightColor="#444" />
    </StyledMovieItemSkeleton>
  );
};

export default MovieItemSkeleton;
