import animation from "./data/3385-arrow-down-left.json";
import { Lordicon } from "./player.jsx";

export function ArrowDownLeft(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ArrowDownLeft;
