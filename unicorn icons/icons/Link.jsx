import webmUrl from "../media/0222-link.webm";
import svgUrl from "../media/0222-link.svg";
import { UnicornIcon } from "../player.jsx";

export function Link(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Link;
