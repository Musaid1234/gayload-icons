import animation from "./data/476-gamepad.json";
import { Lordicon } from "./player.jsx";

export function Gamepad(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Gamepad;
