import styled from "styled-components";


export const Section03 = styled.section`
width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 50px 1rem;
 
  .content {
    width: 1500px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  
    .menu-vertical-left,  .menu-vertical-right{
    
      overflow: auto;
      padding: 3rem 1rem;
      position: sticky;
      top: 60px;
      width: 300px;
      height: 600px;
      ul{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: .5rem;
        li{
          color: ${({ theme }) => theme.colors.light.color.light};
          font-size: ${({ theme }) => theme.font.size.paragraphs.xsm[0]};
          line-height: ${({ theme }) => theme.font.size.paragraphs.xsm[1]};
          transition: .2s;
          
        }
      }

    }
    .menu-vertical-left{
      @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
        display: none;
      }
      ul{
        li.current{
          color: ${({ theme }) => theme.colors.info.color.main};
        }
        li{
          font-weight: 500;
          cursor: pointer;
          &:hover{
            color: ${({ theme }) => theme.colors.info.color.main};
          }
        }
      }
    }
    .menu-vertical-right{
      @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        display: none;
      }
      ul{
        padding-left: 1rem;
        border-left: 1px solid ${({ theme }) => theme.colors.secondary.background.main};
        li{
          cursor: default;
        }
        li.primary{
          color: ${({ theme }) => theme.colors.light.color.main};
          font-weight: bold;
        }
        li.current{
          position: relative;
          
          color: ${({ theme }) => theme.colors.light.color.main};
          
          &::after{
          content: "";
          border-radius: .4rem;
          position: absolute;
          top: 0;
          left: calc((1rem + 1px) * -1);
          width: 2px;
          height: 100%;
          background-color: ${({ theme }) => theme.colors.info.background.main};
          pointer-events: none;
        }
        }
  
      }
    }
    .page-content{
      width: calc(100% - 600px);
      padding: 3rem 10%;
      @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
        width: calc(100% - 300px);
        padding: 2rem 1rem;
      }
      @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        width: 100%
      }
     
    }

}

`