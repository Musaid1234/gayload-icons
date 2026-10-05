import animation from "./data/3612-phone-incomming.json";
import { Lordicon } from "./player.jsx";

export function PhoneIncomming(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default PhoneIncomming;
