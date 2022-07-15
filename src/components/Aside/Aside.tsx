import { useContext, useEffect, useState } from "react";
import { AsideSwitcherContext } from "../../Contexts/AsideSwitcher";
import { Container } from "./AsideStyle";
import {
  House,
  Compass,
  Airplay,
  ApplePodcastsLogo,
  Books,
} from "phosphor-react";

import { AsideType } from "../../Contexts/AsideSwitcher";
import { useWindowDimensions } from "../../Hooks/useWindowDimensions";

export default function Aside() {
  const { width } = useWindowDimensions();

  const [aside, setAside] = useState<AsideType>(() => {
    if (width >= 1000) {
      return "true";
    } else if (width >= 700 && width < 1000) {
      return "false";
    } else if (width < 700) {
      return "none";
    }
  });

  useEffect(() => {
    setAside(() => {
      if (width >= 1000) {
        return "true";
      } else if (width >= 700 && width < 1000) {
        return "false";
      } else if (width < 700) {
        return "none";
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [aside]);

  return (
    <Container>
      {aside === "true" ? (
        <div className="aside">
          <ul>
            <li>
              <div className="icon">
                <Compass />
              </div>
              <div className="name">
                <span>TestTestTestTestTestTestTestTestTest</span>
              </div>
            </li>
            <li>
              <div className="icon">
                <Compass />
              </div>
              <div className="name">Test</div>
            </li>
            <li>
              <div className="icon">
                <Compass />
              </div>
              <div className="name">Test</div>
            </li>
            <li>
              <div className="icon">
                <Compass />
              </div>
              <div className="name">Test</div>
            </li>
          </ul>
          <hr />
          <ul>
            <li>
              <div className="icon">
                <Compass />
              </div>
              <div className="name">
                <span>TestTestTestTestTestTestTestTestTest</span>
              </div>
            </li>
            <li>
              <div className="icon">
                <Compass />
              </div>
              <div className="name">Test</div>
            </li>
            <li>
              <div className="icon">
                <Compass />
              </div>
              <div className="name">Test</div>
            </li>
            <li>
              <div className="icon">
                <Compass />
              </div>
              <div className="name">Test</div>
            </li>
          </ul>
          <hr />
          <ul>
            <div className="title">
              <h2>INSCRICÕES</h2>
            </div>
            <li>
              <div className="image">
                <img src="https://github.com/Cast01.png" alt="" />
              </div>
              <div className="name">
                <span>TestTestTestTestTestTestTestTestTest</span>
              </div>
            </li>
            <li>
              <div className="image">
                <img src="https://github.com/Cast01.png" alt="" />
              </div>
              <div className="name">Test</div>
            </li>
            <li>
              <div className="image">
                <img src="https://github.com/Cast01.png" alt="" />
              </div>
              <div className="name">Test</div>
            </li>
            <li>
              <div className="image">
                <img src="https://github.com/Cast01.png" alt="" />
              </div>
              <div className="name">Test</div>
            </li>
            <li>
              <div className="image">
                <img src="https://github.com/Cast01.png" alt="" />
              </div>
              <div className="name">Test</div>
            </li>
            <li>
              <div className="image">
                <img src="https://github.com/Cast01.png" alt="" />
              </div>
              <div className="name">Test</div>
            </li>
            <li>
              <div className="image">
                <img src="https://github.com/Cast01.png" alt="" />
              </div>
              <div className="name">Test</div>
            </li>
            <li>
              <div className="image">
                <img src="https://github.com/Cast01.png" alt="" />
              </div>
              <div className="name">Test</div>
            </li>
            <li>
              <div className="image">
                <img src="https://github.com/Cast01.png" alt="" />
              </div>
              <div className="name">Test</div>
            </li>
          </ul>
          <hr />
          <ul>
            <div className="title">
              <h2>MAIS DO YOUTUBE</h2>
            </div>
            <li>
              <div className="icon">
                <Compass />
              </div>
              <div className="name">
                <span>TestTestTestTestTestTestTestTestTest</span>
              </div>
            </li>
            <li>
              <div className="icon">
                <Compass />
              </div>
              <div className="name">Test</div>
            </li>
            <li>
              <div className="icon">
                <Compass />
              </div>
              <div className="name">Test</div>
            </li>
            <li>
              <div className="icon">
                <Compass />
              </div>
              <div className="name">Test</div>
            </li>
            <li>
              <div className="icon">
                <Compass />
              </div>
              <div className="name">Test</div>
            </li>
            <li>
              <div className="icon">
                <Compass />
              </div>
              <div className="name">Test</div>
            </li>
          </ul>
          <hr />
          <ul>
            <li>
              <div className="icon">
                <Compass />
              </div>
              <div className="name">
                <span>TestTestTestTestTestTestTestTestTest</span>
              </div>
            </li>
            <li>
              <div className="icon">
                <Compass />
              </div>
              <div className="name">Test</div>
            </li>
            <li>
              <div className="icon">
                <Compass />
              </div>
              <div className="name">Test</div>
            </li>
            <li>
              <div className="icon">
                <Compass />
              </div>
              <div className="name">Test</div>
            </li>
          </ul>
          <hr />
          <ul className="others">
            <li>
              <span>
                <span>Sobre</span>
              </span>
              <span>
                <span>Imprensa</span>
              </span>
            </li>
            <li>
              <span>
                <span>Direitos autorais</span>
              </span>
            </li>
            <li>
              <span>
                <span>Entre em contato</span>
              </span>
            </li>
            <li>
              <span>
                <span>Criadores de conteúdo</span>
              </span>
            </li>
            <li>
              <span>
                <span>Publicidade</span>
              </span>
              <span>
                <span>Desenvolvedores</span>
              </span>
            </li>
            <li className="margin-top">
              <span>
                <span>termos</span>
              </span>
              <span>
                <span>Privacidade</span>
              </span>
            </li>
            <li>
              <span>
                <span>Politica e segurança</span>
              </span>
            </li>
            <li>
              <span>
                <span>Como funciona o youtube</span>
              </span>
            </li>
            <li>
              <span>
                <span>Testar os novos recursos</span>
              </span>
            </li>
          </ul>
        </div>
      ) : aside === "false" ? (
        <div className="aside-compacted">
          <ul>
            <li>
              <div className="icon">
                <House size={25} />
              </div>
              <div className="name">Início</div>
            </li>
            <li>
              <div className="icon">
                <Compass size={25} />
              </div>
              <div className="name">Explorar</div>
            </li>
            <li>
              <div className="icon">
                <Airplay size={25} />
              </div>
              <div className="name">Shorts</div>
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
        </div>
      ) : aside === "none" ? (
        <></>
      ) : (
        <></>
      )}
    </Container>
  );
}
