import animation from "./data/2474-sparkles.json";
import { Lordicon } from "./player.jsx";

export function Sparkles(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Sparkles;
