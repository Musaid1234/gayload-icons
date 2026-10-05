import animation from "./data/3147-crosshair-alt.json";
import { Lordicon } from "./player.jsx";

export function CrosshairAlt(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default CrosshairAlt;
