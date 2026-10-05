import webmUrl from "../media/0197-face-id-wink.webm";
import svgUrl from "../media/0197-face-id-wink.svg";
import { UnicornIcon } from "../player.jsx";

export function FaceIdWink(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default FaceIdWink;
