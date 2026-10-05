import animation from "./data/1122-thumb-down.json";
import { Lordicon } from "./player.jsx";

export function ThumbDown(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ThumbDown;
