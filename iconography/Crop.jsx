import animation from "./data/137-crop.json";
import { Lordicon } from "./player.jsx";

export function Crop(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Crop;
