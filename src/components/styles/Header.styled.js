import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colorPrimary};
  padding: 2rem;
  position: relative;
  box-shadow: 2px 2px 5px rgb(0, 0, 0, 0.3);

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    padding: 4rem 2rem;
  }

  & img {
    width: 9%;
  }

  & h1 {
    text-transform: uppercase;
    font-size: calc(2.5rem + 2.5vw);
    color: ${({ theme }) => theme.colorGray};
    font-weight: 300;

    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
      font-size: calc(1.2rem + 2.6vw);
      margin: 0 2rem;
    }
  }
`;
