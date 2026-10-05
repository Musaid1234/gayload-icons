import webmUrl from "../media/0397-bin-bounce.webm";
import svgUrl from "../media/0397-bin-bounce.svg";
import { UnicornIcon } from "../player.jsx";

export function BinBounce(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default BinBounce;
