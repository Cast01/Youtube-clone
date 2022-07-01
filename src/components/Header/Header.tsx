/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { Container } from "./HeaderStyle";
import {
  List,
  Keyboard,
  MagnifyingGlass,
  VideoCamera,
  DotsNine,
  Bell,
} from "phosphor-react";
import { YoutubeLogo } from "../YoutubeLogo/YoutubeLogo";

export default function Header() {
  return (
    <Container>
      <div className="box-1">
        <List size={25} />
        <YoutubeLogo />
      </div>
      <div className="box-2">
        <div className="box-input">
          <input type="text" />
          <div className="box-button-icon">
            <button>
              <MagnifyingGlass size={25} />
            </button>
            <Keyboard size={30} />
          </div>
        </div>
      </div>
      <div className="box-3">
        <ul>
          <li>
            <a href="#">
              <VideoCamera />
            </a>
          </li>
          <li>
            <a href="#">
              <DotsNine />
            </a>
          </li>
          <li>
            <a href="#">
              <Bell />
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
