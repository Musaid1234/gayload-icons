import animation from "./data/1389-grid-stream.json";
import { Lordicon } from "./player.jsx";

export function GridStream(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default GridStream;
