import webmUrl from "../media/0369-diamond.webm";
import svgUrl from "../media/0369-diamond.svg";
import { UnicornIcon } from "../player.jsx";

export function Diamond(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Diamond;
