import animation from "./data/3113-phone-end.json";
import { Lordicon } from "./player.jsx";

export function PhoneEnd(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default PhoneEnd;
