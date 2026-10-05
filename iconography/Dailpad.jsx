import animation from "./data/3116-dailpad.json";
import { Lordicon } from "./player.jsx";

export function Dailpad(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Dailpad;
