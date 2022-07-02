import styled from "styled-components";

interface HomeProps {
  aside: boolean;
}

export const Container = styled.div`
  min-height: 100vh;
  width: clamp(300px, 100vw, 1300px);
  margin: 0 auto;

  .box {
    width: ${({ aside }: HomeProps) => (aside ? "100%" : "calc(100vw - 65px)")};
    background: #f1f1f1;

    @media (max-width: 700px) {
      width: 100%;
    }
  }
`;
