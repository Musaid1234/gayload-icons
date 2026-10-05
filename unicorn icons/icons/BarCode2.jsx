import webmUrl from "../media/0432-bar-code.webm";
import svgUrl from "../media/0432-bar-code.svg";
import { UnicornIcon } from "../player.jsx";

export function BarCode2(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default BarCode2;
