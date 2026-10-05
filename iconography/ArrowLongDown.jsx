import animation from "./data/2758-arrow-long-down.json";
import { Lordicon } from "./player.jsx";

export function ArrowLongDown(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ArrowLongDown;
