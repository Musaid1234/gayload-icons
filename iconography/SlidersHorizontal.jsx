import animation from "./data/380-sliders-horizontal.json";
import { Lordicon } from "./player.jsx";

export function SlidersHorizontal(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default SlidersHorizontal;
