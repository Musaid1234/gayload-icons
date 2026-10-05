import webmUrl from "../media/0092-arrow-up.webm";
import svgUrl from "../media/0092-arrow-up.svg";
import { UnicornIcon } from "../player.jsx";

export function ArrowUp(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default ArrowUp;
