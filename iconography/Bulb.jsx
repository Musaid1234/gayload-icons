import animation from "./data/36-bulb.json";
import { Lordicon } from "./player.jsx";

export function Bulb(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Bulb;
