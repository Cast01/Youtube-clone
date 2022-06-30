import styled from "styled-components";

export const Container = styled.aside`
  width: 65px;
  height: 100%;
  background: blue;
  display: none;

  @media (max-width: 1000px) {
    display: block;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;
