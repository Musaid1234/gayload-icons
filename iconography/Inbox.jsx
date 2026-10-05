import animation from "./data/361-inbox.json";
import { Lordicon } from "./player.jsx";

export function Inbox(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Inbox;
