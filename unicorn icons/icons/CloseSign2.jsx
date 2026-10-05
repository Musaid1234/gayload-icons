import webmUrl from "../media/0454-close-sign.webm";
import svgUrl from "../media/0454-close-sign.svg";
import { UnicornIcon } from "../player.jsx";

export function CloseSign2(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default CloseSign2;
