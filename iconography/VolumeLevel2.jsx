import animation from "./data/131-volume-level-2.json";
import { Lordicon } from "./player.jsx";

export function VolumeLevel2(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default VolumeLevel2;
