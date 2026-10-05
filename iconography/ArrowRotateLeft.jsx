import animation from "./data/4190-arrow-rotate-left.json";
import { Lordicon } from "./player.jsx";

export function ArrowRotateLeft(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ArrowRotateLeft;
