import Aside from "../../components/Aside/Aside";
import Categories from "../../components/Categories/Categories";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import MenuMobile from "../../components/MenuMobile/MenuMobile";
import Videos from "../../components/Videos/Videos";
import { Container } from "./HomeStyle";
import { AsideSwitcherContext } from "../../Contexts/AsideSwitcher";
import { useContext } from "react";
import ModalSearch from "../../components/ModalSearch/ModalSearch";

export default function Home() {
  const { aside } = useContext(AsideSwitcherContext);

  return (
    <Container aside={aside}>
      <Header />
      <Categories />
      <ModalSearch />
      <Main>
        <Aside />
        <div className="box">
          <Videos />
          <MenuMobile />
        </div>
      </Main>
    </Container>
  );
}
