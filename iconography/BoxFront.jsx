import animation from "./data/3570-box-front.json";
import { Lordicon } from "./player.jsx";

export function BoxFront(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default BoxFront;
