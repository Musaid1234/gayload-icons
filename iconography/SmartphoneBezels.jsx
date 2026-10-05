import animation from "./data/2807-smartphone-bezels.json";
import { Lordicon } from "./player.jsx";

export function SmartphoneBezels(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default SmartphoneBezels;
