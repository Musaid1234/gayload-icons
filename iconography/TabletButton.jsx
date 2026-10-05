import animation from "./data/4131-tablet-button.json";
import { Lordicon } from "./player.jsx";

export function TabletButton(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default TabletButton;
