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

  & > h2 {
    align-self: center;
    color: ${({ theme }) => theme.colorGray};
    margin: 0.5rem 0;
    font-weight: 400;
  }

  & > div {
    display: flex;
    justify-content: space-between;
    color: #8f8d8d;
    font-size: 1.3rem;
  }

  &:hover {
    background-color: white;

    & > h2 {
      color: black;
    }

    & > div {
      color: black;
    }
  }
`;
