import styled from "styled-components";

export const Container = styled.header`
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
    position: relative;

    @media (max-width: 700px) {
      width: 50%;
    }

    svg {
      position: absolute;
    }

    .youtubeSVG {
      width: 150px;
      height: 25px;
      left: 40px;
      cursor: pointer;

      @media (max-width: 700px) {
        width: 90px;
        left: 15px;
      }
    }

    svg:first-child {
      cursor: pointer;
      left: 15px;

      @media (max-width: 700px) {
        display: none;
      }
    }
  }

  .box-2 {
    display: flex;
    justify-content: center;
    align-items: conter;
    width: calc(100vw - 500px);

    @media (max-width: 700px) {
      display: none;
    }
  }

  .box-3 {
    width: 250px;
    height: 100%;

    @media (max-width: 700px) {
      width: 50%;
    }

    ul {
      display: flex;
      height: 100%;
      list-style-type: none;
      justify-content: space-evenly;
      align-items: center;

      li {
        a {
          @media (min-width: 700px) {
            .mobile {
              display: none;
            }

            .desktop-tablet {
              svg {
                width: 25px;
                height: 25px;
                color: black;

                @media (max-width: 370px) {
                  width: 20px;
                  height: 20px;
                }
              }
            }
          }

          @media (max-width: 700px) {
            .desktop-tablet {
              display: none;
            }

            .mobile {
              svg {
                width: 25px;
                height: 25px;
                color: black;

                @media (max-width: 370px) {
                  width: 20px;
                  height: 20px;
                }
              }
            }
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

export const InputAndButton = styled.div`
  display: flex;
  width: 80%;
  align-items: center;
  max-width: 700px;

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
      cursor: pointer;
    }
  }
`;
