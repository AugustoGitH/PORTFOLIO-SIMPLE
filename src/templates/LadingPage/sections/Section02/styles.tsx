import styled from "styled-components";



export const Section02 = styled.section`
 width: 100%;
  display: flex;
  justify-content: center;
  padding: 50px 1rem;
  .content {
    width: ${({ theme }) => theme.limits.content};
    .experiences{
      width: 100%;
      padding: 1rem 0;
      .rectangle{
        width: 100%;
        padding: 1rem;
        text-align: center;
        background-color: ${({ theme }) => theme.colors.primary.background.light};
      }
      .rectangle.top{
        border-radius: 1rem 1rem 0 0;
      }
      .grid.last{
        border-radius: 0 0 1rem 1rem;
      }
      .grid{
        margin: .5rem 0;
        display: grid;
        gap: .5rem;
        overflow: hidden;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

        .experience{
          padding: 1rem;
          min-height: 200px;
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          position: relative;
          cursor: pointer;
          transition: .2s;
          background-color: ${({ theme }) => theme.colors.primary.background.light};
          &:hover{
            background-color: ${({ theme }) => theme.colors.light.background.main};
            color: ${({ theme }) => theme.colors.dark.color.main};
            .sub{
              color: ${({ theme }) => theme.colors.dark.color.main};
            }
          }
          h1{
            font-size: ${({ theme }) => theme.font.size.headings.h2[0]};
            line-height: ${({ theme }) => theme.font.size.headings.h2[1]}
          }
          .sup{
            text-align: center;
            font-size: ${({ theme }) => theme.font.size.paragraphs.xsm[0]};
          }
          .sup, .sub{
            font-weight: bold;
            display: inline-block;
          }
          .sub{
            position: absolute;
            bottom: .5rem;
            right: 1rem;
            transition: .2s;
            color: ${({ theme }) => theme.colors.light.color.light};
            font-size: ${({ theme }) => theme.font.size.paragraphs.xxsm[0]};
          }
        }
      }
    }
    .favorite{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 1rem 0;
      p{
        margin-top: .5rem;
        color: ${({ theme }) => theme.colors.light.color.light};
        font-weight: bold;
        font-size: ${({ theme }) => theme.font.size.paragraphs.xsm[0]};
        line-height: ${({ theme }) => theme.font.size.paragraphs.xsm[1]};
      }
    }
  }
`

interface ButtonFavoriteProps {
  favorite: boolean
}
export const ButtonFavorite = styled.button<ButtonFavoriteProps>`
  &:hover .icon{
    color: ${({ theme }) => theme.colors.light.color.main};
  }
  .icon{
    color: ${({ theme, favorite }) => favorite ? theme.colors.light.color.main : theme.colors.light.color.light};
    font-size: 1.8rem;
    transition: .2s;
  }
`