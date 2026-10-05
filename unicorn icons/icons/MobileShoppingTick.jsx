import webmUrl from "../media/0442-mobile-shopping-tick.webm";
import svgUrl from "../media/0442-mobile-shopping-tick.svg";
import { UnicornIcon } from "../player.jsx";

export function MobileShoppingTick(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default MobileShoppingTick;
