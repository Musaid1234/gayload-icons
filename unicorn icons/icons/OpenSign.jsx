import webmUrl from "../media/0334-open-sign.webm";
import svgUrl from "../media/0334-open-sign.svg";
import { UnicornIcon } from "../player.jsx";

export function OpenSign(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default OpenSign;
