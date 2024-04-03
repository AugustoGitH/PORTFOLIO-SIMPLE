import styled from "styled-components";


export const ImageCarousel = styled.div`
  width: 100%;
  height: 300px;
  background-color: ${({ theme }) => theme.colors.primary.background.light};
  position: relative;
  overflow: hidden;
  border-radius: .5rem;
  
  .btn-slider{
    position: absolute;
    height: 100%;
    top: 0;
    padding: 0 .4rem;
    z-index: 5;
    font-size: 1.1rem;
    &:hover{
      color: ${({ theme }) => theme.colors.info.color.main}
    }
  }
  .circles-navigation{
    position: absolute;
    bottom: .4rem;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: .3rem;
    li{
      width: 5px;
      border-radius: 50%;
      height: 5px;
      background-color: ${({ theme }) => theme.colors.light.background.light};
    }
    li.current{
      background-color: ${({ theme }) => theme.colors.light.background.main};
    }
  }
 .carousel{
    width: 100%;
    height: 100%;
    display: flex;
    /* overflow: hidden; */
    video{
      object-fit: contain;
      width: 100%;
      height: 100%;
      flex: none;
      transition: .2s;
    }
    img{
      object-fit: cover;
      width: 100%;
      height: 100%;

      flex: none;
      transition: .2s;
    }
 }


`