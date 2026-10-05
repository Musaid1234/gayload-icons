import webmUrl from "../media/0258-plus.webm";
import svgUrl from "../media/0258-plus.svg";
import { UnicornIcon } from "../player.jsx";

export function Plus(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Plus;
