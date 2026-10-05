import webmUrl from "../media/0447-online-shopping-window.webm";
import svgUrl from "../media/0447-online-shopping-window.svg";
import { UnicornIcon } from "../player.jsx";

export function OnlineShoppingWindow(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default OnlineShoppingWindow;
