import styled from "styled-components";
import { zoomInOut } from "./Animations";

export const StyledMovieDetailsOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000000;
  height: 100vh;
  width: 100%;
  background-color: rgba(#000, 0.8);
  display: grid;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s;
  opacity: 1;
  visibility: ${({ showOverlay }) => (showOverlay ? "visible" : "hidden")};

  @supports (-webkit-backdrop-filter: blur(10px)) or
    (backdrop-filter: blur(10px)) {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(6px);
    background-color: rgba(#000, 0.3);
  }
  z-index: 100;

  & > div {
    transform: scale(1);
    background-color: #fff;
    box-shadow: 0 1rem 4rem rgba(#000, 0.2);
    border-radius: 0.8rem;
    overflow: hidden;
    transition: all 0.4s;
    display: flex;
    flex-direction: column;
    width: 70vw;
    max-height: 95vh;
    overflow-y: auto;
    @media (max-width: ${({ theme }) => theme.breakPoints.mediumDesktop}) {
      width: 90vw;
    }

    &.show {
      position: relative;
      opacity: 1;
      transform: scale(1);
      font-weight: 0;
      animation: ${zoomInOut} 0.5s;
    }

    & i {
      position: absolute;
      right: 1rem;
      top: 2rem;
      cursor: pointer;

      & svg {
        enable-background: new 0 0 512 512;
        width: 2rem;
        height: 2rem;
      }

      &:hover {
        color: ${({ theme }) => theme.colorGray};
      }
    }

    & > div {
      display: flex;
      background: ${({ theme }) => theme.colorGrayDark};

      & div:nth-child(1) {
        & img {
          height: 100%;
        }
        @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
          display: none;
        }
      }

      & div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
        overflow-y: auto;
        max-height: 40rem;
        text-align: center;
        width: 100%;
        margin-top: 5rem;
        @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
          max-height: 100%;
          padding-bottom: 5rem;
        }

        & h1 {
          margin-bottom: 1rem;
        }

        & p {
          font-size: 1.3rem;
          line-height: 3rem;
        }
      }
    }
  }
`;
