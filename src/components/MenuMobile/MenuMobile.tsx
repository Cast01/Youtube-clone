import {
  Airplay,
  ApplePodcastsLogo,
  Books,
  House,
  PlusCircle,
} from "phosphor-react";
import { Container } from "./MenuMobileStyle";

export default function MenuMobile() {
  return (
    <Container>
      <ul>
        <li>
          <div className="icon">
            <House size={25} />
          </div>
          <div className="name">Início</div>
        </li>
        <li>
          <div className="icon">
            <Airplay size={25} />
          </div>
          <div className="name">Shorts</div>
        </li>
        <li>
          <div className="iconPlus">
            <PlusCircle size={50} />
          </div>
        </li>
        <li>
          <div className="icon">
            <ApplePodcastsLogo size={25} />
          </div>
          <div className="name">Inscrições</div>
        </li>
        <li>
          <div className="icon">
            <Books size={25} />
          </div>
          <div className="name">Biblioteca</div>
        </li>
      </ul>
    </Container>
  );
}
