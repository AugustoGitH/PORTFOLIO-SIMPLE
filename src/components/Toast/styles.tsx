import scaleUpPresence from "@/keyframes/scale-up-presence";
import styled from "styled-components";

interface ToastProps {
  status: "success" | "error"
}
export const Toast = styled.div<ToastProps>`
position: fixed;
  right: 2rem;
  bottom:2rem;
  padding: 1rem 1.4rem;
  max-width: 400px; 
  background-color: ${({ theme }) => theme.colors.primary.background.light}; 
  border-radius: .7rem ;
  color: ${({ theme, status }) => status === "success" ? theme.colors.info.color.main : theme.colors.danger.color.main};
  animation: ${scaleUpPresence} .2s;
  p{
    line-height: ${({ theme }) => theme.font.size.paragraphs.xsm[1]};
    font-size: ${({ theme }) => theme.font.size.paragraphs.xsm[0]};
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`