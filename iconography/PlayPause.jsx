import animation from "./data/4287-play-pause.json";
import { Lordicon } from "./player.jsx";

export function PlayPause(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default PlayPause;
