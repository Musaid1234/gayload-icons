import animation from "./data/4425-cube.json";
import { Lordicon } from "./player.jsx";

export function Cube(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Cube;
