import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fcb0007e;
  background-size: 10px 10px;
  background-image: repeating-linear-gradient(
    45deg,
    #ffc7459b 0,
    #ffc745a2 1px,
    #fcb0009c 0,
    #fcb0008e 50%
  );
`
export const Modal = styled.section`
  background-color: #ffffffff;
  box-shadow: 12px 12px 0px 0px rgb(0 0 0);
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  max-height: 94vh;
`
export const ModalHeader = styled.section`
  position: relative;
  text-align: center;
`
export const Image = styled.img`
  width: 80%;
  margin: 0 auto;
`
export const HeroName = styled.p`
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  margin: 6% 0;
  font-size: 1.6rem;

  @media (min-width: 1024px) {
    margin: 4% 0 2% 0;
  }
`
export const ModalContent = styled.section`
  width: 100%;
`
export const TabsController = styled.section`
  display: flex;
  font-weight: bold;
  border-bottom: 1px solid black;
  width: 100%;
  justify-content: space-between;
  padding: 0 2% 2% 2%;
`
export const TabsContent = styled.section`
  padding: 1rem;
`
export const Button = styled.button`
  width: 3rem;
  height: 3rem;
  background-color: var(--violet);
  color: white;
  border-radius: 50%;
  border: 2px solid black;
  position: absolute;
  top: -2rem;
  right: -2rem;
  z-index: 3;
  font-size: 1.8rem;

  @media (min-width: 1024px) {
    margin-top: 4%;
  }

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.8);
  }
`
