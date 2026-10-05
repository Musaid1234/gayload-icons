import animation from "./data/400-bookmark.json";
import { Lordicon } from "./player.jsx";

export function Bookmark(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Bookmark;
