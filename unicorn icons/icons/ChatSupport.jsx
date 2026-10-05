import webmUrl from "../media/0182-chat-support.webm";
import svgUrl from "../media/0182-chat-support.svg";
import { UnicornIcon } from "../player.jsx";

export function ChatSupport(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default ChatSupport;
