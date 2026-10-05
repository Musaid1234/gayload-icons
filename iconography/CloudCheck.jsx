import animation from "./data/386-cloud-check.json";
import { Lordicon } from "./player.jsx";

export function CloudCheck(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default CloudCheck;
