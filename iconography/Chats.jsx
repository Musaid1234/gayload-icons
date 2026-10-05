import animation from "./data/202-chats.json";
import { Lordicon } from "./player.jsx";

export function Chats(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Chats;
