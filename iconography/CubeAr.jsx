import animation from "./data/1458-cube-ar.json";
import { Lordicon } from "./player.jsx";

export function CubeAr(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default CubeAr;
