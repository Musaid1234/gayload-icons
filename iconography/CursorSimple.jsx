import animation from "./data/4338-cursor-simple.json";
import { Lordicon } from "./player.jsx";

export function CursorSimple(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default CursorSimple;
