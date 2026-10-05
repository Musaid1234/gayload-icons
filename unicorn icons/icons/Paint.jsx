import webmUrl from "../media/0243-paint.webm";
import svgUrl from "../media/0243-paint.svg";
import { UnicornIcon } from "../player.jsx";

export function Paint(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Paint;
