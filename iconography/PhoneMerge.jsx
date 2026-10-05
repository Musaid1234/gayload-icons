import animation from "./data/3613-phone-merge.json";
import { Lordicon } from "./player.jsx";

export function PhoneMerge(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default PhoneMerge;
