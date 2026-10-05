import animation from "./data/3494-translation.json";
import { Lordicon } from "./player.jsx";

export function Translation(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Translation;
