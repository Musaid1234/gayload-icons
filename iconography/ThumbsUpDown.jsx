import animation from "./data/3104-thumbs-up-down.json";
import { Lordicon } from "./player.jsx";

export function ThumbsUpDown(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ThumbsUpDown;
