import animation from "./data/86-compass.json";
import { Lordicon } from "./player.jsx";

export function Compass(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Compass;
