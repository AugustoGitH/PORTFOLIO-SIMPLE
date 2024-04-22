import scaleUpPresence from "@/keyframes/scale-up-presence";
import styled from "styled-components";


export const ShareCardLinks = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background-color: #0000002b;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2rem;
  .card{
    background-color: ${({ theme }) => theme.colors.primary.background.light};
    width: 500px;
    padding: 2rem 1rem;
    border-radius: 1rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: ${scaleUpPresence} .2s;
    .btn-close-card{
      position: absolute;
      top: 2rem;
      right: 2rem;
      font-size: 1rem;
    }
    span.title{
      display: block;
      text-align: center;
      font-weight: bold;
      font-size: ${({ theme }) => theme.font.size.paragraphs.xsm[0]};
      line-height: ${({ theme }) => theme.font.size.paragraphs.xsm[1]};
    }
    .list-share-link{
      margin-top: 3rem;
      width: 100%;
      li{
        width: 100%;
       a{
        display: flex;
        align-items: center;
        gap: .8rem;
        padding: .9rem 1rem;
        cursor: pointer;
        border-radius: .5rem;
        transition: .2s;
        position: relative;
        color: ${({ theme }) => theme.colors.info.color.main};
        text-decoration: none;
        &:hover{
          background-color: ${({ theme }) => theme.colors.info.background.main};
          color: ${({ theme }) => theme.colors.primary.color.main};
        }
        span{
          font-size: ${({ theme }) => theme.font.size.paragraphs.xsm[0]};
          line-height: ${({ theme }) => theme.font.size.paragraphs.xsm[1]};
         font-weight: bold;
        }
        .icon-social, .icon-arrow{
          font-size: 1.4rem;
        }
        .icon-arrow{
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
        }
       }
        
        
      }
    }
  }
`

export const FieldToCopyLink = styled.div`
  width: 100%;

  padding: 1rem .5rem;
  .field{
    position: relative;
    padding: 1rem 1.5rem;
    border: 1px solid ${({ theme }) => theme.colors.info.background.main};
    display: flex;
    border-radius: .5rem;
    gap: .8rem;
    align-items: center;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.info.color.main};
    transition: .2s;
    height: 60px;
    &:hover{
      background-color: ${({ theme }) => theme.colors.info.background.main};
      color: ${({ theme }) => theme.colors.primary.color.main};
    }
    .link{
      font-size: ${({ theme }) => theme.font.size.paragraphs.xsm[0]};
      line-height: ${({ theme }) => theme.font.size.paragraphs.xsm[1]};
      color: inherit;
    }
    .icon-link{
      font-size: 1.5rem;
      color: inherit;
    }
    .btn-copy{
      position: absolute;
      right: 1.5rem;
      top: 50%;
      transform: translateY(-50%);
      color: inherit;
      font-weight: bold;

    }
  }
`