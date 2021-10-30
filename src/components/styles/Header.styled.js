import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colorPrimary};
  padding: 1rem;
  position: relative;
  box-shadow: 2px 2px 5px rgb(0, 0, 0, 0.3);

  & img {
    width: 13rem;
  }

  & h1 {
    text-transform: uppercase;
    font-size: 6rem;
    color: ${({ theme }) => theme.colorGray};
    font-weight: 300;
  }
`;
