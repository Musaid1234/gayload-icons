import animation from "./data/11-link.json";
import { Lordicon } from "./player.jsx";

export function Link(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Link;
