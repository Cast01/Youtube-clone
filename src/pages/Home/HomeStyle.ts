import styled from "styled-components";

interface HomeProps {
  aside: "true" | "false" | "none" | (() => void) | undefined;
}

export const Container = styled.div`
  min-height: 100vh;
  width: clamp(300px, 100vw, 1300px);
  margin: 0 auto;

  .box {
    width: ${({ aside }: HomeProps) =>
      aside === "true" ? "100%" : aside === "false" ? "calc(100% - 65px)" : ""};
    background: #f1f1f1;
    overflow-x: hidden;

    @media (max-width: 700px) {
      width: 100%;
    }
  }
`;
