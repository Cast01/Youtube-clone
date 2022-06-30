import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  min-width: 300px;
  height: 65px;
  background: violet;

  @media (min-width: 700px) {
    display: none;
  }
`;
