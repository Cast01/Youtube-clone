import styled from "styled-components";

export const Container = styled.div`
  background: chartreuse;
  height: 50%;
  max-height: 250px;
  width: calc((100% / 4) - 4px);

  @media (max-width: 1000px) {
    width: calc((100% / 3) - 4px);
  }

  @media (max-width: 700px) {
    width: calc((100% / 2) - 4px);
  }

  @media (max-width: 500px) {
    width: 300px;
  }
`;
