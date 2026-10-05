import webmUrl from "../media/0040-arrow-right-circle.webm";
import svgUrl from "../media/0040-arrow-right-circle.svg";
import { UnicornIcon } from "../player.jsx";

export function ArrowRightCircle(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default ArrowRightCircle;
