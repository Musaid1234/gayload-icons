import animation from "./data/3571-box-front-label.json";
import { Lordicon } from "./player.jsx";

export function BoxFrontLabel(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default BoxFrontLabel;
