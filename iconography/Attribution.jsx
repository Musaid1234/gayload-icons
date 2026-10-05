import animation from "./data/4015-attribution.json";
import { Lordicon } from "./player.jsx";

export function Attribution(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Attribution;
