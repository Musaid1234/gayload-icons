import animation from "./data/1725-person-exit.json";
import { Lordicon } from "./player.jsx";

export function PersonExit(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default PersonExit;
