import styled from "styled-components";

export const Container = styled.div`
  background: aqua;
  height: calc(100% - 50px);
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 10px 5px;
  gap: 5px;
  justify-content: flex-start;
  align-content: baseline;
  overflow: auto;

  @media (max-width: 500px) {
    justify-content: center;
  }
`;
