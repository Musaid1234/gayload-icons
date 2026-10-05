import animation from "./data/225-arrow-long-right.json";
import { Lordicon } from "./player.jsx";

export function ArrowLongRight(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ArrowLongRight;
