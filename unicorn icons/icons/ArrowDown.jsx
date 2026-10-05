import webmUrl from "../media/0091-arrow-down.webm";
import svgUrl from "../media/0091-arrow-down.svg";
import { UnicornIcon } from "../player.jsx";

export function ArrowDown(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default ArrowDown;
