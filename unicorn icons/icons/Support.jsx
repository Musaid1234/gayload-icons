import webmUrl from "../media/0328-support.webm";
import svgUrl from "../media/0328-support.svg";
import { UnicornIcon } from "../player.jsx";

export function Support(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Support;
