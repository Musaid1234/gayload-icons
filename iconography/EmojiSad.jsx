import animation from "./data/263-emoji-sad.json";
import { Lordicon } from "./player.jsx";

export function EmojiSad(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default EmojiSad;
