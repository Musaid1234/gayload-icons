import animation from "./data/4120-arrow-up-line.json";
import { Lordicon } from "./player.jsx";

export function ArrowUpLine(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ArrowUpLine;
