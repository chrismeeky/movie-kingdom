import styled from "styled-components";

export const StyledTabs = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  font-size: 1.5rem;
`;

export const StyledTab = styled.div`
  text-align: center;
  padding: 0 0 0.5rem 0;
  border-bottom: 2px solid ${({ active }) => (active ? "white" : "gray")};
  cursor: pointer;
  color: white;
  min-width: 15rem;

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    min-width: 30vw;
    font-size: 1.2rem;
  }
`;
