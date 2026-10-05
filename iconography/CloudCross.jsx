import animation from "./data/7-cloud-cross.json";
import { Lordicon } from "./player.jsx";

export function CloudCross(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default CloudCross;
