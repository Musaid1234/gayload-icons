import animation from "./data/3611-phone-outgoing.json";
import { Lordicon } from "./player.jsx";

export function PhoneOutgoing(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default PhoneOutgoing;
