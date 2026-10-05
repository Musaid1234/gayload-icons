import animation from "./data/762-brush-alt.json";
import { Lordicon } from "./player.jsx";

export function BrushAlt(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default BrushAlt;
