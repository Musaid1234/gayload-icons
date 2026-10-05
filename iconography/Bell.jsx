import animation from "./data/193-bell.json";
import { Lordicon } from "./player.jsx";

export function Bell(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Bell;
