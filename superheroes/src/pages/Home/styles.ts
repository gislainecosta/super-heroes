import styled from "styled-components";

export const HomeContainer = styled.div`
  padding: 5%;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const SearchSection = styled.section`
  background-color: white;
  width: 90%;
  box-shadow: 6px 6px 0px 0px rgb(0 0 0);
  margin-top: 1rem;
  padding: 2% 5%;
  display: flex;
  flex-direction: column;
`
export const SearchTitle = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 1.12rem;
`
export const SearchInput = styled.input`
  border-bottom: 1px solid var(--grey);
  margin: 4% 0 2% 0;
`
