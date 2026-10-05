import webmUrl from "../media/0244-paste.webm";
import svgUrl from "../media/0244-paste.svg";
import { UnicornIcon } from "../player.jsx";

export function Paste(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Paste;
