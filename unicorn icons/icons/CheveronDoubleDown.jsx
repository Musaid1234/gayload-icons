import webmUrl from "../media/0030-cheveron-double-down.webm";
import svgUrl from "../media/0030-cheveron-double-down.svg";
import { UnicornIcon } from "../player.jsx";

export function CheveronDoubleDown(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default CheveronDoubleDown;
