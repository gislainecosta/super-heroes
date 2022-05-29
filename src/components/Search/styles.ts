import styled from "styled-components";

export const SearchContainer = styled.section`
  background-color: white;
  width: 98%;
  box-shadow: 6px 6px 0px 0px rgb(0 0 0);
  padding: 2% 5%;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: 3fr 1fr;

  @media (min-width: 1024px) {
    align-items: center;
    justify-content: center;
    padding: 1.4% 2%;
    width: 60%;
    display: flex;
  }
`;
export const SearchTitle = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 1.12rem;

  @media (max-width: 1024px) {
    grid-area: 1/1/2/3;
  }

  @media (min-width: 1024px) {
    font-size: 1.25rem;
  }
`;
export const SearchInput = styled.input`
  border-bottom: 1px solid var(--grey);
  margin: 4% 8% 2% 0;
  text-align: center;
  padding: 1% 5%;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    width: 34%;
    margin: 0 1rem 0 2rem;
    text-align: start;
    padding: 0.5% 1.5%;
  }
`;

export const Button = styled.button`
  background-color: var(--yellow);
  padding: 1% 4%;
  border-radius: 16px;
  font-weight: bold;
  border: 2px solid black;

  @media (min-width: 1024px) {
    align-self: center;
    justify-self: center;
    width: 12%;
    margin-bottom: 0;
    font-size: 1rem;
    padding: 0.5% 0;

    &:hover {
      transform: scale(1.1);
    }

    &:active {
      transform: scale(0.8);
    }
  }
`;
