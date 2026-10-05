import animation from "./data/4238-volume-mute.json";
import { Lordicon } from "./player.jsx";

export function VolumeMute(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default VolumeMute;
