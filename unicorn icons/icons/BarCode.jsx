import webmUrl from "../media/0130-bar-code.webm";
import svgUrl from "../media/0130-bar-code.svg";
import { UnicornIcon } from "../player.jsx";

export function BarCode(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default BarCode;
