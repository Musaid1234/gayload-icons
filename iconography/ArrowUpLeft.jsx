import animation from "./data/3383-arrow-up-left.json";
import { Lordicon } from "./player.jsx";

export function ArrowUpLeft(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ArrowUpLeft;
