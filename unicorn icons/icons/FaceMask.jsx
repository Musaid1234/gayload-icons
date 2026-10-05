import webmUrl from "../media/0074-face-mask.webm";
import svgUrl from "../media/0074-face-mask.svg";
import { UnicornIcon } from "../player.jsx";

export function FaceMask(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default FaceMask;
