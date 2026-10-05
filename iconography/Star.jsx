import animation from "./data/237-star.json";
import { Lordicon } from "./player.jsx";

export function Star(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Star;
