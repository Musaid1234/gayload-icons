import animation from "./data/313-avatars-two.json";
import { Lordicon } from "./player.jsx";

export function AvatarsTwo(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default AvatarsTwo;
