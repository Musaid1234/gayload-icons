import animation from "./data/3616-phone-missed.json";
import { Lordicon } from "./player.jsx";

export function PhoneMissed(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default PhoneMissed;
