import animation from "./data/25-cross-circle.json";
import { Lordicon } from "./player.jsx";

export function CrossCircle(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default CrossCircle;
