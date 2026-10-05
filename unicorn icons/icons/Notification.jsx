import webmUrl from "../media/0241-notification.webm";
import svgUrl from "../media/0241-notification.svg";
import { UnicornIcon } from "../player.jsx";

export function Notification(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Notification;
