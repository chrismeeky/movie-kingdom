import { keyframes } from "styled-components";

export const zoomInOut = keyframes`{
    0% {
      opacity: 0;
      transform: scale(0.2);
    }
    60% {
      transform: scale(1.08);
    }
    100% {
      transform: scale(1);
    }
  }`;
