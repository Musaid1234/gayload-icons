import webmUrl from "../media/0349-marketing.webm";
import svgUrl from "../media/0349-marketing.svg";
import { UnicornIcon } from "../player.jsx";

export function Marketing(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Marketing;
