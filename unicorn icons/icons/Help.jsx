import webmUrl from "../media/0326-help.webm";
import svgUrl from "../media/0326-help.svg";
import { UnicornIcon } from "../player.jsx";

export function Help(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Help;
