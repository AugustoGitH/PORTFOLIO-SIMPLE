import styled from "styled-components";

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