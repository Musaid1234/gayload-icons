import webmUrl from "../media/0237-message.webm";
import svgUrl from "../media/0237-message.svg";
import { UnicornIcon } from "../player.jsx";

export function Message(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Message;
