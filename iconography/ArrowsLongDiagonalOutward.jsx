import animation from "./data/4083-arrows-long-diagonal-outward.json";
import { Lordicon } from "./player.jsx";

export function ArrowsLongDiagonalOutward(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ArrowsLongDiagonalOutward;
