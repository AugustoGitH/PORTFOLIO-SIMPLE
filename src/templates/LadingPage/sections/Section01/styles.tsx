
import styled from "styled-components";

export const Section01 = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 50px 1rem;
  
  .content {
    width: ${({ theme }) => theme.limits.content};
    nav.navigation{
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      gap: 1rem;
      margin-top: 2rem;
      @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
            
            gap: .5rem;
          
          }
          @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {

            justify-content: center;
          }
      a.third{
        background-color: ${({ theme }) => theme.colors.third.background.main};
        color: ${({ theme }) => theme.colors.light.background.main};
        &:hover{
          background-color: ${({ theme }) => theme.colors.third.background.light};
        }
      }
      a{
        color: ${({ theme }) => theme.colors.light.color.main};
        font-weight: bold;
        cursor :pointer;
        text-decoration: none;
        padding: .7rem 1.5rem;
        border-radius: 2rem;
        font-size: ${({ theme }) => theme.font.size.paragraphs.xsm[0]};
        background-color: ${({ theme }) => theme.colors.secondary.background.main};
        transition: .2s;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        .icon{
          font-size: ${({ theme }) => theme.font.size.paragraphs.xsm[0]};
        }
        &:hover{
          background-color: ${({ theme }) => theme.colors.secondary.background.light};
        }
      }
    }
  
    .apresentation {
      
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 5%;
      

      @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        gap: 2rem;
            flex-direction: column-reverse;
          }
      .image{
        width: 400px;
        height: 460px;

        flex: none;
        overflow: hidden;
        border-bottom-left-radius: 200px;
        border-bottom-right-radius: 200px;
      
        display: flex;
        align-items: flex-end;
        justify-content: center;
          @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
            width: 300px;
            height: 350px;
          }
          @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
            width: 250px;
            height: 300px;
          }
        .erase{
         
          width: 100%;
          height: 400px;
          background-color: ${({ theme }) => theme.colors.third.background.main};
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
            height: 300px;
          }
          @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
            height: 250px;
          }
          img{
            width: auto;
            height: 140%;
            margin-top: -3rem;
          }
        }
       
      }
      .text {
        @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
          text-align: center;
        }
        h1{
          span.mark{
            color: ${({ theme }) => theme.colors.third.background.light};
          }
          span.word-parse{
            @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
              display: none;
            }
          }
          span.word-inter{
            @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
              display: none;
            }
          }
        }
        p {
          margin-top: 2rem;
          font-size: ${({ theme }) => theme.font.size.paragraphs.md[0]};
          line-height: calc(${({ theme }) => theme.font.size.paragraphs.md[1]});
          color: ${({ theme }) => theme.colors.light.color.light};
          @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
            margin-top: 1rem;
          }
        }
      }
    }

    .stacks{
      margin-top: 3rem;
      display: grid;
      gap: .7rem;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      .card{
        background-color: ${({ theme }) => theme.colors.primary.background.light};

        border-radius: 1rem;
        padding: 1.6rem;
        .square-icon{
          width: 50px;
          height: 50px;
          background-color: ${({ theme }) => theme.colors.secondary.background.main};
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: .5rem;
          font-size: 1.4rem;
        }
        h2{
          margin-top: 1.5rem;
          font-size: ${({ theme }) => theme.font.size.headings.h4[0]};
          line-height: ${({ theme }) => theme.font.size.headings.h4[1]};
        }
        p{
          margin-top: .5rem;
          font-size: ${({ theme }) => theme.font.size.paragraphs.xsm[0]};
          line-height: ${({ theme }) => theme.font.size.paragraphs.xsm[1]};
          font-weight: bold;
          color: ${({ theme }) => theme.colors.light.color.light};
          strong{
            color: ${({ theme }) => theme.colors.light.color.main}
          }
        }
      }
    }

  }
`;
