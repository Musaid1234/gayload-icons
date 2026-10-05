import webmUrl from "../media/0143-close-sign.webm";
import svgUrl from "../media/0143-close-sign.svg";
import { UnicornIcon } from "../player.jsx";

export function CloseSign(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default CloseSign;
