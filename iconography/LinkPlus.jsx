import animation from "./data/4016-link-plus.json";
import { Lordicon } from "./player.jsx";

export function LinkPlus(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default LinkPlus;
