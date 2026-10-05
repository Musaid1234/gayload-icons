import webmUrl from "../media/0023-cheveron-double-up.webm";
import svgUrl from "../media/0023-cheveron-double-up.svg";
import { UnicornIcon } from "../player.jsx";

export function CheveronDoubleUp(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default CheveronDoubleUp;
