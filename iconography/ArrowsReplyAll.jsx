import animation from "./data/4013-arrows-reply-all.json";
import { Lordicon } from "./player.jsx";

export function ArrowsReplyAll(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ArrowsReplyAll;
