import animation from "./data/12-layers.json";
import { Lordicon } from "./player.jsx";

export function Layers(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Layers;
