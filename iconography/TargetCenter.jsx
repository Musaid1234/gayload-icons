import animation from "./data/458-target-center.json";
import { Lordicon } from "./player.jsx";

export function TargetCenter(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default TargetCenter;
