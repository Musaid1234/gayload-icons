import webmUrl from "../media/0377-send.webm";
import svgUrl from "../media/0377-send.svg";
import { UnicornIcon } from "../player.jsx";

export function Send(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Send;
