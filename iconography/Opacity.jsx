import animation from "./data/2603-opacity.json";
import { Lordicon } from "./player.jsx";

export function Opacity(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Opacity;
