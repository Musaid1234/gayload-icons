import webmUrl from "../media/0249-notification-off.webm";
import svgUrl from "../media/0249-notification-off.svg";
import { UnicornIcon } from "../player.jsx";

export function NotificationOff(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default NotificationOff;
