import animation from "./data/220-arrows-right-left.json";
import { Lordicon } from "./player.jsx";

export function ArrowsRightLeft(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ArrowsRightLeft;
