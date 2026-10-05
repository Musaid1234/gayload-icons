import animation from "./data/29-play-circle.json";
import { Lordicon } from "./player.jsx";

export function PlayCircle(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default PlayCircle;
