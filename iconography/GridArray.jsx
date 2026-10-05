import animation from "./data/1384-grid-array.json";
import { Lordicon } from "./player.jsx";

export function GridArray(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default GridArray;
