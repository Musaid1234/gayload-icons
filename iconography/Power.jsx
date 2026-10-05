import animation from "./data/4231-power.json";
import { Lordicon } from "./player.jsx";

export function Power(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Power;
