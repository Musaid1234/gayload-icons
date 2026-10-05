import webmUrl from "../media/0332-arrow-left.webm";
import svgUrl from "../media/0332-arrow-left.svg";
import { UnicornIcon } from "../player.jsx";

export function ArrowLeft(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default ArrowLeft;
