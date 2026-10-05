import animation from "./data/4127-smartphone-dock.json";
import { Lordicon } from "./player.jsx";

export function SmartphoneDock(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default SmartphoneDock;
