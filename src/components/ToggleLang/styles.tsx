import opacity from "@/keyframes/opacity";
import styled from "styled-components";

export const ToggleLang = styled.div`
position: relative;
  .btn-toggle-lang{
      display: inline-flex;
      gap: .5rem;
      align-items: center;
      transition: .2s;
      &:hover{
        color: ${({ theme }) => theme.colors.light.color.light}
      }
      span{
        font-size: ${({ theme }) => theme.font.size.paragraphs.xsm[0]};
        font-weight: bold;
        
      }
    }
`

export const MenuLangs = styled.ul`
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.colors.primary.background.light};
  width: 130px;
  padding: .5rem;
  border-radius: .6rem;
  z-index: 10;
  border: 1px solid ${({ theme }) => theme.colors.secondary.background.main};
  animation: ${opacity} .3s;
  &::after{
    content: "";
    position: absolute;
    width: 100%;
    height: 20px;
    top: -20px;
    left: 0;
  }
  li.selected{
    font-weight: bold;
    cursor: default;
    &:hover{
      color: inherit;
      background-color: inherit;
    }
  }
  li{
    font-size: ${({ theme }) => theme.font.size.paragraphs.xsm[0]};
    font-weight: 500;
    border-radius: .4rem;
    padding: .4rem .7rem;
    cursor: pointer;
    transition: .2s;
    &:hover{
      color: ${({ theme }) => theme.colors.info.color.main};
      background-color: ${({ theme }) => theme.colors.secondary.background.main};
    }
  }
  
`