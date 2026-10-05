import animation from "./data/4199-message-oval.json";
import { Lordicon } from "./player.jsx";

export function MessageOval(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default MessageOval;
