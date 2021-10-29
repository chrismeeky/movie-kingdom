import styled from "styled-components";

export const StyledTabs = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  font-size: 1.5rem;

  & > div {
    text-align: center;
    padding: 0 2rem;
    border-bottom: 2px solid red;
    cursor: pointer;
    color: white;
  }
`;
