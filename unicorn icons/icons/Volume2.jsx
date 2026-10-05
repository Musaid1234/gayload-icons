import webmUrl from "../media/0103-volume2.webm";
import svgUrl from "../media/0103-volume2.svg";
import { UnicornIcon } from "../player.jsx";

export function Volume2(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Volume2;
