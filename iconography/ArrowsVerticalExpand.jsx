import animation from "./data/375-arrows-vertical-expand.json";
import { Lordicon } from "./player.jsx";

export function ArrowsVerticalExpand(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ArrowsVerticalExpand;
