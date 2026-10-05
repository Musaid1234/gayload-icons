import animation from "./data/203-chat-dots.json";
import { Lordicon } from "./player.jsx";

export function ChatDots(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ChatDots;
