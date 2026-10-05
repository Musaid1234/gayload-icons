import animation from "./data/368-anchor.json";
import { Lordicon } from "./player.jsx";

export function Anchor(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Anchor;
