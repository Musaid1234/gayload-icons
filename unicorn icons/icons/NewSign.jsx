import webmUrl from "../media/0444-new-sign.webm";
import svgUrl from "../media/0444-new-sign.svg";
import { UnicornIcon } from "../player.jsx";

export function NewSign(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default NewSign;
