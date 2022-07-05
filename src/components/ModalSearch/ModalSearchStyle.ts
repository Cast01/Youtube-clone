import styled from "styled-components";

interface ModalSearchProps {
  modalSearch: boolean;
}

export const Container = styled.div`
  @media (min-width: 700px) {
    display: none;
  }

  @media (max-width: 700px) {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    display: ${({ modalSearch }: ModalSearchProps) =>
      modalSearch ? "block" : "none"};
    z-index: 99;

    .input-button-container {
      width: 100%;
      height: 65px;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const Modal = styled.div`
  width: 100%;
  height: calc(100vh - 65px);
  background: rgba(0, 0, 0, 0.1);
`;
