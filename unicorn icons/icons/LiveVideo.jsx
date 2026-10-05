import webmUrl from "../media/0475-live-video.webm";
import svgUrl from "../media/0475-live-video.svg";
import { UnicornIcon } from "../player.jsx";

export function LiveVideo(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default LiveVideo;
