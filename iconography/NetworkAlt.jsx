import animation from "./data/1307-network-alt.json";
import { Lordicon } from "./player.jsx";

export function NetworkAlt(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default NetworkAlt;
