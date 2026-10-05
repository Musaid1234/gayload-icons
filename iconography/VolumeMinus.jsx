import animation from "./data/4337-volume-minus.json";
import { Lordicon } from "./player.jsx";

export function VolumeMinus(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default VolumeMinus;
