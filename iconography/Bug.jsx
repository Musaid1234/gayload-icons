import animation from "./data/110-bug.json";
import { Lordicon } from "./player.jsx";

export function Bug(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Bug;
