import animation from "./data/363-ratio.json";
import { Lordicon } from "./player.jsx";

export function Ratio(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Ratio;
