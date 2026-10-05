import webmUrl from "../media/0204-copy.webm";
import svgUrl from "../media/0204-copy.svg";
import { UnicornIcon } from "../player.jsx";

export function Copy(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Copy;
