import animation from "./data/19-magnifier.json";
import { Lordicon } from "./player.jsx";

export function Magnifier(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Magnifier;
