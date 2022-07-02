import { useContext } from "react";
import { AsideSwitcherContext } from "../../Contexts/AsideSwitcher";
import { Container } from "./AsideStyle";

export default function Aside() {
  const { aside } = useContext(AsideSwitcherContext);

  return (
    <Container aside={aside}>
      <div className="aside"></div>
      <div className="aside-compacted">
        <ul>
          <li>asd</li>
          <li>asd</li>
          <li>asd</li>
          <li>asd</li>
          <li>asd</li>
        </ul>
      </div>
    </Container>
  );
}
