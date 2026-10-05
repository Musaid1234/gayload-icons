import animation from "./data/194-arrows-rotate.json";
import { Lordicon } from "./player.jsx";

export function ArrowsRotate(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ArrowsRotate;
