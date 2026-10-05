import webmUrl from "../media/0415-arrow4.webm";
import svgUrl from "../media/0415-arrow4.svg";
import { UnicornIcon } from "../player.jsx";

export function Arrow4(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Arrow4;
