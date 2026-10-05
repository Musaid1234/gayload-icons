import animation from "./data/4212-bezier-vector.json";
import { Lordicon } from "./player.jsx";

export function BezierVector(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default BezierVector;
