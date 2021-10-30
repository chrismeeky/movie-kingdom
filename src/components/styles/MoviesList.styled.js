import styled from "styled-components";

export const StyledMoviesList = styled.div`
  margin-top: 2rem;
  padding-bottom: 3rem;
  display: grid;
  grid-template-columns: repeat(4, minmax(30rem, 1fr));
  grid-gap: 2rem;
`;
