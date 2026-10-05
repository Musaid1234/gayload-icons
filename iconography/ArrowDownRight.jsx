import animation from "./data/3384-arrow-down-right.json";
import { Lordicon } from "./player.jsx";

export function ArrowDownRight(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ArrowDownRight;
