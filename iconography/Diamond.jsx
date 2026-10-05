import animation from "./data/724-diamond.json";
import { Lordicon } from "./player.jsx";

export function Diamond(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Diamond;
