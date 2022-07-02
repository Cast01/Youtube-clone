import { Container } from "./VideoStyle";
import youtubeThumbnail from "../../assets/images/youtubeThumbnail.jpg";

export default function Video() {
  return (
    <Container>
      <img src={youtubeThumbnail} alt="" />
      <div className="content">
        <img src="https://github.com/Cast01.png" alt="" />
        <div className="texts">
          <h1>Título</h1>
          <h2>Canal</h2>
          <h3>views • time</h3>
        </div>
      </div>
    </Container>
  );
}
