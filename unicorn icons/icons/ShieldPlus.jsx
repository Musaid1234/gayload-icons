import webmUrl from "../media/0254-shield-plus.webm";
import svgUrl from "../media/0254-shield-plus.svg";
import { UnicornIcon } from "../player.jsx";

export function ShieldPlus(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default ShieldPlus;
