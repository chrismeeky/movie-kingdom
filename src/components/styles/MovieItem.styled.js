import styled from "styled-components";

export const StyledMovieItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.4rem;
  background-color: #2a2c36;
  border-radius: 1rem;
  padding-bottom: 2rem;
  transition: all 0.3s;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  max-width: 100%;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    border-radius: 0.7rem;
  }

  & img {
    min-height: 30vw;
    width: 100%;
  }

  & > h2 {
    align-self: center;
    color: ${({ theme }) => theme.colorGray};
    margin: 1rem 0;
    font-weight: 400;
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
      font-size: 1.3rem;
    }
  }

  & > div {
    display: flex;
    justify-content: space-between;
    color: ${({ theme }) => theme.colorGrayDark};
    font-size: 1.4rem;
    text-transform: uppercase;
  }

  & > figure {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: -10rem;
    left: 0;
    width: 100%;
    background-color: #2a2c36;
    padding: 1rem;
    box-shadow: 2px 10px 10px rgba(0, 0, 0, 0.7);
    transition: all 0.3s;
    z-index: 10;

    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
      position: unset;
      box-shadow: none;
      padding: 1.2rem;
    }

    & svg {
      width: 10%;
      fill: ${({ favorited }) => (favorited ? "#F44336" : "gray")};

      &:active {
        transform: scale(0.8);
      }
    }

    & span {
      color: ${({ theme }) => theme.colorGray};
      font-weight: 500;
      font-size: 1.3rem;
    }
  }

  &:hover {
    background-color: white;
    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
      background-color: #2a2c36;
    }

    & > h2 {
      color: black;
    }

    & > div {
      color: black;
    }

    & figure {
      top: 0;
    }
  }
`;
