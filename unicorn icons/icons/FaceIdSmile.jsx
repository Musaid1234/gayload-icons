import webmUrl from "../media/0196-face-id-smile.webm";
import svgUrl from "../media/0196-face-id-smile.svg";
import { UnicornIcon } from "../player.jsx";

export function FaceIdSmile(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default FaceIdSmile;
