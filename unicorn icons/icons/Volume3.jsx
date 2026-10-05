import webmUrl from "../media/0101-volume3.webm";
import svgUrl from "../media/0101-volume3.svg";
import { UnicornIcon } from "../player.jsx";

export function Volume3(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Volume3;
