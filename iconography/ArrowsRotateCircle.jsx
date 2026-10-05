import animation from "./data/2642-arrows-rotate-circle.json";
import { Lordicon } from "./player.jsx";

export function ArrowsRotateCircle(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ArrowsRotateCircle;
