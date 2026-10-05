import animation from "./data/2833-arrow-in-rectangle.json";
import { Lordicon } from "./player.jsx";

export function ArrowInRectangle(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ArrowInRectangle;
