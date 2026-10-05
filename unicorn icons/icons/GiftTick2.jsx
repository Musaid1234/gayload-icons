import webmUrl from "../media/0419-gift-tick.webm";
import svgUrl from "../media/0419-gift-tick.svg";
import { UnicornIcon } from "../player.jsx";

export function GiftTick2(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default GiftTick2;
