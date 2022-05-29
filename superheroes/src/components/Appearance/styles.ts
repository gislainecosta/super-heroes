import styled from "styled-components";

export const AppearanceContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 2%;

  @media (min-width: 1024px) {
  }
`;

export const Detail = styled.article`
  display: flex;
  align-items: center;
  margin-top: 8%;

  @media (min-width: 1024px) {
  }
`;

export const Icon = styled.img`
  width: 2rem;
  margin-right: 4%;

  @media (min-width: 1024px) {
  }
`;