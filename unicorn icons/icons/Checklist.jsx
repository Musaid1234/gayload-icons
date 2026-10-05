import webmUrl from "../media/0202-checklist.webm";
import svgUrl from "../media/0202-checklist.svg";
import { UnicornIcon } from "../player.jsx";

export function Checklist(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Checklist;
