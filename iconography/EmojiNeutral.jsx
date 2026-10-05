import animation from "./data/4179-emoji-neutral.json";
import { Lordicon } from "./player.jsx";

export function EmojiNeutral(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default EmojiNeutral;
