import styled from "styled-components";

export const Container = styled.header`
  background: #f1f1f1;
  width: 100%;
  height: 65px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  .box-1 {
    width: 250px;
    display: flex;
    justify-content: center;
    align-items: center;

    .youtubeSVG {
      width: 150px;
      height: 25px;
      margin-left: 20px;
    }
  }

  .box-2 {
    display: flex;
    justify-content: center;
    align-items: conter;
    width: calc(100vw - 500px);

    .box-input {
      display: flex;
      width: 80%;
      align-items: center;

      input {
        height: 35px;
        width: calc(100% - 70px);
        outline: none;
      }

      .box-button-icon {
        position: relative;

        button {
          width: 70px;
          height: 35px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 0 4px 4px 0;
          border: 1px solid #878787;
          border-left: 0px;
        }

        > svg {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: -35px;
        }
      }
    }
  }

  .box-3 {
    width: 250px;
    height: 100%;

    ul {
      display: flex;
      height: 100%;
      list-style-type: none;
      justify-content: space-evenly;
      align-items: center;

      li {
        a {
          svg {
            width: 25px;
            height: 25px;
            color: black;
          }
          img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
          }
        }
      }
    }
  }
`;
