import animation from "./data/4209-skip-back.json";
import { Lordicon } from "./player.jsx";

export function SkipBack(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default SkipBack;
