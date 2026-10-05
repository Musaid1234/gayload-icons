import animation from "./data/3119-rss-feed.json";
import { Lordicon } from "./player.jsx";

export function RssFeed(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default RssFeed;
