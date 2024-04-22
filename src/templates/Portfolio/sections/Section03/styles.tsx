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
  }
`;

export const PageCurrentContent = styled.div`
  width: calc(100% - 600px);
  padding: 3rem 10%;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: calc(100% - 300px);
    padding: 2rem 1rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
  h2 span,
  h3 span {
    color: ${({ theme }) => theme.colors.info.color.main};
  }
  strong.tech{
    
    background-color: ${({ theme }) => theme.colors.secondary.background.main};
    padding: .2rem .3rem;
    border-radius: .2rem;
  }
  a {
    display: inline-flex;
    text-decoration: underline;
    gap: 0.2rem;
    align-items: center;
    font-weight: 600;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.info.color.main};
    font-size: ${({ theme }) => theme.font.size.paragraphs.sm[0]};
    line-height: ${({ theme }) => theme.font.size.paragraphs.sm[1]};
    transition: 0.2s;
    &:hover {
      color: ${({ theme }) => theme.colors.info.color.light};
    }
  }
  nav {
    margin: 2rem 0;
    width: 100%;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      gap: 0.5rem;
    }
  }
  p {
    margin: 1rem 0;
    font-size: ${({ theme }) => theme.font.size.paragraphs.sm[0]};
    line-height: ${({ theme }) => theme.font.size.paragraphs.md[1]};

  }

  .controller-navigation {
    width: 100%;
    display: flex;
    gap: 0.5rem;
    margin: 2rem 0;
    user-select: none;
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      flex-wrap: wrap;
    }
    button:nth-child(1) {
      text-align: start;
    }
    button:nth-child(2) {
      text-align: end;
    }
    button {
      width: 50%;
      padding: 0.6rem 1rem;
      border-radius: 0.5rem;
      border: 1px solid ${({ theme }) => theme.colors.secondary.background.main};
      transition: 0.2s;
      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        width: 100%;
      }
      &:hover {
        border: 1px solid ${({ theme }) => theme.colors.info.color.main};
      }
      span {
        width: 100%;
        display: inline-block;
      }
      span:nth-child(1) {
        color: ${({ theme }) => theme.colors.light.color.light};
        font-weight: bold;
        line-height: ${({ theme }) => theme.font.size.paragraphs.xxsm[1]};
        font-size: ${({ theme }) => theme.font.size.paragraphs.xxsm[0]};
      }
      span:nth-child(2) {
        color: ${({ theme }) => theme.colors.info.color.main};
        font-weight: bold;
        line-height: ${({ theme }) => theme.font.size.paragraphs.sm[1]};
        font-size: ${({ theme }) => theme.font.size.paragraphs.sm[0]};
      }
    }
  }
`;
export const MenuVerticalLeft = styled.div`
  overflow: auto;
  padding: 3rem 1rem;
  position: sticky;
  top: 60px;
  width: 300px;
  height: 600px;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    li.current {
      color: ${({ theme }) => theme.colors.info.color.main};
    }

    li {
      color: ${({ theme }) => theme.colors.light.color.light};
      font-size: ${({ theme }) => theme.font.size.paragraphs.xsm[0]};
      line-height: ${({ theme }) => theme.font.size.paragraphs.xsm[1]};
      transition: 0.2s;
      font-weight: 500;
      cursor: pointer;
      &:hover {
        color: ${({ theme }) => theme.colors.info.color.main};
      }
    }
  }
`;
export const MenuVerticalRight = styled.div`
  overflow: auto;
  padding: 3rem 1rem;
  position: sticky;
  top: 60px;
  width: 300px;
  height: 600px;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding-left: 1rem;
    border-left: 1px solid
      ${({ theme }) => theme.colors.secondary.background.main};
    li.primary {
      color: ${({ theme }) => theme.colors.light.color.main};
      font-weight: bold;
    }
    li.current {
      position: relative;

      color: ${({ theme }) => theme.colors.light.color.main};

      &::after {
        content: "";
        border-radius: 0.4rem;
        position: absolute;
        top: 0;
        left: calc((1rem + 1px) * -1);
        width: 2px;
        height: 100%;
        background-color: ${({ theme }) => theme.colors.info.background.main};
        pointer-events: none;
      }
    }
    li {
      color: ${({ theme }) => theme.colors.light.color.light};
      font-size: ${({ theme }) => theme.font.size.paragraphs.xsm[0]};
      line-height: ${({ theme }) => theme.font.size.paragraphs.xsm[1]};
      transition: 0.2s;
      cursor: default;
    }
  }
`;
