import styled from "styled-components";

export const Container = styled.aside`
  .aside {
    width: 200px;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;

    hr {
      margin: 10px auto;
      width: 90%;
    }

    .others {
      .margin-top {
        margin-top: 10px;
      }

      li {
        font-size: 12px;
        height: 17px;
        padding-left: 15px;
        cursor: default;

        &:hover {
          background: #fff;
        }

        > span {
          span {
            cursor: pointer;

            &:hover {
              background: #d1d1d1;
            }
          }
        }

        span {
          &:nth-child(2) {
            margin-left: 15px;
          }
        }
      }
    }

    ul {
      .title {
        padding-bottom: 10px;
        color: #878787;
        padding-left: 15px;

        h2 {
          font-size: 17px;
        }
      }

      li {
        display: flex;
        width: 100%;
        height: 35px;
        transition: 0.3s;
        cursor: pointer;

        &:hover {
          background: #d1d1d1;
        }

        .image {
          width: 25%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            width: 25px;
            height: 25px;
            border-radius: 50%;
          }
        }

        .icon {
          width: 25%;
          height: 100%;
          font-size: 28px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .name {
          width: 75%;
          height: 100%;
          padding-right: 10px;
          display: flex;
          align-items: center;

          span {
            display: block;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }

  .aside-compacted {
    width: 100px;
    height: 100%;
    background: white;

    ul {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      list-style-type: none;

      li {
        width: 100%;
        height: 65px;
        cursor: pointer;
        transition: 0.3s;

        &:hover {
          background: #d1d1d1;
        }

        .icon {
          width: 100%;
          height: 60%;
          display: flex;
          justify-content: center;
          align-items: flex-end;
        }

        .name {
          width: 100%;
          height: 40%;
          display: flex;
          padding-top: 3px;
          justify-content: center;
          align-items: flex-start;
          font-size: 13px;
        }
      }
    }
  }

  @media (max-width: 700px) {
    .aside {
      display: none;
    }

    .aside-compacted {
      display: none;
    }
  }
`;
