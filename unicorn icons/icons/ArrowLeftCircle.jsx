import webmUrl from "../media/0041-arrow-left-circle.webm";
import svgUrl from "../media/0041-arrow-left-circle.svg";
import { UnicornIcon } from "../player.jsx";

export function ArrowLeftCircle(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default ArrowLeftCircle;
