import animation from "./data/219-arrows-up-down.json";
import { Lordicon } from "./player.jsx";

export function ArrowsUpDown(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ArrowsUpDown;
