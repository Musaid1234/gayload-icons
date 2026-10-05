import animation from "./data/267-thumb-up.json";
import { Lordicon } from "./player.jsx";

export function ThumbUp(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ThumbUp;
