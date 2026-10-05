import animation from "./data/4075-computer-mouse-simple.json";
import { Lordicon } from "./player.jsx";

export function ComputerMouseSimple(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ComputerMouseSimple;
