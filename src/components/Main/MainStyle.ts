import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: calc(100vh - 65px);
  display: flex;

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
