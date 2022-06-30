import Aside from "../../components/Aside/Aside";
import AsideCompacted from "../../components/AsideCompacted/AsideCompacted";
import Categories from "../../components/Categories/Categories";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import MenuMobile from "../../components/MenuMobile/MenuMobile";
import Videos from "../../components/Videos/Videos";
import { Container } from "./HomeStyle";

export default function Home() {
  return (
    <Container>
      <Header />
      <Main>
        <Aside />
        <AsideCompacted />
        <div className="box">
          <Categories />
          <Videos />
          <MenuMobile />
        </div>
      </Main>
    </Container>
  );
}
