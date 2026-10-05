import webmUrl from "../media/0131-code.webm";
import svgUrl from "../media/0131-code.svg";
import { UnicornIcon } from "../player.jsx";

export function Code(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Code;
