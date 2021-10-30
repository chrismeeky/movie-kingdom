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
  max-width: 30rem;

  & img {
    min-height: 50rem;
  }

  & > h2 {
    align-self: center;
    color: ${({ theme }) => theme.colorGray};
    margin: 1rem 0;
    font-weight: 400;
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
    position: absolute;
    top: -10rem;
    left: 0;
    width: 100%;
    background-color: #2a2c36;
    padding: 1rem;
    box-shadow: 2px 10px 10px rgba(0, 0, 0, 0.7);
    transition: all 0.3s;
    z-index: 10;

    & svg {
      width: 12%;
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
