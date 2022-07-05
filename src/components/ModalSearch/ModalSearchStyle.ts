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
    bottom: 0;
    left: 0;
    right: 0;
    display: ${({ modalSearch }: ModalSearchProps) =>
      modalSearch ? "block" : "none"};

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
  height: calc(100% - 65px);
  background: rgba(0, 0, 0, 0.1);
  z-index: 99;
`;
