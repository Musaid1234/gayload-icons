import animation from "./data/227-arrow-rotate-right.json";
import { Lordicon } from "./player.jsx";

export function ArrowRotateRight(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ArrowRotateRight;
