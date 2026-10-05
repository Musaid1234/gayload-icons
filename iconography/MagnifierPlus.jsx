import animation from "./data/65-magnifier-plus.json";
import { Lordicon } from "./player.jsx";

export function MagnifierPlus(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default MagnifierPlus;
