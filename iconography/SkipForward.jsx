import animation from "./data/4210-skip-forward.json";
import { Lordicon } from "./player.jsx";

export function SkipForward(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default SkipForward;
