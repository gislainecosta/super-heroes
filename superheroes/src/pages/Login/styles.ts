import styled from 'styled-components';
import Balloon from "../../images/balloon.png";

export const Container = styled.div`
  width: 90vw;
  height: 36rem;
  background-image: url(${Balloon});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    width: 60vw;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    padding: 15% 14vw 17% 14vw;
  }
`;
export const Title = styled.p`
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;

  @media (min-width: 1024px) {
    grid-area: 1/1/2/3;
    font-size: 3rem;
  }
`;
export const Input = styled.input`
  margin-bottom: 0.5rem;
  padding: 2%;

  @media (min-width: 1024px) {
    align-self: center;
    justify-self: center;
    width: 94%;
    margin-bottom: 0;
    font-size: 1.1rem;
  }
`;
export const Button = styled.button`
  margin-bottom: 2rem;
  background-color: var(--red);
  color: white;
  padding: 2% 4%;
  border-radius: 16px;
  font-weight: bold;

  @media (min-width: 1024px) {
    grid-area: 3/1/4/3;
    align-self: center;
    justify-self: center;
    width: 20%;
    margin-bottom: 0;
    font-size: 1.2rem;
  }

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.8);
  }
`;