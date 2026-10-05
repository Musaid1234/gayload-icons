import animation from "./data/142-arrow-share.json";
import { Lordicon } from "./player.jsx";

export function ArrowShare(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ArrowShare;
