import webmUrl from "../media/0138-gift-tick.webm";
import svgUrl from "../media/0138-gift-tick.svg";
import { UnicornIcon } from "../player.jsx";

export function GiftTick(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default GiftTick;
