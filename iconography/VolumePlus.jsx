import animation from "./data/4336-volume-plus.json";
import { Lordicon } from "./player.jsx";

export function VolumePlus(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default VolumePlus;
