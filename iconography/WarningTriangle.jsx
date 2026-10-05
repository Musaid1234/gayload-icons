import animation from "./data/1140-warning-triangle.json";
import { Lordicon } from "./player.jsx";

export function WarningTriangle(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default WarningTriangle;
