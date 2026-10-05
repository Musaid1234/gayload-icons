import animation from "./data/4121-expand.json";
import { Lordicon } from "./player.jsx";

export function Expand(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Expand;
