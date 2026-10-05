import animation from "./data/22-play.json";
import { Lordicon } from "./player.jsx";

export function Play(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Play;
