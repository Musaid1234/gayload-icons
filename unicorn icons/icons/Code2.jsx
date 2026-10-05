import webmUrl from "../media/0104-code2.webm";
import svgUrl from "../media/0104-code2.svg";
import { UnicornIcon } from "../player.jsx";

export function Code2(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Code2;
