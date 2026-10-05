import animation from "./data/4170-map.json";
import { Lordicon } from "./player.jsx";

export function Map(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Map;
