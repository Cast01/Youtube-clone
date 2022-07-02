import Video from "../Video/Video";
import { Container } from "./VideosStyle";

export default function Videos() {
  const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <Container>
      {arr.map((x, index) => {
        return <Video key={index} />;
      })}
    </Container>
  );
}
