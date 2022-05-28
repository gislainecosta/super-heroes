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

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: start;
    justify-content: center;
    padding: 1.4% 0;
  }
`;