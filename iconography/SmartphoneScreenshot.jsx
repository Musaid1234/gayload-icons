import animation from "./data/4108-smartphone-screenshot.json";
import { Lordicon } from "./player.jsx";

export function SmartphoneScreenshot(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default SmartphoneScreenshot;
