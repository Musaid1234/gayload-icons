import webmUrl from "../media/0210-cut.webm";
import svgUrl from "../media/0210-cut.svg";
import { UnicornIcon } from "../player.jsx";

export function Cut(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Cut;
