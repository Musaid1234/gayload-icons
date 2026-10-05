import animation from "./data/746-chip.json";
import { Lordicon } from "./player.jsx";

export function Chip(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Chip;
