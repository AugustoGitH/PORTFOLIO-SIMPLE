import styled from "styled-components";


export const PageContent = styled.div`
width: 100%;
   h2 span, h3 span{
        color: ${({ theme }) => theme.colors.info.color.main};
      }
      a{
        display: inline-flex;
        text-decoration: underline;
        gap: .2rem;
        align-items: center;
        font-weight: 600;
        cursor: pointer;
        color: ${({ theme }) => theme.colors.info.color.main};
        font-size: ${({ theme }) => theme.font.size.paragraphs.sm[0]};
        line-height: ${({ theme }) => theme.font.size.paragraphs.sm[1]};
        transition: .2s;
        &:hover{
          color: ${({ theme }) => theme.colors.info.color.light};
        }
      }
      nav{
        margin: 1rem 0;
        width: 100%;
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
          gap: .5rem;
        }
      }
      p{
        margin: 1rem 0;
        font-size: ${({ theme }) => theme.font.size.paragraphs.sm[0]};
        line-height: ${({ theme }) => theme.font.size.paragraphs.md[1]};
      }
 
      .controller-navigation{
        width: 100%;
        display: flex;
        gap: .5rem;
        margin: 2rem 0;
        user-select: none;
        @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
           flex-wrap: wrap;
          }
        button:nth-child(1){
          text-align: start;
        }
        button:nth-child(2){
          text-align: end;
        }
        button{
          width: 50%;
          padding: .6rem 1rem;
          border-radius: .5rem;
          border: 1px solid  ${({ theme }) => theme.colors.secondary.background.main};
          transition: .2s;
          @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
            width: 100%;
          }
          &:hover{
            border: 1px solid  ${({ theme }) => theme.colors.info.color.main};
          }
          span{
            width: 100%;
            display: inline-block;
          }
          span:nth-child(1){
            color: ${({ theme }) => theme.colors.light.color.light};
            font-weight: bold;
            line-height: ${({ theme }) => theme.font.size.paragraphs.xxsm[1]};
            font-size: ${({ theme }) => theme.font.size.paragraphs.xxsm[0]};
          }
          span:nth-child(2){
            color: ${({ theme }) => theme.colors.info.color.main};
            font-weight: bold;
            line-height: ${({ theme }) => theme.font.size.paragraphs.sm[1]};
            font-size: ${({ theme }) => theme.font.size.paragraphs.sm[0]};
          }
        }
      }


`