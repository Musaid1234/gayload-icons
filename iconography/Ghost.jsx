import animation from "./data/2815-ghost.json";
import { Lordicon } from "./player.jsx";

export function Ghost(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Ghost;
