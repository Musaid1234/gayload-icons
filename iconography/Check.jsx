import animation from "./data/37-check.json";
import { Lordicon } from "./player.jsx";

export function Check(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Check;
