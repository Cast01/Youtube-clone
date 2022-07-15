import styled from "styled-components";

export const Container = styled.div`
  height: 50%;
  max-height: 290px;
  width: calc((100% / 4) - 4px);
  max-width: 250px;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  transition: 0.6s;
  background: linear-gradient(to bottom, #c9c9c9, transparent);

  &:hover {
    transform: scale(1.1, 1.1);
    background: linear-gradient(to bottom, #c9c9c9, transparent);
  }

  .youtube-card {
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 60%;
  }

  .content {
    width: 100%;
    height: 40%;
    padding: 5px;
    display: flex;

    h1 {
      font-size: 18px;
    }
    h2 {
      font-size: 14px;
    }
    h3 {
      font-size: 11px;
    }

    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }

    .texts {
      padding: 0 10px;

      span {
        display: flex;
      }
    }
  }

  @media (max-width: 1000px) {
    width: calc((100% / 3) - 4px);
  }

  @media (max-width: 700px) {
    width: calc((100% / 2) - 4px);
  }

  @media (max-width: 500px) {
    width: 250px;
  }
`;
