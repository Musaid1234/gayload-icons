import webmUrl from "../media/0195-face-id-rotate.webm";
import svgUrl from "../media/0195-face-id-rotate.svg";
import { UnicornIcon } from "../player.jsx";

export function FaceIdRotate(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default FaceIdRotate;
