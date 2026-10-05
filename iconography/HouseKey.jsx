import animation from "./data/4230-house-key.json";
import { Lordicon } from "./player.jsx";

export function HouseKey(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default HouseKey;
