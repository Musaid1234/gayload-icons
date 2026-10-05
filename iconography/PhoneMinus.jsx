import animation from "./data/3603-phone-minus.json";
import { Lordicon } from "./player.jsx";

export function PhoneMinus(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default PhoneMinus;
