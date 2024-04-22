import scaleUpPresence from "@/keyframes/scale-up-presence";
import styled from "styled-components";


export const Bio = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: .5rem;
        }
  .content{
    width: 800px;
    .btn-container-share{
      width: 100%;
      padding: 1rem 0;
      @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: .5rem 0;
        }
      button{
        width: 40px;
        height: 40px;
        background-color: ${({ theme }) => theme.colors.primary.background.light};
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
 
        color:  ${({ theme }) => theme.colors.info.color.main};
        transition :.2s;
        &:hover{
 
          background-color: ${({ theme }) => theme.colors.info.background.main};
          color: ${({ theme }) => theme.colors.dark.color.main};
        }
      }
    }
    .header{
      width: 100%;
      height: 150px;
      position: relative;
      margin-bottom: calc(170px / 2);
      /* background-color: #302929; */
      @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        margin-bottom: calc(140px / 2);
        height: 120px;
        }
      .profile{
        width: 170px;
        height: 170px;
        object-fit: cover;
        border-radius: 50%;
        position: absolute;
        bottom: -85px;
        left: 50%;
        transform: translateX(-50%);
        border: 9px solid ${({ theme }) => theme.colors.primary.background.main};
        @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
          width: 140px;
          height: 140px;
          bottom: calc((140px / 2)  *-1);
        }
      }
      .banner{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 1rem;
        background-color: ${({ theme }) => theme.colors.primary.background.light};
        
      }
    }
    .body{
      padding: 1rem 0;
      text-align: center;
      .title{
        font-size:calc( ${({ theme }) => theme.font.size.headings.h2[0]} );
        line-height:calc( ${({ theme }) => theme.font.size.headings.h2[1]});
      }
      .sub-title{
        margin-top: .3rem;
        font-size:calc( ${({ theme }) => theme.font.size.headings.h4[0]} );
        line-height:calc( ${({ theme }) => theme.font.size.headings.h4[1]} );
      }
      .description{
        margin-top: 1rem;
        font-size:${({ theme }) => theme.font.size.paragraphs.xsm[0]};
        line-height:${({ theme }) => theme.font.size.paragraphs.xsm[1]};
        color: ${({ theme }) => theme.colors.light.color.light}; 
      }
      ul.links{
        margin-top: 3rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;

      }
    }
  }

`
interface LinkProps {
  order: number
}
export const Link = styled.li<LinkProps>`
 width: 500px;

 opacity: 0;
 transform: scale(0);
 animation: ${scaleUpPresence} .3s ${({ order }) => `${(order + 1) * 100}ms`}  forwards ;
 @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%
 }
          a{
           
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem 1rem 1rem 2.5rem  ;
            border-radius: .5rem;
            gap: .5rem;
            width: 100%;
            font-weight: bold;
            font-size: ${({ theme }) => theme.font.size.paragraphs.sm[0]};
            line-height: ${({ theme }) => theme.font.size.paragraphs.sm[1]};
            background-color: ${({ theme }) => theme.colors.info.background.main};
            border: 1px solid  ${({ theme }) => theme.colors.info.background.main};
            cursor: pointer;
            position: relative;
            transition: .2s;
            color: ${({ theme }) => theme.colors.primary.color.main}; 
            &:hover{
              background-color: transparent;
              color: ${({ theme }) => theme.colors.info.color.main};
            }
            .icon, img{
              position: absolute;
              left: 1rem;
            }
            img{
              width: 25px;
              height: 25px;
            }
          }

`