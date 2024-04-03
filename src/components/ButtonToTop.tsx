import { Icon } from "@iconify/react/dist/iconify.js";
import styled from "styled-components";



const S = {
  ButtonToTop: styled.button`
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    background-color: ${({ theme }) => theme.colors.third.background.main};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    transition: .2s;
    color: ${({ theme }) => theme.colors.light.background.main};
    &:hover{
      background-color: ${({ theme }) => theme.colors.third.background.light};
    }
  `
}

export default function ButtonToTop() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <S.ButtonToTop onClick={handleClick}>
      <Icon icon="mdi:arrow-top-thick" />
    </S.ButtonToTop>
  )
}