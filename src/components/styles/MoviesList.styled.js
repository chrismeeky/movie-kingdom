import styled from "styled-components";

export const StyledMoviesList = styled.div`
  width: 75%;
  margin-top: 2rem;
  padding-bottom: 3rem;
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-gap: 2rem;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakPoints.largeDesktop}) {
    grid-template-columns: repeat(3, 33.33%);
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.mediumDesktop}) {
    width: 90%;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    width: 90%;
    grid-template-columns: repeat(2, 50%);
    grid-gap: 1rem;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    width: 93%;
  }
`;
