import webmUrl from "../media/0127-volume1.webm";
import svgUrl from "../media/0127-volume1.svg";
import { UnicornIcon } from "../player.jsx";

export function Volume1(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Volume1;
