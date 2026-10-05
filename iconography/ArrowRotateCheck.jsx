import animation from "./data/4301-arrow-rotate-check.json";
import { Lordicon } from "./player.jsx";

export function ArrowRotateCheck(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ArrowRotateCheck;
