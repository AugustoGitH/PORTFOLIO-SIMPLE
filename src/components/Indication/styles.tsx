import styled from "styled-components";

export const Indication = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  position: relative;
  padding: 1rem 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
     flex-direction: column;
     text-align: center;
     align-items: center;
    }
    .auth{
      position: absolute;
      top: 0;
      right: 0;
      font-size: ${({ theme }) => theme.font.size.paragraphs.xxsm[0]};
      line-height: ${({ theme }) => theme.font.size.paragraphs.xxsm[1]};
      font-weight: bold;
      color: ${({ theme }) => theme.colors.info.color.main};
      transition: .2s;
      &:hover{
        color: ${({ theme }) => theme.colors.info.color.light};
      }
    }
  .profile{
    flex: none;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    object-fit: cover;
    background-color: ${({ theme }) => theme.colors.primary.background.light};
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      width: 110px;
      height: 110px;
    }
  }
  .infos{
    .name{
      display: inline-flex;
      align-items: center;
      gap: .4rem;
      font-weight: bold;
      font-size: ${({ theme }) => theme.font.size.paragraphs.md[0]};
      line-height: ${({ theme }) => theme.font.size.paragraphs.md[1]};
      .icon{
        font-size: 1.2rem;
      }
    }
    .description{
      display: inline-block;
      margin-top: .5rem;
  
      font-size: ${({ theme }) => theme.font.size.paragraphs.xsm[0]};
      line-height: ${({ theme }) => theme.font.size.paragraphs.xsm[1]};
    }

  }
`