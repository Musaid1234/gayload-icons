import animation from "./data/397-toggle-left.json";
import { Lordicon } from "./player.jsx";

export function ToggleLeft(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ToggleLeft;
