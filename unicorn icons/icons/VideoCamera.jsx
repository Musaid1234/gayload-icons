import webmUrl from "../media/0482-video-camera.webm";
import svgUrl from "../media/0482-video-camera.svg";
import { UnicornIcon } from "../player.jsx";

export function VideoCamera(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default VideoCamera;
