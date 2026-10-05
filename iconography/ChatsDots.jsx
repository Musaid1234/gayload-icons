import animation from "./data/3118-chats-dots.json";
import { Lordicon } from "./player.jsx";

export function ChatsDots(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ChatsDots;
