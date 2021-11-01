import styled from "styled-components";

export const StyledMoviesSection = styled.div`
  background-color: ${({ theme }) => theme.colorPrimary};
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h2 {
    font-size: 3rem;
    font-weight: 300;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colorGray};
    margin-top: 2rem;

    @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
      font-size: 2rem;
    }
  }
`;
