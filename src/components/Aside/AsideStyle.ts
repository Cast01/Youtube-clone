import styled from "styled-components";

interface AsideProps {
  aside: boolean;
}

export const Container = styled.aside`
  ${({ aside }: AsideProps) =>
    aside
      ? ".aside {width: 200px;height: 100%;"
      : ".aside-compacted {width: 65px;height: 100%;background: white;ul {width: 100%;display: flex;flex-direction: column;justify-content: flex-start;li {width: 100%;height: 65px; border: 1px solid black;}}}"}

  @media (max-width: 700px) {
    .aside {
      display: none;
    }

    .aside-compacted {
      display: none;
    }
  }
`;
