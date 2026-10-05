import animation from "./data/3602-phone-plus.json";
import { Lordicon } from "./player.jsx";

export function PhonePlus(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default PhonePlus;
