import webmUrl from "../media/0043-arrow-down-circle.webm";
import svgUrl from "../media/0043-arrow-down-circle.svg";
import { UnicornIcon } from "../player.jsx";

export function ArrowDownCircle(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default ArrowDownCircle;
