import { keyframes } from "styled-components";

const scaleUpTl = keyframes`

  0% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
    -webkit-transform-origin: 0% 0%;
            transform-origin: 0% 0%;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: 0% 0%;
            transform-origin: 0% 0%;
  }


`;
export default scaleUpTl;
