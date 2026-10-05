import animation from "./data/2806-smartphone-button.json";
import { Lordicon } from "./player.jsx";

export function SmartphoneButton(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default SmartphoneButton;
