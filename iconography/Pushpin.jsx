import animation from "./data/754-pushpin.json";
import { Lordicon } from "./player.jsx";

export function Pushpin(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Pushpin;
