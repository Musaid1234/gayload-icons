import animation from "./data/1043-signal.json";
import { Lordicon } from "./player.jsx";

export function Signal(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Signal;
