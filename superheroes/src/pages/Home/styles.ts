import styled from "styled-components";

export const HomeContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`
export const HomeContent = styled.div`
  padding: 5%;
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;

  @media (min-width: 1024px) {
    padding: 1.4% 0;
  }
`
export const CardsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 2rem 0.2rem 0 0.2rem;
  justify-items: center;
  overflow-y: scroll;

  @media (max-width: 1024px) {
    ::-webkit-scrollbar {
      display: none;
    }
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`



