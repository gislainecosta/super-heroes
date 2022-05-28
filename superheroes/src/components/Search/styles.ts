import styled from "styled-components";

export const SearchContainer = styled.section`
  background-color: white;
  width: 98%;
  box-shadow: 6px 6px 0px 0px rgb(0 0 0);
  padding: 2% 5%;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 1.4% 2%;
    width: 60%;
  }
`
export const SearchTitle = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 1.12rem;

  @media (min-width: 1024px) {
    font-size: 1.25rem;
  }
`
export const SearchInput = styled.input`
  border-bottom: 1px solid var(--grey);
  margin: 4% 0 2% 0;
  text-align: center;
  padding: 1% 5%;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    margin: 0;
    width: 40%;
    margin-left: 2rem;
    text-align: start;
    padding: 0.5% 1.5%;
  }
`
