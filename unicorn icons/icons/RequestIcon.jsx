import webmUrl from "../media/0056-request-icon.webm";
import svgUrl from "../media/0056-request-icon.svg";
import { UnicornIcon } from "../player.jsx";

export function RequestIcon(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default RequestIcon;
