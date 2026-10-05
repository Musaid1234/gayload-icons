import webmUrl from "../media/0036-arrow-up-circle.webm";
import svgUrl from "../media/0036-arrow-up-circle.svg";
import { UnicornIcon } from "../player.jsx";

export function ArrowUpCircle(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default ArrowUpCircle;
