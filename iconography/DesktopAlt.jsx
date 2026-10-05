import animation from "./data/4125-desktop-alt.json";
import { Lordicon } from "./player.jsx";

export function DesktopAlt(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default DesktopAlt;
