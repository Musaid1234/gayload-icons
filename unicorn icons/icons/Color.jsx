import webmUrl from "../media/0192-color.webm";
import svgUrl from "../media/0192-color.svg";
import { UnicornIcon } from "../player.jsx";

export function Color(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Color;
