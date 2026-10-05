import animation from "./data/747-keyboard.json";
import { Lordicon } from "./player.jsx";

export function Keyboard(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Keyboard;
