import animation from "./data/4352-hand-drop-sparkles.json";
import { Lordicon } from "./player.jsx";

export function HandDropSparkles(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default HandDropSparkles;
