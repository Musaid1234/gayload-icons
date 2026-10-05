import animation from "./data/377-arrow-reply.json";
import { Lordicon } from "./player.jsx";

export function ArrowReply(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ArrowReply;
