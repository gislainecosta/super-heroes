import styled from "styled-components";

export const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffffffb1;
`
export const Loading = styled.img`
  width: 70vw;

  @media (min-width: 1024px) {
    width: 30vw;
  }
`;

export const Title = styled.p`
  margin-top: 6%;
  font-weight: bold;
  text-align: center;
  font-size: 2.2rem;
  color: var(--red);
  text-shadow: 2px 2px black;

  @media (min-width: 1024px) {
    margin-top: 2%;
    font-size: 2.6rem;
  }
`;