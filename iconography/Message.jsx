import animation from "./data/4198-message.json";
import { Lordicon } from "./player.jsx";

export function Message(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Message;
