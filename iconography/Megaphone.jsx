import animation from "./data/2873-megaphone.json";
import { Lordicon } from "./player.jsx";

export function Megaphone(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Megaphone;
