import animation from "./data/472-hourglass.json";
import { Lordicon } from "./player.jsx";

export function Hourglass(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Hourglass;
