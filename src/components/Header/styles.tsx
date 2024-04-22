import opacity from "@/keyframes/opacity";
import slideBottom from "@/keyframes/slide-bottom";
import styled from "styled-components";

export const VerticalLine = styled.div`
  height: 40%;
  width: 1px;
  background-color: ${({ theme }) => theme.colors.secondary.background.main};

`
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
export const ToggleTheme = styled.div`

    .toggle-theme{
      width: 34px;
      height: 19px;
      border-radius: 1rem;
      background-color: ${({ theme }) => theme.colors.secondary.background.main};
      position: relative;
      cursor: pointer;
      border: 1px solid ${({ theme }) => theme.colors.secondary.background.light};
      transition: .2s;
      &:hover{
        border: 1px solid ${({ theme }) => theme.colors.third.background.main};
      }
      .toggle{
        position: absolute;
        width: 17px;
        height: 17px;
        border: 1px solid  ${({ theme }) => theme.colors.secondary.background.main};
        
        top: 0;
  
        bottom: 0;
        margin: auto;
        background-color: ${({ theme }) => theme.colors.light.color.main};
        border-radius: 50%;
        transition: .2s;
        display: flex;
        align-items: center;
        justify-content: center;
        .icon{
          font-size: .8rem;
          color: ${({ theme }) => theme.colors.primary.background.main}
        }
      }
      .toggle.dark{
        transform: translateX(0px);
      }
      .toggle.light{
        transform: translateX(calc(100% - 1px))
      }
    }
`
export const MenuVertical = styled.div`
  width: 100%;
  min-height: 100vh;
  position: fixed;
  top: 60px;
  left: 0;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.primary.background.main};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  animation: ${slideBottom} .2s;
  padding: 1rem;
  .navigation{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    ul.menu-pages{
      margin: 1rem 0;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: .5rem;
        li.current{
          color: ${({ theme }) => theme.colors.info.color.main};
        }
        li{
          cursor: pointer;
          color: ${({ theme }) => theme.colors.light.color.light};
          font-size: ${({ theme }) => theme.font.size.paragraphs.xsm[0]};
          line-height: ${({ theme }) => theme.font.size.paragraphs.xsm[1]};
          transition: .2s;
          font-weight: 500;
          &:hover{
            color: ${({ theme }) => theme.colors.info.color.main};
          }
        }
      }
    .appearance{
      width: 300px;
      padding: 1rem 1.5rem;
      border-radius: .5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: ${({ theme }) => theme.colors.primary.background.light};
      span{
        color: ${({ theme }) => theme.colors.light.color.light};
        font-size: ${({ theme }) => theme.font.size.paragraphs.xxsm[0]};
        font-weight: bold;
      }
    }
    nav.social{
        display: flex;
        gap: 1rem;
        font-size: 1.5rem;
        a{
          color: ${({ theme }) => theme.colors.light.color.light};
       
          transition: .2s;
          &:hover{
            color: ${({ theme }) => theme.colors.light.color.main};
          }
        }
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
export const Header = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  position: sticky;
  padding: 0 1rem;
  left: 0;
  top: 0;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.primary.background.main};
  .content{
    width: 1500px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title{
      font-size: ${({ theme }) => theme.font.size.paragraphs.sm[0]};
      color: ${({ theme }) => theme.colors.light.color.main};
      text-decoration: none;
      h1{
        font-size: inherit;
      }
    }
    .btn-open-menu-vertical{
        @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
          display: none;
        }
        font-size: 1.4rem;
      }
    .navigation{
      display: flex;
      align-items: center;
      gap: 1rem;
      height: 100%;
      @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        display: none;
      }
      nav.social{
        display: flex;
        gap: 1rem;
        font-size: 1.5rem;
        a{
          color: ${({ theme }) => theme.colors.light.color.light};
       
          transition: .2s;
          &:hover{
            color: ${({ theme }) => theme.colors.light.color.main};
          }
        }
      }
    }
  
  }

`