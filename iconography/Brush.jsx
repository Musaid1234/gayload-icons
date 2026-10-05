import animation from "./data/118-brush.json";
import { Lordicon } from "./player.jsx";

export function Brush(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Brush;
