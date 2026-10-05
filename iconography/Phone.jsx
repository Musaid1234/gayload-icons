import animation from "./data/140-phone.json";
import { Lordicon } from "./player.jsx";

export function Phone(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Phone;
