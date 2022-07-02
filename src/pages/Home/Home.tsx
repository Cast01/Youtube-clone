import Aside from "../../components/Aside/Aside";
import ModalAside from "../../components/ModalAside/ModalAside";
import Categories from "../../components/Categories/Categories";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import MenuMobile from "../../components/MenuMobile/MenuMobile";
import Videos from "../../components/Videos/Videos";
import { Container } from "./HomeStyle";
import { AsideSwitcherContext } from "../../Contexts/AsideSwitcher";
import { useContext } from "react";

export default function Home() {
  const { aside } = useContext(AsideSwitcherContext);

  return (
    <Container aside={aside}>
      <ModalAside />
      <Header />
      <Main>
        <Aside />
        <div className="box">
          <Categories />
          <Videos />
          <MenuMobile />
        </div>
      </Main>
    </Container>
  );
}
