import animation from "./data/1041-speaker.json";
import { Lordicon } from "./player.jsx";

export function Speaker(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Speaker;
