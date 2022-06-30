import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: calc(100vh - 65px);
  background: blueviolet;
  display: flex;

  @media (max-width: 1000px) {
    width: calc(100% - 65px);
  }

  @media (max-width: 700px) {
    width: 100%;
  }

  .box {
    width: 80%;
    height: 100%;

    @media (max-width: 1000px) {
      width: 100%;
    }
  }
`;
