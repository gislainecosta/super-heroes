import styled from "styled-components";

export const Card = styled.article`
  background-color: white;
  box-shadow: 6px 6px 0px 0px rgb(0 0 0);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 86%;
  padding: 8% 0;
  margin-bottom: 12%;

  @media (min-width: 1024px) {
    box-shadow: 12px 12px 0px 0px rgb(0 0 0);
    padding: 4% 0 3% 0;
  }
`
export const CardImage = styled.img`
  width: 50%;
`
export const CardButton = styled.button`
  padding: 2% 4%;
  background-color: var(--violet);
  color: white;
  border-radius: 8px;
  margin-top: 8%;
  border: 2px solid black;

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
export const HeroName = styled.p`
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  margin: 4% 0;
  font-size: 1.2rem;

  @media (min-width: 1024px) {
    margin: 4% 0 2% 0;
  }
`
export const HeroDetail = styled.p`
  text-align: center;
`