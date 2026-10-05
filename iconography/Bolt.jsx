import animation from "./data/451-bolt.json";
import { Lordicon } from "./player.jsx";

export function Bolt(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Bolt;
