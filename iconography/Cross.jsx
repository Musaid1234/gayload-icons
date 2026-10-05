import animation from "./data/38-cross.json";
import { Lordicon } from "./player.jsx";

export function Cross(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Cross;
