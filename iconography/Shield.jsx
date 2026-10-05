import animation from "./data/337-shield.json";
import { Lordicon } from "./player.jsx";

export function Shield(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Shield;
