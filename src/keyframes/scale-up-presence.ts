import { keyframes } from "styled-components";

const scaleUpPresence = keyframes`
0% {
    opacity: 0;
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
  }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
            transform: scale(1);
  }


`;
export default scaleUpPresence;
