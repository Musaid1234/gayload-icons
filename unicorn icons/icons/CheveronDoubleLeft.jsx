import webmUrl from "../media/0028-cheveron-double-left.webm";
import svgUrl from "../media/0028-cheveron-double-left.svg";
import { UnicornIcon } from "../player.jsx";

export function CheveronDoubleLeft(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default CheveronDoubleLeft;
