import animation from "./data/132-volume-level-1.json";
import { Lordicon } from "./player.jsx";

export function VolumeLevel1(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default VolumeLevel1;
