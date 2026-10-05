import animation from "./data/4324-fast-backward.json";
import { Lordicon } from "./player.jsx";

export function FastBackward(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default FastBackward;
