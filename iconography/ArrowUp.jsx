import animation from "./data/2754-arrow-up.json";
import { Lordicon } from "./player.jsx";

export function ArrowUp(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ArrowUp;
