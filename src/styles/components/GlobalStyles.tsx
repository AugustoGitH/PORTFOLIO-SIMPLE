
import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }
  html{
    scroll-behavior: smooth;
  }
  button, a{
    all: unset;
    box-sizing: border-box;
    cursor: pointer;
  }

  code{
    word-wrap: break-word;
  }
  a{
    font-size: inherit;
  }
  hr{
    margin: 2rem 0;
    width: 100%;
    height: 1px;
    border: none;
    background-color: ${({ theme }) => theme.colors.secondary.background.main};

  }
  code{
    background-color: ${({ theme }) => theme.colors.secondary.background.main};
    padding: .2rem .4rem;
    border-radius: .4rem;
  }
  body{
    background: ${({ theme }) => theme.colors.primary.background.main};
    font-family:  ${({ theme }) => theme.font.family.Poppins};
    color: ${({ theme }) => theme.colors.light.color.main}
  }
  h1{
    font-size: ${({ theme }) => theme.font.size.headings.h1[0]};
    line-height: ${({ theme }) => theme.font.size.headings.h1[1]};
  }
  h2{
    font-size: ${({ theme }) => theme.font.size.headings.h2[0]};
    line-height: ${({ theme }) => theme.font.size.headings.h2[1]};
  }
  h3{
    font-size: ${({ theme }) => theme.font.size.headings.h3[0]};
    line-height: ${({ theme }) => theme.font.size.headings.h3[1]};
  }
  h4{
    font-size: ${({ theme }) => theme.font.size.headings.h4[0]};
    line-height: ${({ theme }) => theme.font.size.headings.h4[1]};
  }
  p{
    font-family:  ${({ theme }) => theme.font.family.Roboto};
    font-size: ${({ theme }) => theme.font.size.paragraphs.sm[0]};
    line-height: ${({ theme }) => theme.font.size.paragraphs.sm[1]};
  }
`