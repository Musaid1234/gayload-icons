import animation from "./data/3614-phone-split.json";
import { Lordicon } from "./player.jsx";

export function PhoneSplit(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default PhoneSplit;
