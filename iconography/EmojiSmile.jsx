import animation from "./data/261-emoji-smile.json";
import { Lordicon } from "./player.jsx";

export function EmojiSmile(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default EmojiSmile;
