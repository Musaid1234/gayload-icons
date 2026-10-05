import animation from "./data/478-desktop.json";
import { Lordicon } from "./player.jsx";

export function Desktop(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Desktop;
