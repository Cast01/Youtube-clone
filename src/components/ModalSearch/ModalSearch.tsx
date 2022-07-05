import { Keyboard, MagnifyingGlass } from "phosphor-react";
import React, { useContext } from "react";
import { AsideSwitcherContext } from "../../Contexts/AsideSwitcher";
import { InputAndButton } from "../Header/HeaderStyle";
import { Container, Modal } from "./ModalSearchStyle";

export default function ModalSearch() {
  const { modalSearch, setModalSearch } = useContext(AsideSwitcherContext);

  return (
    <Container modalSearch={modalSearch}>
      <div className="input-button-container">
        <InputAndButton>
          <input type="text" />
          <div className="box-button-icon">
            <button>
              <MagnifyingGlass size={25} />
            </button>
            <Keyboard size={30} />
          </div>
        </InputAndButton>
      </div>
      <Modal onClick={() => setModalSearch(!modalSearch)} />
    </Container>
  );
}
