import animation from "./data/69-eye.json";
import { Lordicon } from "./player.jsx";

export function Eye(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Eye;
