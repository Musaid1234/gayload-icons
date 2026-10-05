import animation from "./data/3114-chat.json";
import { Lordicon } from "./player.jsx";

export function Chat(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Chat;
