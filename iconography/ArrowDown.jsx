import animation from "./data/2755-arrow-down.json";
import { Lordicon } from "./player.jsx";

export function ArrowDown(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ArrowDown;
