import animation from "./data/2320-arrows-rotate-3d.json";
import { Lordicon } from "./player.jsx";

export function ArrowsRotate3d(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ArrowsRotate3d;
