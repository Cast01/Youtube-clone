import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  min-width: 300px;
  height: 65px;
  background: white;

  ul {
    display: flex;
    list-style-type: none;
    height: 100%;
    width: 100%;

    li {
      width: 20%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .icon {
        font-size: 12px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
      }

      .name {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding-top: 2px;
        font-size: 12px;
      }
    }
  }

  @media (min-width: 700px) {
    display: none;
  }
`;
