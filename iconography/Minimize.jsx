import animation from "./data/4122-minimize.json";
import { Lordicon } from "./player.jsx";

export function Minimize(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Minimize;
