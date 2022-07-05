/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { Container, InputAndButton } from "./HeaderStyle";
import {
  List,
  Keyboard,
  MagnifyingGlass,
  VideoCamera,
  DotsNine,
  Bell,
  Screencast,
} from "phosphor-react";
import { YoutubeLogo } from "../YoutubeLogo/YoutubeLogo";
import { AsideSwitcherContext } from "../../Contexts/AsideSwitcher";
import { useContext } from "react";

export default function Header() {
  const { aside, setAside, setModalSearch, modalSearch } =
    useContext(AsideSwitcherContext);

  function asideSwitcher() {
    if (aside === "true") {
      setAside("false");
    } else if ("false") {
      setAside("true");
    }
  }

  return (
    <Container>
      <div className="box-1">
        <List size={25} onClick={asideSwitcher} />
        <YoutubeLogo />
      </div>
      <div className="box-2">
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
      <div className="box-3">
        <ul>
          <li>
            <a href="#">
              <div className="desktop-tablet">
                <VideoCamera />
              </div>
              <div className="mobile">
                <Screencast />
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="desktop-tablet">
                <DotsNine />
              </div>
              <div className="mobile">
                <Bell />
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="desktop-tablet">
                <Bell />
              </div>
              <div className="mobile">
                <MagnifyingGlass onClick={() => setModalSearch(!modalSearch)} />
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="https://github.com/Cast01.png" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </Container>
  );
}
