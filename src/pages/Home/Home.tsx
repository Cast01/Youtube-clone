import Aside from "../../components/Aside/Aside";
import Categories from "../../components/Categories/Categories";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import MenuMobile from "../../components/MenuMobile/MenuMobile";
import Videos from "../../components/Videos/Videos";
import { Container } from "./HomeStyle";
import { AsideSwitcherContext } from "../../Contexts/AsideSwitcher";
import { useContext, useEffect, useState } from "react";
import ModalSearch from "../../components/ModalSearch/ModalSearch";

const token = "llFK33SAH0VMRZzBTR2HXg";

export default function Home() {
  const { aside } = useContext(AsideSwitcherContext);

  const [arr, setArr] = useState([]);

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?key=AIzaSyByK88bnT__g4Vw5JahpfqVkGN1rLxfM-w`
    )
      .then((resp) => resp.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container aside={aside}>
      <Header />
      <ModalSearch />
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
