import webmUrl from "../media/0350-podcast.webm";
import svgUrl from "../media/0350-podcast.svg";
import { UnicornIcon } from "../player.jsx";

export function Podcast(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Podcast;
